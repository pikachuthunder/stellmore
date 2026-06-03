import "./Lightingcontrols.css";

const BRANDS = [
  { id: "casambi",  name: "Casambi" },
  { id: "dynalite", name: "Philips Dynalite" },
  { id: "lutron",   name: "Lutron" },
  { id: "madrix",   name: "Madrix" },
  { id: "hager",    name: "Hager" },
  { id: "cooper",   name: "Cooper Lighting" },
];

export default function LightingControls() {
  return (
    <div className="lc-page">

      {/* ── Header ── */}
      <div className="lc-header">
        <p className="lc-eyebrow">Smart Systems</p>
        <h1 className="lc-title">
          Lighting<br /><span className="lc-title-accent">Controls</span>
        </h1>
        <p className="lc-subtitle">
          We partner with the world's leading control system manufacturers to deliver
          intelligent lighting environments — from single rooms to entire campuses.
        </p>
      </div>

      {/* ── Single Hero Image ── */}
      <div className="lc-hero">
        {/* Replace the src below with your actual image import */}
        <img
          src="/src/assets/controls.png"
          alt="Lighting Controls Products"
          className="lc-hero-img"
        />
        <div className="lc-hero-overlay" />
      </div>

      {/* ── Brand Name Grid ── */}
      <div className="lc-brands">
        {BRANDS.map((brand, i) => (
          <div
            key={brand.id}
            className="lc-brand-item"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <span className="lc-brand-dot" />
            <span className="lc-brand-name">{brand.name}</span>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="lc-cta">
        <p className="lc-cta-label">Not sure which system fits your project?</p>
        <h2 className="lc-cta-title">Let our team specify the right control solution.</h2>
        
      </div>

    </div>
  );
}