import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { INDOOR_CATEGORIES } from "../assets/Indoor";
import Header from "./Headers";
import "./IndoorLighting.css";

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

function LinearProfilePanel({ product }) {
  const ds = product.datasheet || {};
  const variants = product.variants || [];

  return (
    <div className="il-tab-panel">
      {product.desc && (
        <div className="il-overview-desc-block">
          <p className="il-detail-desc">{product.desc}</p>
        </div>
      )}

      <p className="il-ds-label">Profiles</p>
      <div className="il-variants-table">
        <div className="il-variants-head il-variants-head--linear">
          <span>Type</span>
          <span>Dimensions</span>
          <span>Code</span>
        </div>
        {variants.map((v, i) => (
          <div key={i} className={`il-variants-row il-variants-row--linear ${v.tag ? "il-variants-row--tagged" : ""}`}>
            <span className="il-vr-watt">{v.type}</span>
            <span className="il-vr-dim">{v.dims}</span>
            <span className="il-vr-code">
              {v.code}
              {v.tag && <em className="il-vr-tag">{v.tag}</em>}
            </span>
          </div>
        ))}
      </div>

      <p className="il-ds-label" style={{ marginTop: 20 }}>Specifications</p>
      <div className="il-spec-grid">
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
    <div className="il-tab-panel">
      {product.desc && (
        <div className="il-overview-desc-block">
          <p className="il-detail-desc">{product.desc}</p>
        </div>
      )}

      <p className="il-ds-label">Specifications</p>
      <div className="il-spec-grid">
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
            {ds.certifications.map((c, i) => (
              <span key={i} className="il-cert">{c}</span>
            ))}
          </div>
        </>
      )}

      {hasVariants && (
        <>
          <p className="il-ds-label" style={{ marginTop: 4 }}>
            Variants <span style={{ color: "#555", fontWeight: 400 }}>— {product.variants.length} options</span>
          </p>
          {(() => {
            const hasLumens = product.variants.some(v => v.lumens);
            return (
              <div className="il-variants-table">
                <div className={`il-variants-head ${hasLumens ? "il-variants-head--no-lm" : ""}`}>
                  <span>Wattage</span>
                  {hasLumens && <span>Lumens</span>}
                  <span>Dimensions</span>
                  <span>Code</span>
                </div>
                {product.variants.map((v, i) => (
                  <div key={i} className={`il-variants-row ${hasLumens ? "il-variants-row--no-lm" : ""} ${v.tag ? "il-variants-row--tagged" : ""}`}>
                    <span className="il-vr-watt">{v.wattage}</span>
                    {hasLumens && <span className="il-vr-lm">{v.lumens}</span>}
                    <span className="il-vr-dim">{v.dims}</span>
                    <span className="il-vr-code">
                      {v.code}
                      {v.tag && <em className="il-vr-tag">{v.tag}</em>}
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
          <p className="il-ds-label" style={{ marginTop: 18 }}>Datasheet</p>
          <div className="il-dl-list">
            {ds.downloads.map((dl, i) => (
              <a key={i} href={dl.url} download className="il-dl-row" target="_blank" rel="noreferrer">
                <div className="il-dl-left">
                  <div className="il-dl-icon"><IconPDF /></div>
                  <div>
                    <div className="il-dl-name">{dl.name}</div>
                    <div className="il-dl-size">{dl.size} PDF</div>
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

function DetailPane({ product, catLabel }) {
  if (!product) {
    return (
      <div className="il-detail il-detail--empty">
        <div className="il-empty">
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
        {isSystem ? <LinearProfilePanel product={product} /> : <OverviewPanel product={product} />}
      </div>
    </div>
  );
}

function CategorySidebar({ categories, activeCatId, productSelected, onSelect, onClose }) {
  const collapsed = productSelected;
  return (
    <div className={`il-cat-sidebar ${collapsed ? "il-cat-sidebar--collapsed" : ""}`}>
      <div className="il-cat-sidebar-header">
        <div className="il-cat-sidebar-super">Stellmore Italia</div>
        <div className="il-cat-sidebar-title">Indoor</div>
      </div>

      <div className="il-cat-sidebar-body">
        {categories.map((cat) => {
          const isActive = cat.id === activeCatId;
          return (
            <div
              key={cat.id}
              className={`il-cat-row ${isActive ? "active" : ""}`}
              onClick={() => onSelect(cat)}
              title={collapsed ? cat.label : undefined}
            >
              <div className="il-cat-row-thumb">
                <ProductImage src={cat.img || cat.products?.[0]?.img || null} alt={cat.label} />
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
    </div>
  );
}

function ProductList({ category, selectedId, productSelected, onSelect }) {
  if (!category) return null;
  const compact = productSelected;

  return (
    <div className={`il-list ${compact ? "il-list--compact" : ""}`}>
      <div className="il-list-header">
        <div className="il-list-super">Category</div>
        <div className="il-list-title">{category.label}</div>
        {!compact && category.tagline && <div className="il-list-tagline">{category.tagline}</div>}
        <div className="il-list-count">{category.products.length} products</div>
      </div>

      <div className="il-list-body">
        {category.products.length === 0 ? (
          <div className="il-list-empty"><span>Coming soon</span></div>
        ) : (
          category.products.map((p) => {
            const firstTag = p.variants?.find(v => v.tag)?.tag;
            return (
              <div
                key={p.id}
                className={`il-item ${selectedId === p.id ? "active" : ""}`}
                onClick={() => onSelect(p)}
              >
                <div className="il-item-img">
                  <ProductImage src={p.img} alt={p.name} />
                </div>
                <div className="il-item-info">
                  <div className="il-item-name">{p.name}</div>
                  {!compact && <div className="il-item-desc">{p.desc}</div>}
                  {!compact && p.type === "system" && <span className="il-item-badge">profiles</span>}
                  {!compact && p.type !== "system" && p.variants?.length > 0 && <span className="il-item-badge">{p.variants.length} variants</span>}
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

export default function IndoorLighting({ onClose }) {
  const cats = INDOOR_CATEGORIES || [];
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
    <div className="il-overlay" onMouseDown={(e) => e.target === e.currentTarget && handleClose()}>
      <button
        type="button"
        className="il-overlay-close il-overlay-close--top"
        onClick={handleClose}
        aria-label="Close"
      >
        <IconClose />
        <span className="il-overlay-close-label">Close</span>
      </button>

      <Header />

      <div className={`il-panel ${productOpen ? "il-panel--product-open" : catOpen ? "il-panel--cat-open" : ""}`} onMouseDown={(e) => e.stopPropagation()}>
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
          <div className="il-splash">
            <div className="il-splash-inner">
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
          <div className="il-detail il-detail--empty">
            <div className="il-empty">
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