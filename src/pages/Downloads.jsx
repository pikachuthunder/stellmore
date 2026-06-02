import { useState, useMemo } from "react";
import { INDOOR_CATEGORIES }  from "../assets/Indoor";
import { OUTDOOR_CATEGORIES } from "../assets/outdoor.js";
// Add more as you create them:
// import { COMMERCIAL_CATEGORIES } from "../assets/Commercial";
// import { CONTROLS_CATEGORIES }   from "../assets/Controls";

import "./Downloads.css";

/* ─────────────────────────────────────────────────────────
   SOURCES — one entry per data file.
   section = the tab label shown on the page.
   Just uncomment a line when you add a new data file.
───────────────────────────────────────────────────────── */
const SOURCES = [
  { section: "Indoor Lighting",     data: INDOOR_CATEGORIES  },
  { section: "Outdoor Lighting",    data: OUTDOOR_CATEGORIES },
  // { section: "Commercial Lighting", data: COMMERCIAL_CATEGORIES },
  // { section: "Lighting Controls",   data: CONTROLS_CATEGORIES },
];

/* ─────────────────────────────────────────────────────────
   Flatten: source → category → product → downloads[]
   Handles both formats:
     Indoor:  downloads: [{ name, url, size }]
     Outdoor: downloads: ["FILENAME.pdf"]
   Produces: [{ name, url, section, category, productName, productImg }]
───────────────────────────────────────────────────────── */
function flattenDownloads(sources) {
  const result = [];
  sources.forEach(({ section, data }) => {
    data.forEach((cat) => {
      cat.products?.forEach((product) => {
        product.datasheet?.downloads?.forEach((dl) => {
          // ── string format (Outdoor) ──
          if (typeof dl === "string") {
            result.push({
              name:        dl.replace(/\.pdf$/i, ""),
              url:         `/datasheets/outdoor/${dl}`,
              section,
              category:    cat.label,
              productName: product.name,
              productImg:  product.img || null,
            });
          }
          // ── object format (Indoor) ──
          else if (dl?.url) {
            result.push({
              name:        dl.name || product.name,
              url:         dl.url,
              section,
              category:    cat.label,
              productName: product.name,
              productImg:  product.img || null,
            });
          }
        });
      });
    });
  });
  return result;
}

/* ─── ICONS ─────────────────────────────────────────────── */
const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M6.5 1v8M4 6.5l2.5 3 2.5-3M1.5 12h10"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

/* ─── PDF CARD ───────────────────────────────────────────── */
const PLACEHOLDER_THUMB = "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400&q=80";

