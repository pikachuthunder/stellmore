"""
extract_images.py
─────────────────
Extracts product images from Stellmore Italia datasheets
with a clean WHITE background at high resolution.

SETUP (run once):
    pip install pymupdf

USAGE:
    Run: python extract_images.py
"""

import fitz
import os

# ── Config ───────────────────────────────────────────────────────────────
INPUT_FOLDER  = "public/datasheets/indoor"
OUTPUT_FOLDER = "public/images/indoor_new"
ZOOM          = 3      # 3x = ~216 DPI, sharp and clean
PADDING       = 25     # padding around detected product image
CROP_TOP      = 0.33   # fallback crop zone top (% of page height)
CROP_BOTTOM   = 0.65   # fallback crop zone bottom (% of page height)
# ─────────────────────────────────────────────────────────────────────────

PDF_TO_IMAGE = {
    "Stellmore Italia Aina.pdf":               "Stellmore_Italia_Aina.jpg",
    "stellmore Italia alba.pdf":               "stellmore_Italia_alba.jpg",
    "Stellmore Italia Albaviva.pdf":           "Stellmore_Italia_Albaviva.jpg",
    "Stellmore italia Alvise R.pdf":           "Stellmore_italia_Alvise_R.jpg",
    "Stellmore Italia Alvise S.pdf":           "Stellmore_Italia_Alvise_S.jpg",
    "Stellmore Italia Alvise sd.pdf":          "Stellmore_Italia_Alvise_sd.jpg",
    "Stellmore Italia Bellance.pdf":           "Stellmore_Italia_Bellance.jpg",
    "Stellmore Italia Bianco.pdf":             "Stellmore_Italia_Bianco.jpg",
    "Stellmore Italia Brillio.pdf":            "Stellmore_Italia_Brillio.jpg",
    "Stellmore Italia Brillio-D.pdf":          "Stellmore_Italia_Brillio-D.jpg",
    "Stellmore Italia Cavero.pdf":             "Stellmore_Italia_Cavero.jpg",
    "Stellmore Italia Cielo.pdf":              "Stellmore_Italia_Cielo.jpg",
    "Stellmore Italia Elio R.pdf":             "Stellmore_Italia_Elio_R.jpg",
    "Stellmore Italia Elio.pdf":               "Stellmore_Italia_Elio.jpg",
    "Stellmore Italia elly.pdf":               "Stellmore_Italia_elly.jpg",
    "Stellmore Italia faro.pdf":               "Stellmore_Italia_faro.jpg",
    "Stellmore Italia Fiamma.pdf":             "Stellmore_Italia_Fiamma.jpg",
    "Stellmore Italia Fiamma -d.pdf":          "Stellmore_Italia_Fiamma_-d.jpg",
    "Stellmore Italia Blancha.pdf":            "Stellmore_Italia_Blancha.jpg",
    "Stellmore Italia Blancha B.pdf":          "Stellmore_Italia_Blancha_B.jpg",
    "Stellmore Italia Ciro.pdf":               "Stellmore_Italia_Ciro.jpg",
    "Stellmore Italia ellena s.pdf":           "Stellmore_Italia_ellena_s.jpg",
    "Stellmore Italia Ellena.pdf":             "Stellmore_Italia_Ellena.jpg",
    "Stellmore Italia Filo.pdf":               "Stellmore_Italia_Filo.jpg",
    "Stellmore Italia Fiora.pdf":              "Stellmore_Italia_Fiora.jpg",
    "Stellmore Italia Giada.pdf":              "Stellmore_Italia_Giada.jpg",
    "Stellmore Italia Joe A.pdf":              "Stellmore_Italia_Joe_A.jpg",
    "Stellmore Italia Joe B.pdf":              "Stellmore_Italia_Joe_B.jpg",
    "Stellmore Italia Lampada.pdf":            "Stellmore_Italia_Lampada.jpg",
    "Stellmore Italia Lucentio.pdf":           "Stellmore_Italia_Lucentio.jpg",
    "Stellmore Italia Luceria.pdf":            "Stellmore_Italia_Luceria.jpg",
    "Stellmore Italia Lumira.pdf":             "Stellmore_Italia_Lumira.jpg",
    "Stellmore Italia Nello.pdf":              "Stellmore_Italia_Nello.jpg",
    "Stellmore Italia Rino-A.pdf":             "Stellmore_Italia_Rino_A.jpg",
    "Stellmore Italia Rino-B.pdf":             "Stellmore_Italia_Rino_B.jpg",
    "Stellmore Italia Serena.pdf":             "Stellmore_Italia_Serena.jpg",
    "Stellmore Italia Soleluce.pdf":           "Stellmore_Italia_Soleluce.jpg",
    "Stellmore Italia Veneluce.pdf":           "Stellmore_Italia_Veneluce.jpg",
    "Stellmore Italia Zain.pdf":               "Stellmore_Italia_Zain.jpg",
    "Stellmore Italia Zohar.pdf":              "Stellmore_Italia_Zohar.jpg",
    "Stellmore Italia-BRIANO-1212S-GN.pdf":    "Stellmore_Italia_Briano.jpg",
    "Stellmore Italia-BRIANO-D-2412S-GN.pdf":  "Stellmore_Italia_Briano_D.jpg",
    "Stellmore Italia-BRIANO-T-127S-GN.pdf":   "Stellmore_Italia_Briano_T.jpg",
    "Stellmore Italia-BRIO-SLM-C9074.pdf":     "Stellmore_Italia_Brio.jpg",
    "Stellmore Italia-BRIO-D-SLM-C1022.pdf":   "Stellmore_Italia_Brio_D.jpg",
    "Stellmore Italia-BRIO-T-SLM-C1023.pdf":   "Stellmore_Italia_Brio_T.jpg",
    "Stellmore Italia-CHIARA Family.pdf":       "Stellmore_Italia_Chiara.jpg",
    "Stellmore Italia-COMO.pdf":               "Stellmore_Italia_Como.jpg",
    "Stellmore Italia-COMO-D.pdf":             "Stellmore_Italia_Como_D.jpg",
    "Stellmore Italia-LAGO Family.pdf":         "Stellmore_Italia_Lago.jpg",
    "Stellmore Italia-LUSTRO-SLM-CL05.pdf":    "Stellmore_Italia_Lustro.jpg",
    "Stellmore Italia-RAGGIO.pdf":             "Stellmore_Italia_Raggio.jpg",
    "Stellmore Italia Linea A.pdf":            "Stellmore_Italia_Linea_A.jpg",
    "Stellmore Italia Linea B.pdf":            "Stellmore_Italia_Linea_B.jpg",
    "Stellmore Italia Linea C.pdf":            "Stellmore_Italia_Linea_C.jpg",
    "Stellmore Italia Linea D.pdf":            "Stellmore_Italia_Linea_D.jpg",
    "Stellmore Italia Sottile.pdf":            "Stellmore_Italia_Sottile.jpg",
    "Stellmore Italia traccia.pdf":            "Stellmore_Italia_Traccia.jpg",
    "Stellmore Italia Scena w.pdf":            "Stellmore_Italia_Scena_W.jpg",
    "Stellmore Italia Ludano.pdf":             "Stellmore_Italia_Ludano.jpg",
    "Stellmore Italia Luzio.pdf":              "Stellmore_Italia_Luzio.jpg",
    "Stellmore Italia Milano.pdf":             "Stellmore_Italia_Milano.jpg",
    "Stellmore Italia Mirino.pdf":             "Stellmore_Italia_Mirino.jpg",
    "stellmore Italia Tono.pdf":               "Stellmore_Italia_Tono.jpg",
    "Stellmore italia Linea pro.pdf":          "Stellmore_Italia_Linea_Pro.jpg",
    "Stellmore Italia Linea.pdf":              "Stellmore_Italia_Linea.jpg",
    "Stellmore Italia Scena.pdf":              "Stellmore_Italia_Scena.jpg",
    "Stellmore Italia-SPLENDORE-H.pdf":        "Stellmore_Italia_Splendore_H.jpg",
    "Stellmore Italia-SPLENDORE-R.pdf":        "Stellmore_Italia_Splendore_R.jpg",
    "Stellmore Italia-SPLENDORE-S.pdf":        "Stellmore_Italia_Splendore_S.jpg",
}

