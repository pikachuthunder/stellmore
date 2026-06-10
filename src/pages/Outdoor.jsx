import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { OUTDOOR_CATEGORIES } from "../assets/outdoor.js";
import Header from "./Headers";
import LogoImg from "../assets/image.png";
import "./OutdoorLighting.css";

/* ─── Icons ───────────────────────────────────────────────── */
const IconClose = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconDownload = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 1v7M3 5.5 6 8.5 9 5.5M1 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPDF = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="2" y="1" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5 1v3h5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M4 7h6M4 9.5h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

/* ─── Image with fallback ─────────────────────────────────── */
function ProductImage({ src, alt, className, style }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={className} style={{ ...style, width: "100%", height: "100%", background: "#141414", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" opacity="0.3">
          <rect x="2" y="2" width="16" height="16" rx="2" stroke="#c8a96e" strokeWidth="1.2"/>
          <circle cx="7" cy="7.5" r="1.5" fill="#c8a96e"/>
          <path d="M2 13l5-4 4 3.5 3-2.5 4 4" stroke="#c8a96e" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className={className} style={style} onError={() => setFailed(true)} />
  );
}

/* ─── Spec row ────────────────────────────────────────────── */
function SpecRow({ label, value }) {
  if (!value || value === "—") return null;
  return (
    <div className="ol-spec-row">
      <span className="ol-spec-label">{label}</span>
      <span className="ol-spec-val">{value}</span>
    </div>
  );
}

function LinearProfilePanel({ product }) {
  const ds = product.datasheet || {};
  const variants = product.variants || [];

  return (
    <div className="ol-tab-panel">
      {product.desc && (
        <div className="ol-overview-desc-block">
          <p className="ol-detail-desc">{product.desc}</p>
        </div>
      )}

      <p className="ol-ds-label">Profiles</p>
      <div className="ol-variants-table">
        <div className="ol-variants-head ol-variants-head--linear">
          <span>Type</span>
          <span>Dimensions</span>
          <span>Code</span>
        </div>
        {variants.map((v, i) => (
          <div key={i} className={`ol-variants-row ol-variants-row--linear ${v.tag ? "ol-variants-row--tagged" : ""}`}>
            <span className="ol-vr-watt">{v.type}</span>
            <span className="ol-vr-dim">{v.dims}</span>
            <span className="ol-vr-code">
              {v.code}
              {v.tag && <em className="ol-vr-tag">{v.tag}</em>}
            </span>
          </div>
        ))}
      </div>

      <p className="ol-ds-label" style={{ marginTop: 20 }}>Specifications</p>
      <div className="ol-spec-grid">
        <SpecRow label="CCT" value={ds.cct} />
        <SpecRow label="IP Rating" value={ds.ip} />
        <SpecRow label="Efficiency" value={ds.efficiency} />
      </div>
    </div>
  );
}

function OverviewPanel({ product }) {
  const ds = product.datasheet || {};
  const hasVariants = product.variants && product.variants.length > 0;

  return (
    <div className="ol-tab-panel">
      {product.desc && (
        <div className="ol-overview-desc-block">
          <p className="ol-detail-desc">{product.desc}</p>
        </div>
      )}

      <p className="ol-ds-label">Specifications</p>
      <div className="ol-spec-grid">
        <SpecRow label="CRI" value={ds.cri} />
        <SpecRow label="CCT" value={ds.cct} />
        <SpecRow label="Beam Angle" value={ds.beam} />
        <SpecRow label="IP Rating" value={ds.ip} />
        <SpecRow label="Voltage" value={ds.voltage} />
        <SpecRow label="Efficiency" value={ds.efficiency} />
        <SpecRow label="Power Factor" value={ds.powerfactor} />
        <SpecRow label="LED Chip" value={ds.ledchip} />
        <SpecRow label="Dimming" value={ds.dimming} />
        <SpecRow label="Material" value={ds.material} />
        <SpecRow label="Finish" value={ds.finish} />
        <SpecRow label="Adjustable" value={ds.adjustable} />
        <SpecRow label="Lifespan" value={ds.lifespan} />
        <SpecRow label="Operating Temp" value={ds.operatingtemp} />
        <SpecRow label="Warranty" value={ds.warranty} />
      </div>

      {ds.application && (
        <>
          <p className="ol-ds-label" style={{ marginTop: 14 }}>Applications</p>
          <div className="ol-application-block">
            {ds.application.split(",").map((a, i) => (
              <span key={i} className="ol-app-tag">{a.trim()}</span>
            ))}
          </div>
        </>
      )}

      {ds.certifications?.length > 0 && (
        <>
          <p className="ol-ds-label" style={{ marginTop: 14 }}>Certifications</p>
          <div className="ol-cert-list" style={{ marginBottom: 18 }}>
            {ds.certifications.map((c, i) => (
              <span key={i} className="ol-cert">{c}</span>
            ))}
          </div>
        </>
      )}

      {hasVariants && (
        <>
          <p className="ol-ds-label" style={{ marginTop: 4 }}>
            Variants <span style={{ color: "#555", fontWeight: 400 }}>— {product.variants.length} options</span>
          </p>
          {(() => {
            const hasLumens = product.variants.some(v => v.lumens);
            return (
              <div className="ol-variants-table">
                <div className={`ol-variants-head ${hasLumens ? "ol-variants-head--no-lm" : ""}`}>
                  <span>Wattage</span>
                  {hasLumens && <span>Lumens</span>}
                  <span>Dimensions</span>
                  <span>Code</span>
                </div>
                {product.variants.map((v, i) => (
                  <div key={i} className={`ol-variants-row ${hasLumens ? "ol-variants-row--no-lm" : ""} ${v.tag ? "ol-variants-row--tagged" : ""}`}>
                    <span className="ol-vr-watt">{v.wattage}</span>
                    {hasLumens && <span className="ol-vr-lm">{v.lumens}</span>}
                    <span className="ol-vr-dim">{v.dims}</span>
                    <span className="ol-vr-code">
                      {v.code}
                      {v.tag && <em className="ol-vr-tag">{v.tag}</em>}
                    </span>
                  </div>
                ))}
              </div>
            );
          })()}
        </>
      )}

      {ds.downloads?.length > 0 && (
        <>
          <p className="ol-ds-label" style={{ marginTop: 18 }}>Datasheet</p>
          <div className="ol-dl-list">
            {ds.downloads.map((dl, i) => {
              const fileUrl = typeof dl === "string" ? `/datasheets/outdoor/${dl}` : dl.url;
              const displayName = typeof dl === "string" ? dl.replace(/\.pdf$/i, "") : (dl.name || dl.url);
              return (
                <a key={i} href={fileUrl} download className="ol-dl-row" target="_blank" rel="noreferrer">
                  <div className="ol-dl-left">
                    <div className="ol-dl-icon"><IconPDF /></div>
                    <div>
                      <div className="ol-dl-name">{displayName}</div>
                      <div className="ol-dl-size">PDF</div>
                    </div>
                  </div>
                  <span className="ol-dl-btn"><IconDownload /> Download</span>
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

function DetailPane({ product, catLabel }) {
  if (!product) {
    return (
      <div className="ol-detail ol-detail--empty">
        <div className="ol-empty">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.25">
            <circle cx="16" cy="16" r="14" stroke="#c8a96e" strokeWidth="1.5" />
            <path d="M10 16h12M16 10v12" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>SELECT A PRODUCT</span>
        </div>
      </div>
    );
  }

  const heroTag = product.variants?.find(v => v.tag)?.tag;
  const isSystem = product.type === "system";

  return (
    <div className="ol-detail" key={product.id}>
      <div className="ol-detail-hero">
        <ProductImage src={product.img} alt={product.name} />
        <div className="ol-detail-hero-fade" />
        {heroTag && <span className="ol-detail-tag">{heroTag}</span>}
        {isSystem && <span className="ol-detail-tag ol-detail-tag--system">Profile System</span>}
        <div className="ol-detail-hero-title">
          <span className="ol-detail-cat">{catLabel}</span>
          <h2 className="ol-detail-name">{product.name}</h2>
        </div>
      </div>
      <div className="ol-detail-body">
        {isSystem ? <LinearProfilePanel product={product} /> : <OverviewPanel product={product} />}
      </div>
    </div>
  );
}

function CategorySidebar({ categories, activeCatId, productSelected, onSelect, onClose }) {
  const collapsed = productSelected;
  return (
    <div className={`ol-cat-sidebar ${collapsed ? "ol-cat-sidebar--collapsed" : ""}`}>
      <div className="ol-cat-sidebar-header">
        <div className="ol-cat-sidebar-super">Stellmore Italia</div>
        <div className="ol-cat-sidebar-title">Outdoor</div>
      </div>

      <div className="ol-cat-sidebar-body">
        {categories.map((cat) => {
          const isActive = cat.id === activeCatId;
          return (
            <div
              key={cat.id}
              className={`ol-cat-row ${isActive ? "active" : ""}`}
              onClick={() => onSelect(cat)}
              title={collapsed ? cat.label : undefined}
            >
              <div className="ol-cat-row-thumb">
                <ProductImage src={cat.img || cat.products?.[0]?.img || null} alt={cat.label} />
              </div>
              <div className="ol-cat-row-info">
                <div className="ol-cat-row-name">{cat.label}</div>
                <div className="ol-cat-row-count">{cat.products.length} products</div>
              </div>
              <div className="ol-cat-row-dot" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProductList({ category, selectedId, productSelected, onSelect }) {
  if (!category) return null;
  const compact = productSelected;

  return (
    <div className={`ol-list ${compact ? "ol-list--compact" : ""}`}>
      <div className="ol-list-header">
        <div className="ol-list-super">Category</div>
        <div className="ol-list-title">{category.label}</div>
        {!compact && category.tagline && <div className="ol-list-tagline">{category.tagline}</div>}
        <div className="ol-list-count">{category.products.length} products</div>
      </div>

      <div className="ol-list-body">
        {category.products.length === 0 ? (
          <div className="ol-list-empty"><span>Coming soon</span></div>
        ) : (
          category.products.map((p) => {
            const firstTag = p.variants?.find(v => v.tag)?.tag;
            return (
              <div
                key={p.id}
                className={`ol-item ${selectedId === p.id ? "active" : ""}`}
                onClick={() => onSelect(p)}
              >
                <div className="ol-item-img">
                  <ProductImage src={p.img} alt={p.name} />
                </div>
                <div className="ol-item-info">
                  <div className="ol-item-name">{p.name}</div>
                  {!compact && <div className="ol-item-desc">{p.desc}</div>}
                  {!compact && p.type === "system" && <span className="ol-item-badge">profiles</span>}
                  {!compact && p.type !== "system" && p.variants?.length > 0 && <span className="ol-item-badge">{p.variants.length} variants</span>}
                </div>
                {firstTag && <span className="ol-item-tag">{firstTag}</span>}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function AnimatedProductList({ category, selectedId, productSelected, onSelect }) {
  const [displayed, setDisplayed] = useState(category);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setDisplayed(category);
      setAnimKey((k) => k + 1);
    }, 80);
    return () => clearTimeout(t);
  }, [category?.id]);

  return (
    <div className="ol-list-anim-wrap" key={animKey}>
      <ProductList
        category={displayed}
        selectedId={selectedId}
        productSelected={productSelected}
        onSelect={onSelect}
      />
    </div>
  );
}

export default function OutdoorLighting({ onClose }) {
  const cats = OUTDOOR_CATEGORIES;
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => {
    if (onClose) onClose();
    else navigate(-1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCatSelect = (cat) => {
    if (activeCat?.id === cat.id && !selectedProduct) setActiveCat(null);
    else {
      setActiveCat(cat);
      setSelectedProduct(null);
    }
  };

  const handleProductSelect = (p) => {
    setSelectedProduct((prev) => (prev?.id === p.id ? null : p));
  };

  const productOpen = !!selectedProduct;
  const catOpen = !!activeCat;

  return (
    <div className="ol-overlay" onMouseDown={(e) => e.target === e.currentTarget && handleClose()}>

      {/* Mobile top bar — logo + close button */}
      <div className="ol-mobile-topbar">
        <Link to="/" className="ol-mobile-logo">
          <img src={LogoImg} alt="Stellmore Italia" />
        </Link>
        <button
          type="button"
          className="ol-mobile-close"
          onClick={handleClose}
          aria-label="Close"
        >
          <IconClose />
          <span>Close</span>
        </button>
      </div>

      {/* Desktop close button (hidden on mobile) */}
      <button
        type="button"
        className="ol-overlay-close ol-overlay-close--top ol-desktop-close"
        onClick={handleClose}
        aria-label="Close"
      >
        <IconClose />
        <span className="ol-overlay-close-label">Close</span>
      </button>

      <Header />

      <div className={`ol-panel ${productOpen ? "ol-panel--product-open" : catOpen ? "ol-panel--cat-open" : ""}`} onMouseDown={(e) => e.stopPropagation()}>
        <CategorySidebar
          categories={cats}
          activeCatId={activeCat?.id}
          productSelected={productOpen}
          onSelect={handleCatSelect}
          onClose={handleClose}
        />

        {catOpen ? (
          <AnimatedProductList
            category={activeCat}
            selectedId={selectedProduct?.id}
            productSelected={productOpen}
            onSelect={handleProductSelect}
          />
        ) : (
          <div className="ol-splash">
            <div className="ol-splash-inner">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.18">
                <circle cx="20" cy="20" r="18" stroke="#c8a96e" strokeWidth="1.5" />
                <path d="M20 10v20M10 20h20" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p>Select a category to browse products</p>
            </div>
          </div>
        )}

        {productOpen ? (
          <DetailPane product={selectedProduct} catLabel={activeCat?.label} />
        ) : catOpen ? (
          <div className="ol-detail ol-detail--empty">
            <div className="ol-empty">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.25">
                <circle cx="16" cy="16" r="14" stroke="#c8a96e" strokeWidth="1.5" />
                <path d="M10 16h12M16 10v12" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>SELECT A PRODUCT</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}