function PdfCard({ item }) {
  const [imgFailed, setImgFailed] = useState(false);

  // Strip "Stellmore Italia" prefix for cleaner display
  const shortName = item.name
    .replace(/^stellmore\s+italia[-\s]*/i, "")
    .trim() || item.productName;

  const hasImg = item.productImg && !imgFailed;

  return (
    <a
      href={item.url}
      download
      target="_blank"
      rel="noreferrer"
      className="dl-card"
    >
      {/* Cover photo or PDF thumbnail fallback */}
      <div className="dl-card-thumb">
        {hasImg ? (
          <>
            <img
              src={item.productImg}
              alt={item.productName}
              className="dl-card-img"
              onError={() => setImgFailed(true)}
            />
            <div className="dl-card-img-badge">PDF</div>
          </>
        ) : (
          <svg viewBox="0 0 56 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="54" height="68" rx="5"
              fill="#0d0d0d" stroke="#242424" strokeWidth="1.5"/>
            <path d="M36 1 L54 19 L36 19 Z" fill="#161616" stroke="#242424" strokeWidth="1"/>
            <path d="M36 1 L36 19 L54 19" stroke="#242424" strokeWidth="1.5"/>
            <line x1="10" y1="30" x2="46" y2="30" stroke="#1e1e1e" strokeWidth="1.5"/>
            <line x1="10" y1="37" x2="46" y2="37" stroke="#1e1e1e" strokeWidth="1.5"/>
            <line x1="10" y1="44" x2="34" y2="44" stroke="#1e1e1e" strokeWidth="1.5"/>
            <rect x="9" y="53" width="26" height="9" rx="2"
              fill="#c8a96e" fillOpacity="0.15"/>
            <text x="22" y="60.5" textAnchor="middle"
              fill="#c8a96e" fontSize="7.5" fontWeight="700"
              fontFamily="'Courier New', monospace" letterSpacing="2">PDF</text>
          </svg>
        )}
      </div>

      {/* Info */}
      <div className="dl-card-info">
        <span className="dl-card-cat">{item.category}</span>
        <span className="dl-card-name">{shortName}</span>
      </div>

      {/* CTA */}
      <div className="dl-card-action">
        <DownloadIcon />
        <span>Download</span>
      </div>
    </a>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function DownloadsPage() {
  const all = useMemo(() => flattenDownloads(SOURCES), []);

  const [search,   setSearch]   = useState("");
  const [section,  setSection]  = useState("All");
  const [category, setCategory] = useState("All");

  /* Dynamic filter options */
  const sections = useMemo(
    () => ["All", ...new Set(all.map(d => d.section))],
    [all]
  );

  const categories = useMemo(() => {
    const pool = section === "All" ? all : all.filter(d => d.section === section);
    return ["All", ...new Set(pool.map(d => d.category))];
  }, [all, section]);

  const handleSection = (s) => { setSection(s); setCategory("All"); };

  /* Filtered list */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return all.filter(d => {
      const matchSearch   = !q
        || d.name.toLowerCase().includes(q)
        || d.category.toLowerCase().includes(q)
        || d.section.toLowerCase().includes(q);
      const matchSection  = section  === "All" || d.section   === section;
      const matchCategory = category === "All" || d.category  === category;
      return matchSearch && matchSection && matchCategory;
    });
  }, [all, search, section, category]);

  /* Group for display: section → category → items */
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach(d => {
      if (!map[d.section])             map[d.section] = {};
      if (!map[d.section][d.category]) map[d.section][d.category] = [];
      map[d.section][d.category].push(d);
    });
    return map;
  }, [filtered]);

  const multiSection = sections.length > 2; // more than "All" + one section

  return (
    <div className="dl-page">

      {/* HERO */}
      <div className="dl-hero">
        <p className="dl-hero-eye">Stellmore Italia</p>
        <h1 className="dl-hero-title">Downloads</h1>
        <p className="dl-hero-sub">
          Technical datasheets for every product in our range.
          Click any card to download the PDF.
        </p>
        <div className="dl-hero-count">
          <strong>{all.length}</strong> datasheets
        </div>
      </div>

      {/* CONTROLS */}
      <div className="dl-controls">

        {/* Search bar */}
        <div className="dl-search-wrap">
          <SearchIcon />
          <input
            className="dl-search"
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="dl-clear" onClick={() => setSearch("")}>✕</button>
          )}
        </div>

        {/* Section tabs — only appear when you have multiple sections */}
        {multiSection && (
          <div className="dl-tabs">
            {sections.map(s => (
              <button
                key={s}
                className={`dl-tab${section === s ? " active" : ""}`}
                onClick={() => handleSection(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Category pills */}
        <div className="dl-pills">
          {categories.map(c => (
            <button
              key={c}
              className={`dl-pill${category === c ? " active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="dl-tally">
          {filtered.length === 0
            ? "No results"
            : `${filtered.length} of ${all.length} datasheets`}
        </p>
      </div>

      {/* GRID */}
      <div className="dl-body">
        {Object.entries(grouped).map(([sec, cats]) => (
          <div key={sec}>

            {/* Section heading — only when multiple sections */}
            {multiSection && (
              <div className="dl-sec-head">
                <h2 className="dl-sec-title">{sec}</h2>
                <div className="dl-sec-rule" />
              </div>
            )}

            {Object.entries(cats).map(([cat, items]) => (
              <div key={cat} className="dl-cat-block">
                <div className="dl-cat-head">
                  <h3 className="dl-cat-title">{cat}</h3>
                  <span className="dl-cat-count">{items.length} files</span>
                </div>
                <div className="dl-grid">
                  {items.map((item, i) => (
                    <PdfCard key={`${item.name}-${i}`} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="dl-empty">
            <p className="dl-empty-icon">◎</p>
            <p className="dl-empty-title">No datasheets found</p>
            <p className="dl-empty-sub">Try clearing your search or filters</p>
            <button
              className="dl-pill active"
              onClick={() => { setSearch(""); setSection("All"); setCategory("All"); }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}