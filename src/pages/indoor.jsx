import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { INDOOR_CATEGORIES } from "../assets/Indoor";
import "./IndoorLighting.css";

/* ─── Icons ───────────────────────────────────────────────── */
const IconClose    = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
const IconDownload = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5.5 6 8.5 9 5.5M1 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IconPDF      = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="1.3"/><path d="M5 1v3h5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M4 7h6M4 9.5h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>;

/* ─── Image with fallback ─────────────────────────────────── */
function ProductImage({ src, alt, className, style }) {
  const [failed, setFailed] = useState(false);
  const fallback = "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&q=85";
  return (
    <img
      src={failed || !src ? fallback : src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}

/* ─── Spec row ────────────────────────────────────────────── */
function SpecRow({ label, value }) {
  if (!value || value === "—") return null;
  return (
    <div className="il-spec-row">
      <span className="il-spec-label">{label}</span>
      <span className="il-spec-val">{value}</span>
    </div>
  );
}

/* ─── Linear Profile Panel ────────────────────────────────── */
function LinearProfilePanel({ product }) {
  const ds = product.datasheet || {};
  const types = product.profile_types || [];
  const [activeType,    setActiveType]    = useState(types[0]?.type || "");
  const [activeProfile, setActiveProfile] = useState(types[0]?.profiles[0] || null);

  const currentType = types.find(t => t.type === activeType);

  const handleTypeChange = (t) => {
    setActiveType(t.type);
    setActiveProfile(t.profiles[0] || null);
  };

  return (
    <div className="il-tab-panel">

      {/* Description */}
      <div className="il-overview-desc-block">
        <p className="il-detail-desc">{product.desc}</p>
      </div>

      {/* Mounting type tabs */}
      <p className="il-ds-label">Mounting type</p>
      <div className="il-linear-type-row">
        {types.map(t => (
          <button
            key={t.type}
            type="button"
            className={`il-linear-type-btn${activeType === t.type ? " active" : ""}`}
            onClick={() => handleTypeChange(t)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Profile size cards */}
      {currentType && (
        <>
          <p className="il-ds-label" style={{ marginTop: 16 }}>Profile size</p>
          <div className="il-linear-profiles-grid">
            {currentType.profiles.map(p => (
              <div
                key={p.code}
                className={`il-linear-profile-card${activeProfile?.code === p.code ? " active" : ""}`}
                onClick={() => setActiveProfile(p)}
              >
                <div className="il-linear-profile-img">
                  <img src={p.img} alt={p.size} onError={e => { e.target.style.display = "none"; }} />
                </div>
                <div className="il-linear-profile-size">{p.size}</div>
                <div className="il-linear-profile-desc">{p.desc}</div>
                <div className="il-linear-profile-code">{p.code}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Shared specs */}
      <p className="il-ds-label" style={{ marginTop: 20 }}>System specifications</p>
      <div className="il-spec-grid">
        <SpecRow label="CRI"            value={ds.cri} />
        <SpecRow label="CCT"            value={ds.cct} />
        <SpecRow label="IP Rating"      value={ds.ip} />
        <SpecRow label="Voltage"        value={ds.voltage} />
        <SpecRow label="Efficiency"     value={ds.efficiency} />
        <SpecRow label="LED Module"     value={ds.led_chip} />
        <SpecRow label="Dimming"        value={ds.dimming} />
        <SpecRow label="Material"       value={ds.material} />
        <SpecRow label="Finish"         value={ds.finish} />
        <SpecRow label="Lifespan"       value={ds.lifespan} />
        <SpecRow label="Operating Temp" value={ds.operating_temp} />
        <SpecRow label="Warranty"       value={ds.warranty} />
      </div>

      {ds.application && (
        <>
          <p className="il-ds-label" style={{ marginTop: 14 }}>Applications</p>
          <div className="il-application-block">
            {ds.application.split(",").map((a, i) => (
              <span key={i} className="il-app-tag">{a.trim()}</span>
            ))}
          </div>
        </>
      )}

      {/* Module brands note */}
      <div className="il-linear-modules-note">
        <span className="il-ds-label" style={{ marginBottom: 6, display: "block" }}>LED Modules</span>
        <p style={{ margin: 0, fontSize: 12, color: "var(--il-text-muted, #888)", lineHeight: 1.6 }}>
          Compatible with <strong>Tridonic</strong>, <strong>TCI</strong> and <strong>Philips</strong> LED modules.
          Available in 10W/m and 12W/m. COB and SMD strip options in 2700K, 3000K, 4000K and 6000K.
        </p>
      </div>

    </div>
  );
}

/* ─── Overview Panel ─────────────────────────────────────── */
function OverviewPanel({ product }) {
  const ds = product.datasheet || {};
  const hasVariants = product.variants && product.variants.length > 0;

  return (
    <div className="il-tab-panel">
      <div className="il-overview-desc-block">
        <p className="il-detail-desc">{product.desc}</p>
      </div>

      <p className="il-ds-label">Specifications</p>
      <div className="il-spec-grid">
        <SpecRow label="CRI"            value={ds.cri} />
        <SpecRow label="CCT"            value={ds.cct} />
        <SpecRow label="Beam Angle"     value={ds.beam} />
        <SpecRow label="IP Rating"      value={ds.ip} />
        <SpecRow label="Voltage"        value={ds.voltage} />
        <SpecRow label="Efficiency"     value={ds.efficiency} />
        <SpecRow label="Power Factor"   value={ds.power_factor} />
        <SpecRow label="LED Chip"       value={ds.led_chip} />
        <SpecRow label="Dimming"        value={ds.dimming} />
        <SpecRow label="Material"       value={ds.material} />
        <SpecRow label="Finish"         value={ds.finish} />
        <SpecRow label="Adjustable"     value={ds.adjustable} />
        <SpecRow label="Lifespan"       value={ds.lifespan} />
        <SpecRow label="Operating Temp" value={ds.operating_temp} />
        <SpecRow label="Warranty"       value={ds.warranty} />
      </div>

      {ds.application && (
        <>
          <p className="il-ds-label" style={{ marginTop: 14 }}>Applications</p>
          <div className="il-application-block">
            {ds.application.split(",").map((a, i) => (
              <span key={i} className="il-app-tag">{a.trim()}</span>
            ))}
          </div>
        </>
      )}

      {ds.certifications?.length > 0 && (
        <>
          <p className="il-ds-label" style={{ marginTop: 14 }}>Certifications</p>
          <div className="il-cert-list" style={{ marginBottom: 18 }}>
            {ds.certifications.map(c => (
              <span key={c} className="il-cert">{c}</span>
            ))}
          </div>
        </>
      )}

      {hasVariants && (
        <>
          <p className="il-ds-label" style={{ marginTop: 4 }}>
            Variants <span style={{ color: "#555", fontWeight: 400 }}>— {product.variants.length} options</span>
          </p>
          <div className="il-variants-table">
            <div className="il-variants-head">
              <span>Wattage</span><span>Lumens</span><span>Dimensions</span><span>Code</span>
            </div>
            {product.variants.map((v, i) => (
              <div key={i} className={`il-variants-row${v.tag ? " il-variants-row--tagged" : ""}`}>
                <span className="il-vr-watt">{v.wattage}</span>
                <span className="il-vr-lm">{v.lumens}</span>
                <span className="il-vr-dim">{v.dims}</span>
                <span className="il-vr-code">
                  {v.code}
                  {v.tag && <em className="il-vr-tag">{v.tag}</em>}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {ds.downloads?.length > 0 && (
        <>
          <p className="il-ds-label" style={{ marginTop: 18 }}>Datasheet</p>
          <div className="il-dl-list">
            {ds.downloads.map((dl, i) => (
              <a key={i} href={dl.url} download className="il-dl-row" target="_blank" rel="noreferrer">
                <div className="il-dl-left">
                  <div className="il-dl-icon"><IconPDF /></div>
                  <div>
                    <div className="il-dl-name">{dl.name}</div>
                    <div className="il-dl-size">{dl.size || "PDF"}</div>
                  </div>
                </div>
                <span className="il-dl-btn"><IconDownload /> Download</span>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Detail Pane ─────────────────────────────────────────── */
function DetailPane({ product, catLabel }) {
  if (!product) {
    return (
      <div className="il-detail il-detail--empty">
        <div className="il-empty">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.25">
            <circle cx="16" cy="16" r="14" stroke="#c8a96e" strokeWidth="1.5"/>
            <path d="M10 16h12M16 10v12" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>SELECT A PRODUCT</span>
        </div>
      </div>
    );
  }

  const heroTag = product.variants?.find(v => v.tag)?.tag;
  const isSystem = product.type === "system";

  return (
    <div className="il-detail" key={product.id}>
      <div className="il-detail-hero">
        <ProductImage src={product.img} alt={product.name} />
        <div className="il-detail-hero-fade" />
        {heroTag && <span className="il-detail-tag">{heroTag}</span>}
        {isSystem && <span className="il-detail-tag il-detail-tag--system">Profile System</span>}
        <div className="il-detail-hero-title">
          <span className="il-detail-cat">{catLabel}</span>
          <h2 className="il-detail-name">{product.name}</h2>
        </div>
      </div>
      <div className="il-detail-body">
        {isSystem
          ? <LinearProfilePanel product={product} />
          : <OverviewPanel product={product} />
        }
      </div>
    </div>
  );
}

/* ─── Category Sidebar ────────────────────────────────────── */
function CategorySidebar({ categories, activeCatId, productSelected, onSelect, onClose }) {
  const collapsed = productSelected;

  return (
    <div className={`il-cat-sidebar${collapsed ? " il-cat-sidebar--collapsed" : ""}`}>
      <div className="il-cat-sidebar-header">
        <div className="il-cat-sidebar-super">Stellmore Italia</div>
        <div className="il-cat-sidebar-title">Indoor</div>
      </div>

      <div className="il-cat-sidebar-body">
        {categories.map(cat => {
          const isActive = cat.id === activeCatId;
          return (
            <div
              key={cat.id}
              className={`il-cat-row${isActive ? " active" : ""}`}
              onClick={() => onSelect(cat)}
              title={collapsed ? cat.label : undefined}
            >
              <div className="il-cat-row-thumb">
                <ProductImage src={cat.products[0]?.img || null} alt={cat.label} />
              </div>
              <div className="il-cat-row-info">
                <div className="il-cat-row-name">{cat.label}</div>
                <div className="il-cat-row-count">{cat.products.length} products</div>
              </div>
              <div className="il-cat-row-dot" />
            </div>
          );
        })}
      </div>

      <div className="il-cat-sidebar-footer">
        {/* FIX: use type="button" and stop propagation to guarantee close fires */}
        <button
          type="button"
          className="il-overlay-close"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          title="Close"
        >
          <IconClose />
          <span className="il-overlay-close-label">Close</span>
        </button>
      </div>
    </div>
  );
}

/* ─── Product List ────────────────────────────────────────── */
function ProductList({ category, selectedId, productSelected, onSelect }) {
  if (!category) return null;
  const compact = productSelected;

  return (
    <div className={`il-list${compact ? " il-list--compact" : ""}`}>
      <div className="il-list-header">
        <div className="il-list-super">Category</div>
        <div className="il-list-title">{category.label}</div>
        {!compact && category.tagline && (
          <div className="il-list-tagline">{category.tagline}</div>
        )}
        <div className="il-list-count">{category.products.length} products</div>
      </div>

      <div className="il-list-body">
        {category.products.length === 0 ? (
          <div className="il-list-empty"><span>Coming soon</span></div>
        ) : (
          category.products.map(p => {
            const firstTag = p.variants?.find(v => v.tag)?.tag;
            return (
              <div
                key={p.id}
                className={`il-item${selectedId === p.id ? " active" : ""}`}
                onClick={() => onSelect(p)}
              >
                <div className="il-item-img">
                  <ProductImage src={p.img} alt={p.name} />
                </div>
                <div className="il-item-info">
                  <div className="il-item-name">{p.name}</div>
                  {!compact && (
                    <div className="il-item-desc">{p.desc}</div>
                  )}
                  {!compact && p.type === "system" && (
                    <span className="il-item-badge">
                      {p.profile_types?.reduce((sum, t) => sum + t.profiles.length, 0)} profiles
                    </span>
                  )}
                  {!compact && p.type !== "system" && p.variants?.length > 0 && (
                    <span className="il-item-badge">
                      {p.variants.length} variant{p.variants.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
                {firstTag && <span className="il-item-tag">{firstTag}</span>}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

/* ─── Animated list wrapper ───────────────────────────────── */
function AnimatedProductList({ category, selectedId, productSelected, onSelect }) {
  const [displayed, setDisplayed] = useState(category);
  const [animKey, setAnimKey]     = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setDisplayed(category);
      setAnimKey(k => k + 1);
    }, 80);
    return () => clearTimeout(t);
  }, [category?.id]);

  return (
    <div className="il-list-anim-wrap" key={animKey}>
      <ProductList
        category={displayed}
        selectedId={selectedId}
        productSelected={productSelected}
        onSelect={onSelect}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════════ */
export default function IndoorLighting({ onClose }) {
  const cats = INDOOR_CATEGORIES;
  const navigate = useNavigate();
  const [activeCat,       setActiveCat]       = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close: navigate back to previous page, also call onClose if provided
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  // ESC key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleCatSelect = (cat) => {
    if (activeCat?.id === cat.id && !selectedProduct) {
      setActiveCat(null);
    } else {
      setActiveCat(cat);
      setSelectedProduct(null);
    }
  };

  const handleProductSelect = (p) => {
    setSelectedProduct(prev => prev?.id === p.id ? null : p);
  };

  const productOpen = !!selectedProduct;
  const catOpen     = !!activeCat;

  return (
    /* FIX: backdrop click closes; stopPropagation on inner panel prevents bubbling */
    <div
      className="il-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className={`il-panel${productOpen ? " il-panel--product-open" : catOpen ? " il-panel--cat-open" : ""}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Col 1 — category sidebar */}
        <CategorySidebar
          categories={cats}
          activeCatId={activeCat?.id}
          productSelected={productOpen}
          onSelect={handleCatSelect}
          onClose={handleClose}
        />

        {/* Col 2 — product list */}
        {catOpen && (
          <AnimatedProductList
            category={activeCat}
            selectedId={selectedProduct?.id}
            productSelected={productOpen}
            onSelect={handleProductSelect}
          />
        )}

        {/* Col 3 — detail pane */}
        {productOpen && (
          <DetailPane
            product={selectedProduct}
            catLabel={activeCat?.label}
          />
        )}

        {/* Placeholder when nothing selected */}
        {!catOpen && (
          <div className="il-splash">
            <div className="il-splash-inner">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.18">
                <circle cx="20" cy="20" r="18" stroke="#c8a96e" strokeWidth="1.5"/>
                <path d="M20 10v20M10 20h20" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p>Select a category to browse products</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}