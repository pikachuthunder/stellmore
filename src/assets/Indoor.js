// ============================================================
// Indoor.js — Stellmore Italia Product Data
// Imported by IndoorLighting.jsx as: { INDOOR_CATEGORIES }
//
// Structure: each product family is ONE entry.
// Wattage variants live in the `variants` array — only fields
// that differ per wattage (wattage, lumens, dims, code, tag)
// are stored there. Everything else is shared at family level.
// ============================================================

const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80";

export const INDOOR_CATEGORIES = [

  // ─────────────────────────────────────────────
  // 1. RECESSED LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "recessed",
    label: "Recessed Lights",
    tagline: "Clean ceiling integration, zero visual noise.",
    img: "/images/indoor_new/Stellmore_Italia_Tono.jpg",
    products: [

      // ── AINA ──
      {
        id: "aina",
        name: "AINA",
        desc: "Premium linear recessed downlight, cup-changeable design.",
        img: "/images/indoor_new/Stellmore_Italia_Aina.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "45°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Aina", url: "/datasheets/indoor/Stellmore Italia Aina.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "3W",  lumens: "255 lm",   dims: "45×45×36 mm",  code: "STR-102-25-3" },
          { wattage: "6W",  lumens: "510 lm",   dims: "75×45×36 mm",  code: "STR-102-25-6" },
          { wattage: "9W",  lumens: "765 lm",   dims: "105×45×36 mm", code: "STR-102-25-9" },
          { wattage: "15W", lumens: "1,275 lm", dims: "148×45×41 mm", code: "STR-102-25-15", tag: "BESTSELLER" },
          { wattage: "30W", lumens: "2,550 lm", dims: "237×38×41 mm", code: "STR-102-25-30" },
        ]
      },

      // ── ALBA ──
      {
        id: "alba",
        name: "ALBA",
        desc: "High-performance rimless spotlight, private mould exclusive form.",
        img: "/images/indoor_new/Stellmore_Italia_Alba.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "stellmore Italia alba", url: "/datasheets/indoor/stellmore Italia alba.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Aviation Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "3W",  lumens: "255 lm",   dims: "Ø45×30 mm",  code: "STR-202-02-3" },
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø67×42 mm",  code: "STR-202-02-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø82×54 mm",  code: "STR-202-02-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø100×80 mm", code: "STR-202-02-18" },
        ]
      },

      // ── ALBAVIVA ──
      {
        id: "albaviva",
        name: "ALBAVIVA",
        desc: "Rimless deep anti-glare spotlight, soft glare-free illumination.",
        img: "/images/indoor_new/Stellmore_Italia_Albaviva.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "20° / 50° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Albaviva", url: "/datasheets/indoor/Stellmore Italia Albaviva.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "5W",  lumens: "425 lm",   dims: "Ø40×57 mm",  code: "STR-202-23A-5" },
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø45×73 mm",  code: "STR-202-23A-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×85 mm",  code: "STR-202-23A-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø74×102 mm", code: "STR-202-23A-18" },
        ]
      },

      // ── ALVISE-R ──
      {
        id: "alvise-r",
        name: "ALVISE-R",
        desc: "Rimless deep anti-glare spotlight, IP44 rated.",
        img: "/images/indoor_new/Stellmore_Italia_Alvise_R.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 60°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore italia Alvise R", url: "/datasheets/indoor/Stellmore italia Alvise R.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø60×65 mm",   code: "STR-202-23-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø85×80 mm",   code: "STR-202-23-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø95×100 mm",  code: "STR-202-23-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø108×120 mm", code: "STR-202-23-30" },
        ]
      },

      // ── ALVISE-S ──
      {
        id: "alvise-s",
        name: "ALVISE-S",
        desc: "Square rimless deep anti-glare spotlight, IP44 rated.",
        img: "/images/indoor_new/Stellmore_Italia_Alvise_S.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Alvise S", url: "/datasheets/indoor/Stellmore Italia Alvise S.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "57×57×68 mm", code: "STR-102-23-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "80×80×78 mm", code: "STR-102-23-12" },
        ]
      },

      // ── ALVISE-SD ──
      {
        id: "alvise-sd",
        name: "ALVISE-SD",
        desc: "Square deep rimless anti-glare spotlight, IP44 rated.",
        img: "/images/indoor_new/Stellmore_Italia_Alvise_sd.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "20° / 60°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Alvise sd", url: "/datasheets/indoor/Stellmore Italia Alvise sd.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "76×76×77 mm",  code: "STR-101-39-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "93×93×100 mm", code: "STR-101-39-12" },
        ]
      },

      // ── BELLANCE ──
      {
        id: "bellance",
        name: "BELLANCE",
        desc: "Adjustable recessed spotlight with changeable cup system, anti-glare.",
        img: "/images/indoor_new/Stellmore_Italia_Bellance.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Bellance", url: "/datasheets/indoor/Stellmore Italia Bellance.pdf", size: "PDF" }],
          efficiency: "85–105 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595–735 lm",   dims: "Ø62×43 mm", code: "STR-203-81-7" },
          { wattage: "12W", lumens: "1,020–1,260 lm", dims: "Ø82×45 mm", code: "STR-203-81-12" },
        ]
      },

      // ── BIANCO ──
      {
        id: "bianco",
        name: "BIANCO",
        desc: "Rimless LED spotlight with deep anti-glare black baffle reflector.",
        img: "/images/indoor_new/Stellmore_Italia_Bianco.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Bianco", url: "/datasheets/indoor/Stellmore Italia Bianco.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "9W",  lumens: "765 lm",   dims: "Ø85×80 mm", code: "STR-203-80-9" },
          { wattage: "15W", lumens: "1,275 lm", dims: "Ø85×80 mm", code: "STR-203-80-15" },
        ]
      },

      // ── BRILLIO ──
      {
        id: "brillio",
        name: "BRILLIO",
        desc: "Recessed LED spotlight, clean white bezel, open reflector, spring clip install.",
        img: "/images/indoor_new/Stellmore_Italia_Brillio.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "15° / 20° / 25° / 38° / 40° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Brillio", url: "/datasheets/indoor/Stellmore Italia Brillio.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø45×50 mm", code: "STR-204-01A-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×68 mm", code: "STR-204-01A-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø74×76 mm", code: "STR-204-01A-18" },
        ]
      },

      // ── BRILLIO-D ──
      {
        id: "brillio-d",
        name: "BRILLIO-D",
        desc: "Deep recessed COB LED, white reflector, black heat-sink body.",
        img: "/images/indoor_new/Stellmore_Italia_Brillio-D.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "15° / 20° / 25° / 38° / 40° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Brillio-D", url: "/datasheets/indoor/Stellmore Italia Brillio-D.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø45×50 mm", code: "STR-204-01B-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×68 mm", code: "STR-204-01B-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø74×76 mm", code: "STR-204-01B-18" },
        ]
      },

      // ── BRILLARE ──
      {
        id: "brillare",
        name: "BRILLARE",
        desc: "Flat-profile recessed LED downlight with ultra-wide beam angle and smooth opal diffuser for glare-free ambient illumination — ideal for general lighting in residential and commercial ceilings.",
        img: "/images/indoor_new/Stellmore_Italia_Brillare.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "120°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Brillare", url: "/datasheets/indoor/Stellmore Italia Brillare.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø87×44.5 mm", code: "STR-204-11-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø112×48 mm",  code: "STR-204-11-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø138×48 mm",  code: "STR-204-11-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø162×51 mm",  code: "STR-204-11-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø215×56 mm",  code: "STR-204-11-30" },
        ]
      },

      // ── CAVERO ──
      {
        id: "cavero",
        name: "CAVERO",
        desc: "Deep recessed LED, matte black trimless circular design, 97 lm/w.",
        img: "/images/indoor_new/Stellmore_Italia_Cavero.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "36°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Cavero", url: "/datasheets/indoor/Stellmore Italia Cavero.pdf", size: "PDF" }],
          efficiency: "97 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W", lumens: "679 lm", dims: "Ø100×70 mm", code: "STR-203-68-7" },
        ]
      },

      // ── CIELO ──
      {
        id: "cielo",
        name: "CIELO",
        desc: "Premium rimless architectural spotlight, deep-set reflector, anti-glare.",
        img: "/images/indoor_new/Stellmore_Italia_Cielo.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Cielo", url: "/datasheets/indoor/Stellmore Italia Cielo.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø66×62 mm", code: "STR-203-61-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø87×90 mm", code: "STR-203-61-12" },
        ]
      },

      // ── ELIO R ──
      {
        id: "elio-r",
        name: "ELIO R",
        desc: "Rimless deep anti-glare, aluminium reflector + PMMA opal PC lens.",
        img: "/images/indoor_new/Stellmore_Italia_Elio_R.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "20° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Elio R", url: "/datasheets/indoor/Stellmore Italia Elio R.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium · Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø70×77 mm",  code: "STR-201-38-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø93×100 mm", code: "STR-201-38-12" },
        ]
      },

      // ── ELIO ──
      {
        id: "elio",
        name: "ELIO",
        desc: "Rimless deep anti-glare recessed spotlight, opal lens diffuser.",
        img: "/images/indoor_new/Stellmore_Italia_Elio.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40° / 50°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Elio", url: "/datasheets/indoor/Stellmore Italia Elio.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium · Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø63×53 mm", code: "STR-203-30-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø80×68 mm", code: "STR-203-30-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø98×75 mm", code: "STR-203-30-18" },
        ]
      },

      // ── ELLY ──
      {
        id: "elly",
        name: "ELLY",
        desc: "Recessed downlight with frosted diffuser for smooth, glare-free illumination.",
        img: "/images/indoor_new/Stellmore_Italia_elly.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "120° (frosted diffuser)", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia elly", url: "/datasheets/indoor/Stellmore Italia elly.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø75×100 mm",  code: "STR-202-09-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø75×100 mm",  code: "STR-202-09-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø90×135 mm",  code: "STR-202-09-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø100×150 mm", code: "STR-202-09-24" },
          { wattage: "36W", lumens: "3,060 lm", dims: "Ø100×150 mm", code: "STR-202-09-36" },
        ]
      },

      // ── FARO ──
      {
        id: "faro",
        name: "FARO",
        desc: "High-efficiency LED recessed downlight, aluminium heat-sink, ultra-slim 35mm depth.",
        img: "/images/indoor_new/Stellmore_Italia_faro.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "110°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia faro", url: "/datasheets/indoor/Stellmore Italia faro.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø90×35 mm",  code: "STR-204-03-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø125×35 mm", code: "STR-204-02-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø150×35 mm", code: "STR-204-03-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø175×35 mm", code: "STR-204-03-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø230×35 mm", code: "STR-204-03-30" },
        ]
      },

      // ── FIAMMA ──
      {
        id: "fiamma",
        name: "FIAMMA",
        desc: "High-efficiency COB LED spotlight, faceted reflector, clean white trim.",
        img: "/images/indoor_new/Stellmore_Italia_Fiamma.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Fiamma", url: "/datasheets/indoor/Stellmore Italia Fiamma.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø53×65 mm",   code: "STR-204-10-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø68×81 mm",   code: "STR-204-10-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø80×90 mm",   code: "STR-204-10--18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø100×112 mm", code: "STR-204-10-30" },
          { wattage: "50W", lumens: "4,250 lm", dims: "Ø135×134 mm", code: "STR-204-10-50" },
        ]
      },

      // ── FIAMMA-D ──
      {
        id: "fiamma-d",
        name: "FIAMMA-D",
        desc: "Deep recessed COB LED, white trim + black inner reflector contrast.",
        img: "/images/indoor_new/Stellmore_Italia_Fiamma_-d.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Fiamma -d", url: "/datasheets/indoor/Stellmore Italia Fiamma -d.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø53×65 mm",   code: "STR-204-10B-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø68×81 mm",   code: "STR-204-10B-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø80×90 mm",   code: "STR-204-10B-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø100×112 mm", code: "STR-204-10B-30" },
          { wattage: "50W", lumens: "4,250 lm", dims: "Ø135×134 mm", code: "STR-204-10B-50" },
        ]
      },

      // ── FIORA ──
      {
        id: "fiora",
        name: "FIORA",
        desc: "Rimless Deep Cup Anti-Glare Spotlight with deep-set reflector, producing soft, focused illumination that is comfortable on the eyes and completely non-dazzling.",
        img: "/images/indoor_new/Stellmore_Italia_Fiora.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "50°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Fiora", url: "/datasheets/indoor/Stellmore Italia Fiora.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W", lumens: "595 lm", dims: "Ø60×54 mm", code: "STR-203-38-7" },
        ]
      },

      // ── GIADA ──
      {
        id: "giada",
        name: "GIADA",
        desc: "High-performance LED recessed downlight with round design, diffused lens for uniform light distribution, and integrated aluminum heat sink for optimal thermal management.",
        img: "/images/indoor_new/Stellmore_Italia_Giada.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Giada", url: "/datasheets/indoor/Stellmore Italia Giada.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "—", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø75×100 mm", code: "STR-202-09A-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø75×100 mm", code: "STR-202-09A-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø90×135 mm", code: "STR-202-09A-24" },
        ]
      },

      // ── JOE A ──
      {
        id: "joe-a",
        name: "JOE A",
        desc: "Modern dual-head recessed downlight with cup-changeable structure, flexible adjustments for different beam angles, and advanced anti-glare technology.",
        img: "/images/indoor_new/Stellmore_Italia_Joe_A.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "30°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Joe A", url: "/datasheets/indoor/Stellmore Italia Joe A.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "87×87×61 mm",  code: "STR-102-86-12" },
          { wattage: "24W", lumens: "2,040 lm", dims: "156×87×67 mm", code: "STR-102-86-24" },
          { wattage: "36W", lumens: "3,060 lm", dims: "227×87×67 mm", code: "STR-102-86-36" },
        ]
      },

      // ── JOE B ──
      {
        id: "joe-b",
        name: "JOE B",
        desc: "Black dual-head recessed downlight with cup-changeable reflector system and deep anti-glare optics delivering precise, comfortable lighting without dazzling.",
        img: "/images/indoor_new/Stellmore_Italia_Joe_B.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "45°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Joe B", url: "/datasheets/indoor/Stellmore Italia Joe B.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "6W",  lumens: "510 lm",   dims: "65×65×45 mm",   code: "STR-102-93-6" },
          { wattage: "12W", lumens: "1,020 lm", dims: "115×65×45 mm",  code: "STR-102-93-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "165×65×45 mm",  code: "STR-102-93-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "249×W63×50 mm", code: "STR-102-93-30" },
        ]
      },

      // ── LAMPADA ──
      {
        id: "lampada",
        name: "LAMPADA",
        desc: "Slim recessed downlight with high-efficiency LED module and diffused lens providing soft, glare-free light output for various indoor spaces.",
        img: "/images/indoor_new/Stellmore_Italia_Lampada.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Lampada", url: "/datasheets/indoor/Stellmore Italia Lampada.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "—", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø87×44.5 mm", code: "STR-204-02-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø112×48 mm",  code: "STR-204-02-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø138×48 mm",  code: "STR-204-02-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø162×51 mm",  code: "STR-204-02-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø215×56 mm",  code: "STR-204-02-30" },
        ]
      },

      // ── LUCENTIO ──
      {
        id: "lucentio",
        name: "LUCENTIO",
        desc: "High-performance recessed spotlight with sleek rimless profile and deep-set cup with black anti-glare reflector for exceptional visual comfort blending seamlessly into modern architectural ceilings.",
        img: "/images/indoor_new/Stellmore_Italia_Lucentio.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "45°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Lucentio", url: "/datasheets/indoor/Stellmore Italia Lucentio.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø70×55 mm", code: "STR-203-63-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø85×63 mm", code: "STR-203-63-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø99×91 mm", code: "STR-203-63-18" },
        ]
      },

      // ── LUCERIA ──
      {
        id: "luceria",
        name: "LUCERIA",
        desc: "Rimless Deep Cup Anti-Glare Spotlight with seamless ceiling finish, deep-set reflector, and anti-glare design ensuring minimal visual discomfort and precise beam control.",
        img: "/images/indoor_new/Stellmore_Italia_Luceria.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "23°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Luceria", url: "/datasheets/indoor/Stellmore Italia Luceria.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø73×67 mm", code: "STR-203-13-12" },
        ]
      },

      // ── LUMIRA ──
      {
        id: "lumira",
        name: "LUMIRA",
        desc: "High-performance deep recessed LED spotlight with matte white finish designed for seamless ceiling integration, delivering powerful, focused illumination with minimalist aesthetic.",
        img: "/images/indoor_new/Stellmore_Italia_Lumira.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "36° / 38° / 40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Lumira", url: "/datasheets/indoor/Stellmore Italia Lumira.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø45×64 mm",  code: "STR-204-04-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×90 mm",  code: "STR-204-04-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø74×112 mm", code: "STR-204-04-18" },
        ]
      },

      // ── RINO A ──
      {
        id: "rino-a",
        name: "RINO - A",
        desc: "Single-head recessed spotlight with deep cylindrical design concealing the light source for maximum glare control, minimalist white housing, and black inner baffle.",
        img: "/images/indoor_new/Stellmore_Italia_Rino_A.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Rino-A", url: "/datasheets/indoor/Stellmore Italia Rino-A.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø90×102 mm", code: "STR-202-82A-12" },
        ]
      },

      // ── RINO B ──
      {
        id: "rino-b",
        name: "RINO - B",
        desc: "Dual-head recessed spotlight in double-barrel configuration allowing dual beam targeting — ideal for asymmetric lighting, wall washing, or product highlighting.",
        img: "/images/indoor_new/Stellmore_Italia_Rino_B.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Rino-B", url: "/datasheets/indoor/Stellmore Italia Rino-B.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "24W", lumens: "2,040 lm", dims: "175×90×102 mm", code: "STR-202-82B-24" },
        ]
      },

      // ── SERENA ──
      {
        id: "serena",
        name: "SERENA",
        desc: "Rimless spotlight high-end lighting solution with deep body design delivering precise, anti-glare illumination that is soft on the eyes — ideal for premium interiors.",
        img: "/images/indoor_new/Stellmore_Italia_Serena.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40° / 45° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Serena", url: "/datasheets/indoor/Stellmore Italia Serena.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium · Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø60×69 mm",  code: "STR-202-43-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø85×78 mm",  code: "STR-202-43-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø100×98 mm", code: "STR-202-43-18" },
        ]
      },

      // ── SOLELUCE ──
      {
        id: "soleluce",
        name: "SOLELUCE",
        desc: "Premium rimless spotlight engineered for architectural lighting with deep-set reflector and anti-glare design ensuring precise light control with minimal glare.",
        img: "/images/indoor_new/Stellmore_Italia_Soleluce.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24° / 40° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Soleluce", url: "/datasheets/indoor/Stellmore Italia Soleluce.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø70×53.5 mm", code: "STR-202-67A-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø92×75 mm",   code: "STR-202-67A-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø110×76 mm",  code: "STR-202-67A-18" },
        ]
      },

      // ── VENELUCE ──
      {
        id: "veneluce",
        name: "VENELUCE",
        desc: "Deep recessed COB LED spotlight with white deep reflector for glare reduction and black heat sink body for enhanced thermal performance and durability.",
        img: "/images/indoor_new/Stellmore_Italia_Veneluce.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "36° / 38° / 40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Veneluce", url: "/datasheets/indoor/Stellmore Italia Veneluce.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø68×58 mm",  code: "STR-204-38-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø84×64 mm",  code: "STR-204-38-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø95×70 mm",  code: "STR-204-38-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø135×82 mm", code: "STR-204-38-24" },
        ]
      },

      // ── ZAIN ──
      {
        id: "zain",
        name: "ZAIN",
        desc: "High-performance recessed LED spotlight with changeable reflector cup, deep-set chrome-finish reflector, and anti-glare baffle design ensuring maximum visual comfort.",
        img: "/images/indoor_new/Stellmore_Italia_Zain.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "30° / 40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Zain", url: "/datasheets/indoor/Stellmore Italia Zain.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø63×56 mm",  code: "STR-202-86-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø87×72 mm",  code: "STR-202-86-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø115×87 mm", code: "STR-202-86-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø136×98 mm", code: "STR-202-86-30" },
        ]
      },

      // ── ZOHAR ──
      {
        id: "zohar",
        name: "ZOHAR",
        desc: "High-efficiency LED recessed downlight with sleek round design and durable aluminum heat sink for optimal thermal performance — ideal for residential, commercial, and hospitality applications.",
        img: "/images/indoor_new/Stellmore_Italia_Zohar.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Zohar", url: "/datasheets/indoor/Stellmore Italia Zohar.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "—", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø75×100 mm", code: "STR-203-49-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø75×100 mm", code: "STR-203-49-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø90×135 mm", code: "STR-203-49-18" },
        ]
      },

      // ── BRIANO (Grille) ──
      {
        id: "briano",
        name: "BRIANO",
        desc: "High-quality single-cell recessed grille fixture with die-cast aluminum body, efficient LED module, and anti-glare design with 24° narrow beam.",
        img: "/images/indoor_new/Stellmore_Italia_Briano.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24°", ip: "IP20",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-BRIANO-1212S-GN", url: "/datasheets/indoor/Stellmore Italia-BRIANO-1212S-GN.pdf", size: "PDF" }],
          efficiency: "100 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,200 lm", dims: "85×85×H62 mm", code: "SLM-1212S-GN" },
        ]
      },

      // ── BRIANO-D (Grille) ──
      {
        id: "briano-d",
        name: "BRIANO-D",
        desc: "High-quality dual-cell recessed grille fixture with die-cast aluminum body and anti-glare design with 24° narrow beam.",
        img: "/images/indoor_new/Stellmore_Italia_Briano_D.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24°", ip: "IP20",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-BRIANO-D-2412S-GN", url: "/datasheets/indoor/Stellmore Italia-BRIANO-D-2412S-GN.pdf", size: "PDF" }],
          efficiency: "100 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "2×12W", lumens: "2,400 lm", dims: "167×85×H62 mm", code: "SLM-2412S-GN" },
        ]
      },

      // ── BRIANO-T (Grille) ──
      {
        id: "briano-t",
        name: "BRIANO-T",
        desc: "High-quality triple-cell recessed grille fixture with die-cast aluminum body and anti-glare design with 24° narrow beam.",
        img: "/images/indoor_new/Stellmore_Italia_Briano_T.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24°", ip: "IP20",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-BRIANO-T-127S-GN", url: "/datasheets/indoor/Stellmore Italia-BRIANO-T-127S-GN.pdf", size: "PDF" }],
          efficiency: "100 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "3×7W", lumens: "2,100 lm", dims: "187×65×H52 mm", code: "SLM-127S-GN" },
        ]
      },

      // ── BRIO (Square Spot) ──
      {
        id: "brio",
        name: "BRIO",
        desc: "High-quality single recessed square spotlight fixture with die-cast aluminum body, adjustable beam, IP44 rating, and anti-glare design.",
        img: "/images/indoor_new/Stellmore_Italia_Brio.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 30°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-BRIO-SLM-C9074", url: "/datasheets/indoor/Stellmore Italia-BRIO-SLM-C9074.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK / Bright Silver",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "10W", lumens: "900 lm", dims: "100×H95 mm", code: "SLM-C9074" },
        ]
      },

      // ── BRIO-D (Square Spot) ──
      {
        id: "brio-d",
        name: "BRIO-D",
        desc: "High-quality dual recessed square spotlight fixture with adjustable beam, IP44 rating, and anti-glare design.",
        img: "/images/indoor_new/Stellmore_Italia_Brio_D.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 36°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-BRIO-D-SLM-C1022", url: "/datasheets/indoor/Stellmore Italia-BRIO-D-SLM-C1022.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK / Bright Silver",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "2×10W", lumens: "1,800 lm", dims: "200×110×H95 mm", code: "SLM-C1022" },
        ]
      },

      // ── BRIO-T (Square Spot) ──
      {
        id: "brio-t",
        name: "BRIO-T",
        desc: "High-quality triple recessed square spotlight fixture with adjustable beam, IP44 rating, and anti-glare design.",
        img: "/images/indoor_new/Stellmore_Italia_Brio_T.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 36°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-BRIO-T-SLM-C1023", url: "/datasheets/indoor/Stellmore Italia-BRIO-T-SLM-C1023.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK / Bright Silver",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "3×10W", lumens: "2,700 lm", dims: "285×110×H85 mm", code: "SLM-C10223" },
        ]
      },

      // ── CHIARA (COB Downlight) ──
      {
        id: "chiara",
        name: "CHIARA",
        desc: "High-quality recessed COB downlight fixture with die-cast aluminum body, 110 lm/W efficiency, CRI 95, and IP44 rating.",
        img: "/images/indoor_new/Stellmore_Italia_Chiara.jpg",
        datasheet: {
          cri: "95", cct: "2700K / 3000K / 4000K",
          beam: "24°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-CHIARA Family", url: "/datasheets/indoor/Stellmore Italia-CHIARA Family.pdf", size: "PDF" }],
          efficiency: "110 lm/W", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "10W", lumens: "1,100 lm", dims: "Ø86×H55 mm",   code: "SLM-1010JG" },
          { wattage: "20W", lumens: "2,200 lm", dims: "Ø101×H61 mm",  code: "SLM-1020JG" },
          { wattage: "30W", lumens: "3,300 lm", dims: "Ø140×H73 mm",  code: "SLM-1030JG" },
          { wattage: "40W", lumens: "4,400 lm", dims: "Ø180×H94 mm",  code: "SLM-1040JG" },
          { wattage: "50W", lumens: "5,500 lm", dims: "Ø212×H110 mm", code: "SLM-1050JG" },
        ]
      },

      // ── COMO (Adjustable Square) ──
      {
        id: "como",
        name: "COMO",
        desc: "High-quality single-head recessed adjustable square spotlight fixture with die-cast aluminum body, CREE LED, 95° wide beam, and IP44 rating.",
        img: "/images/indoor_new/Stellmore_Italia_Como.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "95°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-COMO", url: "/datasheets/indoor/Stellmore Italia-COMO.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "20W", lumens: "1,800 lm", dims: "105×105×H115 mm", code: "SLM-10051-LM" },
          { wattage: "30W", lumens: "2,700 lm", dims: "120×120×H130 mm", code: "SLM-12051-LM" },
          { wattage: "35W", lumens: "3,150 lm", dims: "120×120×H130 mm", code: "SLM-15051-LM" },
        ]
      },

      // ── COMO-D (Adjustable Square) ──
      {
        id: "como-d",
        name: "COMO-D",
        desc: "High-quality dual-head recessed adjustable square spotlight fixture with die-cast aluminum body, CREE LED, 95° wide beam, and IP44 rating.",
        img: "/images/indoor_new/Stellmore_Italia_Como_D.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "95°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-COMO-D", url: "/datasheets/indoor/Stellmore Italia-COMO-D.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "2×20W", lumens: "3,600 lm", dims: "220×105×H115 mm", code: "SLM-1005-LM" },
          { wattage: "2×30W", lumens: "5,400 lm", dims: "250×120×H130 mm", code: "SLM-1205-LM" },
        ]
      },

      // ── LAGO (IP54 Adjustable) ──
      {
        id: "lago",
        name: "LAGO",
        desc: "High-quality recessed adjustable fixture with die-cast aluminum body, efficient LED module, anti-glare design, and IP54 rating for versatile applications.",
        img: "/images/indoor_new/Stellmore_Italia_Lago.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24°", ip: "IP54",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-LAGO Family", url: "/datasheets/indoor/Stellmore Italia-LAGO Family.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "5W",  lumens: "450 lm",  dims: "Ø84×H52 mm",  code: "SLM-1212YT" },
          { wattage: "18W", lumens: "1,620 lm", dims: "Ø100×H60 mm", code: "SLM-1218YT" },
          { wattage: "24W", lumens: "2,160 lm", dims: "Ø126×H70 mm", code: "SLM-1224YT" },
        ]
      },

      // ── LUSTRO (Mini COB) ──
      {
        id: "lustro",
        name: "LUSTRO",
        desc: "High-quality compact recessed COB fixture with die-cast aluminum body, efficient LED module, anti-glare design, and IP44 rating for versatile applications.",
        img: "/images/indoor_new/Stellmore_Italia_Lustro.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 38°", ip: "IP44",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-LUSTRO-SLM-CL05", url: "/datasheets/indoor/Stellmore Italia-LUSTRO-SLM-CL05.pdf", size: "PDF" }],
          efficiency: "90 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK / GD / SBK",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "5W", lumens: "450 lm", dims: "45×H60 mm", code: "SLM-CL05" },
        ]
      },

      // ── RAGGIO (IP65 Waterproof) ──
      {
        id: "raggio",
        name: "RAGGIO",
        desc: "High-quality IP65 recessed downlight with die-cast aluminum body, efficient LED module, anti-glare design, and 95° wide beam for wet and outdoor-adjacent areas.",
        img: "/images/indoor_new/Stellmore_Italia_Raggio.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "95°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-RAGGIO", url: "/datasheets/indoor/Stellmore Italia-RAGGIO.pdf", size: "PDF" }],
          efficiency: "80 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "960 lm",   dims: "Ø82×H45 mm",  code: "SLM-1212-GZ" },
          { wattage: "18W", lumens: "1,440 lm", dims: "Ø105×H52 mm", code: "SLM-1218-GZ" },
          { wattage: "24W", lumens: "1,920 lm", dims: "Ø129×H70 mm", code: "SLM-1224-GZ" },
        ]
      },

    ]
  },

  // ─────────────────────────────────────────────
  // 2. SURFACE-MOUNTED LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "surface",
    label: "Surface-Mounted Lights",
    tagline: "Mounted directly on ceiling — no cut-out required. Best for concrete ceilings and retrofits.",
    img: "/images/indoor_new/Stellmore_Italia_Tono.jpg",
    products: [

      // ── LINEA A ──
      {
        id: "linea-a",
        name: "LINEA A",
        desc: "Compact ceiling-mounted spotlight with 360° adjustable head for total control over light direction, ideal for accentuating specific areas or objects with precision.",
        img: "/images/indoor_new/Stellmore_Italia_Linea_A.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "30° / 45°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Linea A", url: "/datasheets/indoor/Stellmore Italia Linea A.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø75×100 mm",  code: "STR-203-28W-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø75×100 mm",  code: "STR-203-28W-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø90×135 mm",  code: "STR-203-28W-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø100×150 mm", code: "STR-203-28W-30" },
        ]
      },

      // ── LINEA B ──
      {
        id: "linea-b",
        name: "LINEA B",
        desc: "Surface-mounted spotlight with distinctive arm structure and graduated adjustability allowing smooth 0°–360° horizontal rotation and precise vertical aiming with high-performance COB LED.",
        img: "/images/indoor_new/Stellmore_Italia_Linea_B.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Linea B", url: "/datasheets/indoor/Stellmore Italia Linea B.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (0°–360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "3W",  lumens: "255 lm",   dims: "Ø37×74 mm",   code: "STR-203-24-3" },
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø50×83 mm",   code: "STR-203-24-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×105 mm",  code: "STR-203-24-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø70×140 mm",  code: "STR-203-24-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø97×175 mm",  code: "STR-203-24-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø116×119 mm", code: "STR-203-24-30" },
        ]
      },

      // ── LINEA C ──
      {
        id: "linea-c",
        name: "LINEA C",
        desc: "Compact surface-mounted spotlight with smooth graduated adjustment mechanism offering full 0°–360° horizontal rotation and precise vertical tilting for accent, task, or ambient lighting.",
        img: "/images/indoor_new/Stellmore_Italia_Linea_C.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Linea C", url: "/datasheets/indoor/Stellmore Italia Linea C.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (0°–360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø50×83 mm",   code: "STR-203-24T-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×105 mm",  code: "STR-203-24T-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø70×140 mm",  code: "STR-203-24T-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø97×175 mm",  code: "STR-203-24T-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø116×119 mm", code: "STR-203-24T-30" },
        ]
      },

      // ── LINEA D ──
      {
        id: "linea-d",
        name: "LINEA D",
        desc: "Compact ceiling-mounted spotlight with 360° adjustable head for total control over light direction, ideal for accentuating specific areas or objects with precision.",
        img: "/images/indoor_new/Stellmore_Italia_Linea_D.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Linea D", url: "/datasheets/indoor/Stellmore Italia Linea D.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×100 mm", code: "STR-203-05W-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø85×118 mm", code: "STR-203-05W-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø90×140 mm", code: "STR-203-05W-30" },
        ]
      },

      // ── LUDANO ──
      {
        id: "ludano",
        name: "LUDANO",
        desc: "Elegant square surface-mounted spotlight with changeable inner reflector cup, deep-set reflector, and anti-glare cup for comfortable, non-dazzling ambient or accent lighting in upscale environments.",
        img: "/images/indoor_new/Stellmore_Italia_Ludano.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "24° / 30°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Ludano", url: "/datasheets/indoor/Stellmore Italia Ludano.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "Silver / Gold / Bronze",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "53.5×53.5×67 mm", code: "STR-101-83-7",  tag: "LUXURY" },
          { wattage: "12W", lumens: "1,020 lm", dims: "74×74×90 mm",     code: "STR-101-83-12", tag: "LUXURY" },
        ]
      },

      // ── LUZIO ──
      {
        id: "luzio",
        name: "LUZIO",
        desc: "Premium surface-mounted LED spotlight series with interchangeable internal reflector cups (gold, black, rose gold), deep-set COB light source, and anti-glare reflector.",
        img: "/images/indoor_new/Stellmore_Italia_Luzio.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Luzio", url: "/datasheets/indoor/Stellmore Italia Luzio.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø55×68 mm",   code: "STR-202-88-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø76×90 mm",   code: "STR-202-88-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø95×120 mm",  code: "STR-202-88-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø116×150 mm", code: "STR-202-88-30" },
        ]
      },

      // ── MILANO ──
      {
        id: "milano",
        name: "MILANO",
        desc: "High-performance LED Spotlight designed for both functional and accent lighting — highlighting artwork, enhancing architectural features, or providing ambient lighting.",
        img: "/images/indoor_new/Stellmore_Italia_Milano.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Milano", url: "/datasheets/indoor/Stellmore Italia Milano.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "9W",  lumens: "765 lm",   dims: "Ø103×55 mm", code: "STR-203-34-9" },
          { wattage: "15W", lumens: "1,275 lm", dims: "Ø148×65 mm", code: "STR-203-34-15" },
        ]
      },

      // ── MIRINO ──
      {
        id: "mirino",
        name: "MIRINO",
        desc: "Versatile adjustable spotlight with sleek design, high-performance LED technology, and fully adjustable head for focused directional lighting in both residential and commercial applications.",
        img: "/images/indoor_new/Stellmore_Italia_Mirino.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Mirino", url: "/datasheets/indoor/Stellmore Italia Mirino.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø90 mm",  code: "STR-202-49-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø105 mm", code: "STR-202-49-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø125 mm", code: "STR-202-49-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø160 mm", code: "STR-202-49-30" },
          { wattage: "50W", lumens: "4,250 lm", dims: "Ø190 mm", code: "STR-202-49-50" },
        ]
      },

      // ── TONO ──
      {
        id: "tono",
        name: "TONO",
        desc: "Adjustable LED Spotlight series combining flexibility, durability, and efficiency across a wide range of sizes and power options for both indoor and outdoor environments.",
        img: "/images/indoor_new/Stellmore_Italia_Tono.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "36° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "stellmore Italia Tono", url: "/datasheets/indoor/stellmore Italia Tono.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Aviation Aluminum",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "3W",  lumens: "255 lm",   dims: "Ø65×43 mm",   code: "STR-200-37-3" },
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø85×60 mm",   code: "STR-200-37-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø85×68 mm",   code: "STR-200-37-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø108×70 mm",  code: "STR-200-37-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø128×75 mm",  code: "STR-200-37-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø138×120 mm", code: "STR-200-37-30" },
          { wattage: "50W", lumens: "4,250 lm", dims: "Ø170×115 mm", code: "STR-200-37-50" },
          { wattage: "80W", lumens: "6,800 lm", dims: "Ø195×125 mm", code: "STR-200-37-80" },
        ]
      },

      // ── BLANCHA ──
      {
        id: "blancha",
        name: "BLANCHA",
        desc: "Surface-mounted spotlight, minimalist cylindrical design, integrated anti-glare.",
        img: "/images/indoor_new/Stellmore_Italia_Blancha.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 40° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Blancha", url: "/datasheets/indoor/Stellmore Italia Blancha.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø60×60 mm",  code: "STR-203-76-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø70×80 mm",  code: "STR-203-76-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø90×100 mm", code: "STR-203-76-18" },
        ]
      },

      // ── BLANCHA B ──
      {
        id: "blancha-b",
        name: "BLANCHA B",
        desc: "Rimless surface-mounted spotlight, deep cup anti-glare design, matte black.",
        img: "/images/indoor_new/Stellmore_Italia_Blancha_B.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "30° / 40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Blancha B", url: "/datasheets/indoor/Stellmore Italia Blancha B.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "9W",  lumens: "765 lm",   dims: "Ø110×90 mm", code: "STR-203-78-9" },
          { wattage: "15W", lumens: "1,275 lm", dims: "Ø150×90 mm", code: "STR-203-78-15" },
        ]
      },

      // ── CIRO ──
      {
        id: "ciro",
        name: "CIRO",
        desc: "Rimless cylindrical surface spotlight, deep cup anti-glare optic, 360° adjustable.",
        img: "/images/indoor_new/Stellmore_Italia_Ciro.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "Wide diffused", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Ciro", url: "/datasheets/indoor/Stellmore Italia Ciro.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø75×70 mm",   code: "STR-203-79-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø109×75 mm",  code: "STR-203-79-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø151×85 mm",  code: "STR-203-79-18" },
        ]
      },

      // ── ELLENA ──
      {
        id: "ellena",
        name: "ELLENA",
        desc: "360° adjustable surface-mounted spotlight, gold anodized aluminium body, private mould.",
        img: "/images/indoor_new/Stellmore_Italia_Ellena.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Ellena", url: "/datasheets/indoor/Stellmore Italia Ellena.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "GOLD",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø70×77 mm",  code: "STR-203-55-7",  tag: "LUXURY" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø85×85 mm",  code: "STR-203-55-12", tag: "LUXURY" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø100×97 mm", code: "STR-203-55-18", tag: "LUXURY" },
        ]
      },

      // ── ELLENA-S ──
      {
        id: "ellena-s",
        name: "ELLENA-S",
        desc: "360° adjustable surface-mounted spotlight, COB LED, faceted reflector.",
        img: "/images/indoor_new/Stellmore_Italia_ellena_s.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia ellena s", url: "/datasheets/indoor/Stellmore Italia ellena s.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø70×77 mm",  code: "STR-203-55S-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø85×85 mm",  code: "STR-203-55S-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø100×97 mm", code: "STR-203-55S-18" },
        ]
      },

      // ── FILO ──
      {
        id: "filo",
        name: "FILO",
        desc: "Surface-exposed spotlight, deep tube anti-glare, 360° adjustable head.",
        img: "/images/indoor_new/Stellmore_Italia_Filo.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40° / 50°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Filo", url: "/datasheets/indoor/Stellmore Italia Filo.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø33×110 mm", code: "STR-203-07T-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø40×135 mm", code: "STR-203-07T-12" },
        ]
      },

      // ── NELLO ──
      {
        id: "nello",
        name: "NELLO",
        desc: "Surface-mounted 360° adjustable spotlight with slim cylindrical body, high-efficiency COB LED, and black anti-glare inner reflector for precision lighting control.",
        img: "/images/indoor_new/Stellmore_Italia_Nello.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "40°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Nello", url: "/datasheets/indoor/Stellmore Italia Nello.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "7W",  lumens: "595 lm",   dims: "Ø44×65 mm",  code: "STR-203-54-7" },
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø44×95 mm",  code: "STR-202-54-12" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø88×190 mm", code: "STR-202-54-30" },
        ]
      },

    ]
  },

  // ─────────────────────────────────────────────
  // 3. TRACK LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "track",
    label: "Track Lights",
    tagline: "Precision direction on rail — retail, galleries, showrooms.",
    img: "/images/indoor_new/Stellmore_Italia_Linea_Pro.jpg",
    products: [

      // ── LINEA PRO ──
      {
        id: "linea-pro",
        name: "LINEA PRO",
        desc: "Modern track light with graduated angle dial and smooth 360° rotation for precise directional lighting — perfect for highlighting products, artwork, or architectural features.",
        img: "/images/indoor_new/Stellmore_Italia_Linea_Pro.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "30° / 45°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore italia Linea pro", url: "/datasheets/indoor/Stellmore italia Linea pro.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø75×100 mm",  code: "STR-203-28-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø75×100 mm",  code: "STR-203-28-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø90×135 mm",  code: "STR-203-28-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø100×150 mm", code: "STR-203-28-30", tag: "BESTSELLER" },
        ]
      },

      // ── LINEA ──
      {
        id: "linea",
        name: "LINEA",
        desc: "Graduale track light with graduated rotational system adjustable from 0° to 360°, combining functionality with minimalist elegance for galleries and retail environments.",
        img: "/images/indoor_new/Stellmore_Italia_Linea.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Linea", url: "/datasheets/indoor/Stellmore Italia Linea.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (0°–360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø60×100 mm", code: "STR-203-05-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø80×130 mm", code: "STR-203-05-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø90×150 mm", code: "STR-203-05-30" },
        ]
      },

      // ── SOTTILE ──
      {
        id: "sottile",
        name: "SOTTILE",
        desc: "Track spotlight with slim cylindrical body, smooth graduated adjustment and full 0°–360° horizontal rotation for precise directional lighting in retail and hospitality environments.",
        img: "/images/indoor_new/Stellmore_Italia_Sottile.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Sottile", url: "/datasheets/indoor/Stellmore Italia Sottile.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (0°–360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø50×130 mm", code: "STR-202-68-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø65×160 mm", code: "STR-202-68-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø80×185 mm", code: "STR-202-68-30" },
        ]
      },

      // ── TRACCIA ──
      {
        id: "traccia",
        name: "TRACCIA",
        desc: "Track spotlight with minimalist cylindrical body and full 360° horizontal rotation for effortless directional adjustment — ideal for galleries, retail and commercial interiors.",
        img: "/images/indoor_new/Stellmore_Italia_Traccia.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "38° / 60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia traccia", url: "/datasheets/indoor/Stellmore Italia traccia.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø50×130 mm", code: "STR-202-68W-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø65×150 mm", code: "STR-202-68W-18" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø76×185 mm", code: "STR-202-68W-30" },
        ]
      },

      // ── SCENA ──
      {
        id: "scena",
        name: "SCENA",
        desc: "High-performance track spotlight with graduated angle markings and smooth 360° rotation for quick, precise adjustments — perfect for retail, gallery, and commercial environments.",
        img: "/images/indoor_new/Stellmore_Italia_Scena.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Scena", url: "/datasheets/indoor/Stellmore Italia Scena.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø54.5×135 mm", code: "STR-204-27-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø63.5×155 mm", code: "STR-204-27-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø76.5×180 mm", code: "STR-204-27-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø76.5×180 mm", code: "STR-204-27-30", tag: "BESTSELLER" },
          { wattage: "50W", lumens: "4,250 lm", dims: "Ø111×180 mm",  code: "STR-204-27-50" },
        ]
      },

      // ── SCENA-W ──
      {
        id: "scena-w",
        name: "SCENA-W",
        desc: "High-performance track spotlight with graduated angle markings and smooth 360° rotation — white body variant of the SCENA series for seamless ceiling integration in light-coloured interiors.",
        img: "/images/indoor_new/Stellmore_Italia_Scena_W.jpg",
        datasheet: {
          cri: "90", cct: "2700K / 3000K / 4000K",
          beam: "60°", ip: "IP40",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia Scena w", url: "/datasheets/indoor/Stellmore Italia Scena w.pdf", size: "PDF" }],
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes (0°–360°)", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workspaces, Institutions, Small Format Retail, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,020 lm", dims: "Ø54.5×135 mm", code: "STR-204-27W-12" },
          { wattage: "18W", lumens: "1,530 lm", dims: "Ø63.5×155 mm", code: "STR-204-27W-18" },
          { wattage: "24W", lumens: "2,040 lm", dims: "Ø76.5×180 mm", code: "STR-204-27W-24" },
          { wattage: "30W", lumens: "2,550 lm", dims: "Ø76.5×180 mm", code: "STR-204-27W-30" },
          { wattage: "50W", lumens: "4,250 lm", dims: "Ø111×180 mm",  code: "STR-204-27W-50" },
        ]
      },

    ]
  },

  // ─────────────────────────────────────────────
  // 4. PENDANT LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "pendant",
    label: "Pendant Lights",
    tagline: "Suspended elegance — reception areas, dining, feature lighting.",
    img: "/images/indoor_new/Stellmore_Italia_Splendore_H.jpg",
    products: [

      // ── SPLENDORE-H ──
      {
        id: "splendore-h",
        name: "SPLENDORE-H",
        desc: "High-quality pendant/surface-mounted cylindrical fixture with die-cast aluminum body, 110 lm/W efficiency, CRI 95, and 15°/24°/36° beam options.",
        img: "/images/indoor_new/Stellmore_Italia_Splendore_H.jpg",
        datasheet: {
          cri: "95", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 36°", ip: "IP20",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-SPLENDORE-H", url: "/datasheets/indoor/Stellmore Italia-SPLENDORE-H.pdf", size: "PDF" }],
          efficiency: "110 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · PMMA Opal Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workplaces, Institutions, Retail Outlets, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,320 lm", dims: "Ø52×H150 mm", code: "SLM-104712-CL" },
        ]
      },

      // ── SPLENDORE-R ──
      {
        id: "splendore-r",
        name: "SPLENDORE-R",
        desc: "High-quality rotatable pendant/surface-mounted cylindrical fixture with die-cast aluminum body, 110 lm/W efficiency, CRI 95, and 15°/24°/36° beam options.",
        img: "/images/indoor_new/Stellmore_Italia_Splendore_R.jpg",
        datasheet: {
          cri: "95", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 36°", ip: "IP20",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-SPLENDORE-R", url: "/datasheets/indoor/Stellmore Italia-SPLENDORE-R.pdf", size: "PDF" }],
          efficiency: "110 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · PMMA Opal Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workplaces, Institutions, Retail Outlets, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,320 lm", dims: "Ø52×H150 mm", code: "SLM-104812-CL" },
        ]
      },

      // ── SPLENDORE-S ──
      {
        id: "splendore-s",
        name: "SPLENDORE-S",
        desc: "High-quality slim pendant/surface-mounted cylindrical fixture with die-cast aluminum body, 110 lm/W efficiency, CRI 95, and 15°/24°/36° beam options.",
        img: "/images/indoor_new/Stellmore_Italia_Splendore_S.jpg",
        datasheet: {
          cri: "95", cct: "2700K / 3000K / 4000K",
          beam: "15° / 24° / 36°", ip: "IP20",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS"],
          downloads: [{ name: "Stellmore Italia-SPLENDORE-S", url: "/datasheets/indoor/Stellmore Italia-SPLENDORE-S.pdf", size: "PDF" }],
          efficiency: "110 lm/W", power_factor: "0.5", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK",
          material: "Die Cast Aluminium · PMMA Opal Lens",
          dimming: "Triac · 0/1–10V · DALI",
          application: "Modern Workplaces, Institutions, Retail Outlets, Hotels, High End Villas"
        },
        variants: [
          { wattage: "12W", lumens: "1,320 lm", dims: "Ø52×H150 mm", code: "SLM-104612-CL" },
        ]
      },

    ]
  },

  // ─────────────────────────────────────────────
  // 5. MAGNETIC TRACK LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "magnetic-track",
    label: "Magnetic Track Lights",
    tagline: "48V magnetic rail system — snap-on fixtures for retail, hospitality and architectural interiors.",
    img: "/images/indoor_new/Stellmore_Italia_Magnetic_Spot_Light.jpg",
    products: [

      // ── MAGNETIC SPOT LIGHT ──
      {
        id: "magnetic-spot-light",
        name: "MAGNETIC SPOT LIGHT",
        desc: "Magnetic track spotlight.",
        img: "/images/indoor_new/Stellmore_Italia_Magnetic_Spot_Light.jpg",
        datasheet: {
          cct: "3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "130 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "7W",  dims: "Ø50×H90 mm",  code: "STR-MAG-SP-7" },
          { wattage: "12W", dims: "Ø50×H110 mm", code: "STR-MAG-SP-12" },
          { wattage: "24W", dims: "Ø60×H150 mm", code: "STR-MAG-SP-24" },
          { wattage: "30W", dims: "Ø60×H150 mm", code: "STR-MAG-SP-30" },
        ]
      },

      // ── MAGNETIC FOCUS LIGHT ──
      {
        id: "magnetic-focus-light",
        name: "MAGNETIC FOCUS LIGHT",
        desc: "Magnetic track focus spotlight.",
        img: "/images/indoor_new/Stellmore_Italia_Magnetic_Focus_Light.png",
        datasheet: {
          cct: "3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "130 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "12W", dims: "Ø55×H115 mm", code: "STR-MAG-FC-12" },
          { wattage: "20W", dims: "Ø65×H115 mm", code: "STR-MAG-FC-20" },
          { wattage: "30W", dims: "Ø75×H150 mm", code: "STR-MAG-FC-30" },
        ]
      },

      // ── MAGNETIC FOLDING FLOOD LIGHT ──
      {
        id: "magnetic-folding-flood-light",
        name: "MAGNETIC FOLDING FLOOD LIGHT",
        desc: "Magnetic track folding flood light.",
        img: "/images/indoor_new/Stellmore_Italia_Magnetic_Folding_Flood_Light.jpg",
        datasheet: {
          cct: "3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "130 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "6W",  dims: "112 mm", code: "STR-MAG-FF-6" },
          { wattage: "12W", dims: "220 mm", code: "STR-MAG-FF-12" },
          { wattage: "18W", dims: "330 mm", code: "STR-MAG-FF-18" },
        ]
      },

      // ── MAGNETIC FLOOD LIGHT (Bar) ──
      {
        id: "magnetic-flood-light-bar",
        name: "MAGNETIC FLOOD LIGHT",
        desc: "Magnetic track flood light.",
        img: "/images/indoor_new/Stellmore_Italia_Magnetic_Flood_Light_Bar.jpg",
        datasheet: {
          cct: "3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "130 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "12W", dims: "300 mm",  code: "STR-MAG-FL-12" },
          { wattage: "24W", dims: "600 mm",  code: "STR-MAG-FL-24" },
          { wattage: "36W", dims: "900 mm",  code: "STR-MAG-FL-36" },
          { wattage: "42W", dims: "1200 mm", code: "STR-MAG-FL-42" },
        ]
      },

      // ── MAGNETIC FLOOD LIGHT (Multi-head) ──
      {
        id: "magnetic-flood-light-multi",
        name: "MAGNETIC FLOOD LIGHT (MULTI)",
        desc: "Magnetic track multi-head flood light.",
        img: "/images/indoor_new/Stellmore_Italia_Magnetic_Flood_Light_Multi.jpg",
        datasheet: {
          cct: "3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "130 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "6W",  dims: "112 mm", code: "STR-MAG-FM-6" },
          { wattage: "12W", dims: "220 mm", code: "STR-MAG-FM-12" },
          { wattage: "18W", dims: "330 mm", code: "STR-MAG-FM-18" },
          { wattage: "24W", dims: "440 mm", code: "STR-MAG-FM-24" },
          { wattage: "30W", dims: "550 mm", code: "STR-MAG-FM-30" },
          { wattage: "36W", dims: "660 mm", code: "STR-MAG-FM-36" },
          { wattage: "42W", dims: "770 mm", code: "STR-MAG-FM-42" },
          { wattage: "48W", dims: "880 mm", code: "STR-MAG-FM-48" },
        ]
      },

    ]
  },

  // ─────────────────────────────────────────────
  // 7. STRIP LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "strip",
    label: "Strip Lights",
    tagline: "Flexible COB and SMD LED strips for cove lighting, cabinet underlighting and architectural accents.",
    img: "/images/indoor_new/Stellmore_Italia_Strip_COB_5mm.jpg",
    products: [

      // ── COB 5mm ──
      {
        id: "strip-cob-5mm",
        name: "COB",
        desc: "COB LED strip, IP20.",
        img: "/images/indoor_new/Stellmore_Italia_Strip_COB_5mm.jpg",
        datasheet: {
          cct: "2700K / 3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "90 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "10W", dims: "5000×5×2 mm", code: "STR-COB-05-10" },
          { wattage: "12W", dims: "5000×5×2 mm", code: "STR-COB-05-12" },
        ]
      },

      // ── COB 8mm ──
      {
        id: "strip-cob-8mm",
        name: "COB",
        desc: "COB LED strip, IP20.",
        img: "/images/indoor_new/Stellmore_Italia_Strip_COB_8mm.jpg",
        datasheet: {
          cct: "2700K / 3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "90 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "10W", dims: "5000×8×2 mm", code: "STR-COB-08-10" },
          { wattage: "12W", dims: "5000×8×2 mm", code: "STR-COB-08-12" },
        ]
      },

      // ── SMD IP67 ──
      {
        id: "strip-smd-ip67",
        name: "SMD",
        desc: "SMD LED strip, IP67.",
        img: "/images/indoor_new/Stellmore_Italia_Strip_SMD_IP67.jpg",
        datasheet: {
          cct: "2700K / 3000K / 4000K / 6000K",
          ip: "IP67",
          efficiency: "90 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "10W", dims: "5000×8×2 mm", code: "STR-SMD-08-IP67-10" },
          { wattage: "12W", dims: "5000×8×2 mm", code: "STR-SMD-08-IP67-12" },
        ]
      },

      // ── SMD 12mm ──
      {
        id: "strip-smd-12mm",
        name: "SMD",
        desc: "SMD LED strip, IP20 / IP65 / IP67.",
        img: "/images/indoor_new/Stellmore_Italia_Strip_SMD_12mm.jpg",
        datasheet: {
          cct: "2700K / 3000K / 4000K / 6000K",
          ip: "IP20 / IP65 / IP67",
          efficiency: "90 lm/W",
          downloads: []
        },
        variants: [
          { wattage: "10W", dims: "5000×12×2 mm", code: "STR-SMD-12-10" },
          { wattage: "12W", dims: "5000×12×2 mm", code: "STR-SMD-12-12" },
        ]
      },

    ]
  },

  // ─────────────────────────────────────────────
  // 6. LINEAR LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "linear",
    label: "Linear Lights",
    tagline: "Clean continuous lines — aluminium extrusion profiles for suspended, recessed and floor installations.",
    img: "/images/indoor_new/Stellmore_Italia_Linear_Profiles.jpg",
    products: [

      // ── LINEAR PROFILES ──
      {
        id: "linear-profiles",
        name: "LINEAR PROFILES",
        type: "system",
        img: "/images/indoor_new/Stellmore_Italia_Linear_Profiles.jpg",
        desc: "Aluminium extrusion profiles available in suspended, recessed and floor mount types. Compatible with Tridonic, TCI and Philips LED modules.",
        datasheet: {
          cct: "2700K / 3000K / 4000K / 6000K",
          ip: "IP20",
          efficiency: "85–100 lm/W",
          downloads: []
        },
        variants: [
          { type: "Suspended", dims: "75 × 75 mm", code: "STR-LIN-S75" },
          { type: "Suspended", dims: "35 × 35 mm", code: "STR-LIN-S35" },
          { type: "Recessed",  dims: "75 × 35 mm", code: "STR-LIN-R75" },
          { type: "Recessed",  dims: "50 × 35 mm", code: "STR-LIN-R50" },
          { type: "Floor",     dims: "30 × 20 mm", code: "STR-LIN-F30" },
          { type: "Floor",     dims: "26 × 21 mm", code: "STR-LIN-F26" },
        ]
      },

    ]
  },

];