def render_region(page, clip_rect):
    """Render a rect from the page at ZOOM resolution with white background."""
    mat = fitz.Matrix(ZOOM, ZOOM)
    return page.get_pixmap(
        matrix=mat,
        clip=clip_rect,
        colorspace=fitz.csRGB,
        alpha=False,
    )

# ── Run ──────────────────────────────────────────────────────────────────
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

success   = []
missing   = []
fallbacks = []

for pdf_name, out_name in PDF_TO_IMAGE.items():
    pdf_path = os.path.join(INPUT_FOLDER, pdf_name)

    if not os.path.exists(pdf_path):
        missing.append(pdf_name)
        continue

    doc  = fitz.open(pdf_path)
    page = doc[0]
    pw, ph = page.rect.width, page.rect.height

    # ── Method 1: find embedded product image position ──
    imgs = page.get_images(full=True)
    clip = None

    for img in imgs:
        xref = img[0]
        pix_ = fitz.Pixmap(doc, xref)

        # Skip the 1700x1566 background watermark
        if pix_.width == 1700 and pix_.height == 1566:
            continue

        # Skip very wide banners (logos/headers) ratio > 3:1
        if pix_.width > 0 and (pix_.width / pix_.height) > 3:
            continue

        rects = page.get_image_rects(img)
        if rects:
            r = rects[0]
            clip = fitz.Rect(
                r.x0 - PADDING,
                r.y0 - PADDING,
                r.x1 + PADDING,
                r.y1 + PADDING,
            )
            break

    # ── Method 2 fallback: crop the product zone by page % ──
    if clip is None:
        fallbacks.append(pdf_name)
        clip = fitz.Rect(
            pw * 0.1,
            ph * CROP_TOP,
            pw * 0.9,
            ph * CROP_BOTTOM,
        )

    pix      = render_region(page, clip)
    out_path = os.path.join(OUTPUT_FOLDER, out_name)
    pix.save(out_path)
    success.append(f"  ✓  {out_name}  ({pix.width}x{pix.height}px)")

# ── Summary ──────────────────────────────────────────────────────────────
print(f"\n{'─'*60}")
print(f"  Extracted  : {len(success)} / {len(PDF_TO_IMAGE)}")
print(f"  Missing    : {len(missing)}")
print(f"  Fallback   : {len(fallbacks)}  (crop-zone used)")
print(f"{'─'*60}\n")

for line in success:
    print(line)

if missing:
    print(f"\n⚠  PDFs not found in '{INPUT_FOLDER}/':")
    for f in missing:
        print(f"     {f}")

if fallbacks:
    print(f"\nℹ  Used crop-zone fallback for:")
    for f in fallbacks:
        print(f"     {f}")

print(f"\nDone — images saved to '{OUTPUT_FOLDER}/'")