import { INDUSTRIAL_CATEGORIES } from "../assets/industrial";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation
import "./IndoorLighting.css";

/* --- ICONS --- */
const BackIcon = () => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path d="M9 2L4 6.5 9 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DocIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1" />
    <path d="M4.5 5h5M4.5 7.5h3.5M4.5 10h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 1v7M3 5.5l3 3 3-3M1.5 10h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --- SUB-COMPONENTS --- */
function SpecGrid({ rows }) {
  return (
    <div className="il-spec-grid">
      {rows.map(([label, val]) => (
        <div className="il-spec-row" key={label}>
          <span className="il-spec-label">{label}</span>
          <span className="il-spec-val">{val}</span>
        </div>
      ))}
    </div>
  );
}

function OverviewTab({ product, onViewDatasheet }) {
  return (
    <div className="il-tab-panel">
      <SpecGrid rows={[
        ["Wattage", product.datasheet.wattage],
        ["Lumens", product.datasheet.lumens],
        ["CRI", product.datasheet.cri],
        ["CCT", product.datasheet.cct],
        ["Beam Angle", product.datasheet.beam],
        ["IP Rating", product.datasheet.ip],
        ["Lifespan", product.datasheet.lifespan],
        ["Warranty", product.datasheet.warranty],
      ]} />
      <div className="il-actions">
        <button className="il-btn-primary">Request Quote</button>
        <button className="il-btn-secondary" onClick={onViewDatasheet}>View Datasheet</button>
      </div>
    </div>
  );
}
function DatasheetTab({ product }) {
  return (
    <div className="il-tab-panel">

      <p className="il-ds-label">Specifications</p>
      <SpecGrid rows={[
        ["Wattage",    product.datasheet.wattage],
        ["Lumens",     product.datasheet.lumens],
        ["CRI",        product.datasheet.cri],
        ["CCT",        product.datasheet.cct],
        ["Beam Angle", product.datasheet.beam],
        ["IP Rating",  product.datasheet.ip],
        ["Voltage",    product.datasheet.voltage],
        ["Dimensions", product.datasheet.dims],
        ["Weight",     product.datasheet.weight],
        ["Lifespan",   product.datasheet.lifespan],
        ["Warranty",   product.datasheet.warranty],
      ].filter(([, val]) => val)} />

      {product.datasheet.certifications?.length > 0 && (
        <>
          <p className="il-ds-label" style={{ marginTop: "18px" }}>Certifications</p>
          <div className="il-cert-list">
            {product.datasheet.certifications.map(c => (
              <span key={c} className="il-cert">{c}</span>
            ))}
          </div>
        </>
      )}

      {product.datasheet.downloads?.length > 0 && (
        <>
          <p className="il-ds-label" style={{ marginTop: "18px" }}>Downloads</p>
          <div className="il-dl-list">
            {product.datasheet.downloads.map((d) => (
              <div key={d.name} className="il-dl-row">
                <div className="il-dl-left">
                  <div className="il-dl-icon"><DocIcon /></div>
                  <div>
                    <div className="il-dl-name">{d.name}</div>
                    <div className="il-dl-size">{d.size}</div>
                  </div>
                </div>
                <button className="il-dl-btn"><DownloadIcon /> Download</button>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

function VariantsTab({ product, onSelect }) {
  if (!product?.subProducts) return null;
  return (
    <div className="il-tab-panel">
      <div className="il-variants-grid">
        {product.subProducts.map((v) => (
          <div key={v.id} className="il-variant-card" onClick={() => onSelect(v)}>
            <div className="il-variant-img">
              <img src={v.img} alt={v.name} />
            </div>
            <div className="il-variant-body">
              {v.tag && <span className="il-variant-tag">{v.tag}</span>}
              <div className="il-variant-name">{v.name}</div>
              <div className="il-variant-desc">{v.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function DetailPane({ selectedProduct, subProduct, onSelectSubProduct, onClearSubProduct }) {
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setActiveTab("overview"); }, [selectedProduct?.id, subProduct?.id]);

  const displayed = subProduct || selectedProduct;

  if (!selectedProduct) {
    return (
      <div className="il-detail">
        <div className="il-empty">
          <p>Select a product to view details</p>
        </div>
      </div>
    );
  }

  const tabs = ["overview", "datasheet", (!subProduct && selectedProduct.hasSubProducts) ? "variants" : null].filter(Boolean);

  return (
    <div className="il-detail">
      <div className="il-detail-hero">
        <img src={displayed.img} alt={displayed.name} />
        <div className="il-detail-hero-fade" />
      </div>
      <div className="il-detail-body">
        {subProduct && (
          <button className="il-sub-back" onClick={onClearSubProduct}>
            <BackIcon /> {selectedProduct.name}
          </button>
        )}
        <h2 className="il-detail-name">{displayed.name}</h2>
        <div className="il-tabs">
          {tabs.map(tab => (
            <button key={tab} className={`il-tab${activeTab === tab ? " active" : ""}`} onClick={() => setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {activeTab === "overview"  && <OverviewTab product={displayed} onViewDatasheet={() => setActiveTab("datasheet")} />}
        {activeTab === "datasheet" && <DatasheetTab product={displayed} />}
        {activeTab === "variants"  && <VariantsTab product={selectedProduct} onSelect={onSelectSubProduct} />}
      </div>
    </div>
  );
}

/* --- MAIN PAGE COMPONENT --- */
export default function IndoorLightingPage() {
  const navigate = useNavigate(); // Hook for back-to-home navigation
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [subProduct, setSubProduct] = useState(null);

  useEffect(() => {
    if (INDUSTRIAL_CATEGORIES.length > 0) {
      setActiveCategory(INDUSTRIAL_CATEGORIES[0]);
    }
  }, []);

  const selectCategory = (cat) => {
    setActiveCategory(cat);
    setSelectedProduct(null);
    setSubProduct(null);
  };

  const selectProduct = (p) => {
    setSelectedProduct(p);
    setSubProduct(null);
  };

  return (
    <div className="il-page-container">
      <div className="il-panel">
        
        {/* COLUMN 1 — SIDEBAR */}
        <div className="il-cat-sidebar">
          {/* THE BACK TO HOME LINK */}
          <button className="il-back-btn" onClick={() => navigate("/")}>
            <BackIcon /> <span>Back to Home</span>
          </button>
          
          <div className="il-cat-sidebar-header">
            <div className="il-cat-sidebar-super">Indoor</div>
            <div className="il-cat-sidebar-title">Lighting</div>
          </div>

          <div className="il-cat-sidebar-body">
            {INDUSTRIAL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className={`il-cat-row${activeCategory?.id === cat.id ? " active" : ""}`}
                onClick={() => selectCategory(cat)}
              >
                <div className="il-cat-row-thumb">
                  <img src={cat.img} alt={cat.label} />
                </div>
                <div className="il-cat-row-info">
                  <div className="il-cat-row-name">{cat.label}</div>
                  <div className="il-cat-row-count">{cat.products.length} products</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2 — PRODUCT LIST */}
        {/* COLUMN 2 — PRODUCT LIST */}
<div className="il-list">
  <div className="il-list-header">
    <div className="il-list-title">{activeCategory?.label || "Select Category"}</div>
  </div>
  <div className="il-list-body">
    {activeCategory?.products.map(p => (
  <div
    key={p.id}
    className={`il-item${selectedProduct?.id === p.id ? " active" : ""}`}
    onClick={() => selectProduct(p)}
  >
    <div className="il-item-img">       {/* ← wrapper div, not just img */}
      <img src={p.img} alt={p.name} />  {/* ← img goes inside */}
    </div>
    <div className="il-item-info">
      <div className="il-item-name">{p.name}</div>
      <div className="il-item-desc">{p.desc}</div>
    </div>
  </div>
    ))}
  </div>
</div>

        {/* COLUMN 3 — DETAIL PANE */}
        <DetailPane
          selectedProduct={selectedProduct}
          subProduct={subProduct}
          onSelectSubProduct={setSubProduct}
          onClearSubProduct={() => setSubProduct(null)}
        />

      </div>
    </div>
  );
}