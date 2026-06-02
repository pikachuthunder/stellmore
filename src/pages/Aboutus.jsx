import { useState, useEffect, useRef } from "react";
// ── FIX: change this to match your actual filename ──────────
// Check your src/pages/ folder and uncomment the correct one:
// import { CompanyJourney, BrandJourney } from "./Journey";
import { CompanyJourney, BrandJourney } from "./Milestone";
import "./Aboutus.css";


   
  
   import thayyibImg from '../assets/mohammed_thayyib.jpeg';
   import sahulImg   from '../assets/sahul_ziyad.jpeg';
   


const PARTNERS = [
  {
    id: "thayyib",
    name: "Mohammed Thayyib",
    surname: "Oravangara",
    role: "Managing Partner",
    bio: "A visionary entrepreneur with nearly two decades of expertise in the lighting industry, Mohammed Thayyib has led the company's growth from a single Dubai showroom to a multi-brand regional powerhouse. His deep understanding of architectural lighting and commitment to quality has shaped every brand under the City Fanoos umbrella.",
    photo: thayyibImg,
    initials: "MT",
  },
  {
    id: "sahul",
    name: "Sahul",
    surname: "Ziyad",
    role: "Managing Partner",
    bio: "With a sharp commercial acumen and passion for design excellence, Sahul Ziyad has been instrumental in forging international partnerships and expanding the company's footprint across the Gulf. He oversees operations, business development, and the strategic direction of all three brands.",
    photo: sahulImg,
    initials: "SZ",
  },
];

const STATS = [
  { value: "19+",  label: "Years of Excellence" },
  { value: "3",    label: "Iconic Brands" },
  { value: "500+", label: "Projects Delivered" },
  { value: "UAE",  label: "& GCC Presence" },
];

const VALUES = [
  {
    icon: "◈",
    title: "Craftsmanship",
    body: "Every product we carry meets exacting standards. From Italian-engineered fixtures to British-designed commercial luminaires, quality is non-negotiable.",
  },
  {
    icon: "◎",
    title: "Innovation",
    body: "We continuously evolve — embracing LED technology, smart controls, and sustainable design to stay ahead of an ever-changing industry.",
  },
  {
    icon: "◇",
    title: "Partnership",
    body: "We build long-term relationships with clients, architects, and designers. Your vision is our brief — we light it with precision and care.",
  },
  {
    icon: "◉",
    title: "Integrity",
    body: "Transparent dealings, honest recommendations, and a commitment to delivering exactly what we promise — every single time.",
  },
];

/* ─── LIGHTBOX ───────────────────────────────────────────── */
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div className="au-lb" onClick={onClose}>
      <img src={src} alt="" onClick={e => e.stopPropagation()} />
      <button className="au-lb-close" onClick={onClose}>✕</button>
    </div>
  );
}

/* ─── PARTNER CARD ───────────────────────────────────────── */
function PartnerCard({ partner, onPhotoClick }) {
  return (
    <div className="au-partner-card">
      {/* Photo or monogram placeholder */}
      <div
        className="au-partner-photo"
        onClick={() => partner.photo && onPhotoClick(partner.photo)}
        style={{ cursor: partner.photo ? "zoom-in" : "default" }}
      >
        {partner.photo ? (
          <img src={partner.photo} alt={partner.name} />
        ) : (
          <div className="au-partner-initials">
            <span>{partner.initials}</span>
            <p className="au-partner-photo-note">Photo coming soon</p>
          </div>
        )}
        <div className="au-partner-photo-overlay" />
      </div>

      {/* Info */}
      <div className="au-partner-info">
        <p className="au-partner-role">{partner.role}</p>
        <h3 className="au-partner-name">
          {partner.name}
          <br />
          <span className="au-partner-surname">{partner.surname}</span>
        </h3>
        <div className="au-partner-rule" />
        <p className="au-partner-bio">{partner.bio}</p>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────────── */
export default function AboutUsPage() {
  const [lightbox, setLightbox] = useState(null);
  const heroRef = useRef(null);

  /* Subtle parallax on hero text */
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="au-page">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="au-hero">
        <div className="au-hero-bg" />
        <div className="au-hero-content" ref={heroRef}>
          <p className="au-hero-eyebrow">Est. 2007 · Dubai, UAE</p>
          <h1 className="au-hero-title">
            Lighting the Future,<br />
            <em>One Space at a Time.</em>
          </h1>
          <p className="au-hero-sub">
            City Fanoos Lighting LLC is a UAE-based premium lighting company
            operating three iconic brands — Noura, Verolite UK, and Stellmore Italia —
            serving residential, commercial, and architectural projects across the Gulf.
          </p>
        </div>
        <div className="au-hero-scroll-hint">
          <span>Scroll</span>
          <div className="au-hero-scroll-line" />
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────── */}
      <section className="au-stats">
        {STATS.map((s) => (
          <div key={s.label} className="au-stat">
            <span className="au-stat-value">{s.value}</span>
            <span className="au-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── OUR STORY ──────────────────────────────────────── */}
      <section className="au-story">
        <div className="au-story-inner">
          <div className="au-story-left">
            <p className="au-section-eye">Our Story</p>
            <h2 className="au-section-title">
              Nearly Two Decades of<br />Illuminating Excellence
            </h2>
          </div>
          <div className="au-story-right">
            <p>
              Founded in 2007, City Fanoos Lighting LLC began with a single showroom and a clear
              mission: to bring world-class lighting solutions to the UAE market. What started as
              a boutique operation has grown into one of the region's most trusted lighting
              companies, with a portfolio spanning affordable everyday fixtures to the finest
              Italian architectural luminaires.
            </p>
            <p>
              Over nearly two decades, we have delivered lighting for luxury villas, five-star
              hotels, flagship retail spaces, and large-scale commercial developments across
              the UAE and GCC. Our strength lies not just in our products, but in our people —
              a team of lighting specialists, designers, and consultants who treat every project
              as a canvas.
            </p>
            <p>
              Today, through Noura, Verolite UK, and Stellmore Italia, we offer a complete
              lighting ecosystem — from budget-conscious residential solutions to museum-grade
              precision lighting — all under one roof, with one promise: excellence in every lumen.
            </p>
          </div>
        </div>
      </section>

      {/* ── MANAGING PARTNERS ──────────────────────────────── */}
      <section className="au-partners">
        <div className="au-section-head">
          <p className="au-section-eye">Leadership</p>
          <h2 className="au-section-title">Managing Partners</h2>
          <div className="au-section-rule" />
        </div>
        <div className="au-partners-grid">
          {PARTNERS.map((p) => (
            <PartnerCard
              key={p.id}
              partner={p}
              onPhotoClick={setLightbox}
            />
          ))}
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────── */}
      <section className="au-values">
        <div className="au-section-head">
          <p className="au-section-eye">What We Stand For</p>
          <h2 className="au-section-title">Our Values</h2>
          <div className="au-section-rule" />
        </div>
        <div className="au-values-grid">
          {VALUES.map((v) => (
            <div key={v.title} className="au-value-card">
              <div className="au-value-icon">{v.icon}</div>
              <h3 className="au-value-title">{v.title}</h3>
              <p className="au-value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPANY JOURNEY (existing component) ───────────── */}
      <CompanyJourney />

      {/* ── BRANDS (existing component) ────────────────────── */}
      <BrandJourney />

      {/* ── CONTACT CTA ────────────────────────────────────── */}
      <section className="au-cta">
        <div className="au-cta-inner">
          <p className="au-section-eye">Get In Touch</p>
          <h2 className="au-cta-title">Ready to Light Your Space?</h2>
          <p className="au-cta-sub">
            Whether you're an architect, developer, interior designer, or homeowner —
            our team is ready to help you find the perfect lighting solution.
          </p>
          <div className="au-cta-actions">
            <a href="/contact" className="au-cta-btn-primary">Contact Us</a>
            <a href="/downloads" className="au-cta-btn-secondary">View Datasheets</a>
          </div>
        </div>
      </section>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}