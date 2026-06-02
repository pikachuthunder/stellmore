import { useState, useEffect } from "react";
import founded from '../assets/milestone/Founded.jpeg';
import mile_2 from '../assets/milestone/M_2.jpeg';
import mile_3 from '../assets/milestone/M_3.jpeg';
import mile_4 from '../assets/milestone/M_4.jpeg';
import mile_7 from '../assets/milestone/M_7.jpg';
import mile_8 from '../assets/milestone/M_8.jpeg';
import mile_6 from '../assets/nakheel.jpeg';
import vero from '../assets/Brand/verolite.jpg';
import vero1 from '../assets/Brand/vero_1.png';
import vero2 from '../assets/Brand/vero2.png';
import vero_trade from '../assets/Brand/vero_trade.jpg';
import noura from '../assets/Brand/noura.jpg';
import noura1 from '../assets/Brand/noura1.jpeg';
import noura2 from '../assets/Brand/noura2.jpeg';
import noura3 from '../assets/Brand/noura3.jpeg';
import stell1 from '../assets/Brand/stell1.png';
import stell2 from '../assets/Brand/stell2.png';
import stell from '../assets/image12.png';
import stell_trade from '../assets/Brand/stell_trade.jpg'
/* ─────────────────────────────────────────────
    COMPANY MILESTONES DATA
───────────────────────────────────────────── */
const COMPANY_MILESTONES = [
  {
    id: "2007", year: "2007", title: "Founded in Dubai",
    body: "Established in Dubai with a vision to revolutionize lighting solutions across the UAE. Started with a small showroom showcasing premium lighting fixtures.",
    photo: founded,
  },
  {
    id: "2010", year: "2010", title: "Noura Launched",
    body: "Introduced Noura — our first in-house brand, bringing quality, warm and reliable lighting solutions to homes across the region.",
    photo: noura,
  },
  {
    id: "2011", year: "2011", title: "Regional Expansion",
    body: "Opened a second office and expanded operations across the Gulf, serving both residential and commercial sectors.",
    photo: mile_3,
  },
  {
    id: "2013", year: "2013", title: "Verolite UK Launched",
    body: "Launched Verolite UK — British-engineered, high-performance commercial and industrial lighting built for demanding environments.",
    photo: vero,
  },
  {
    id: "2014", year: "2014", title: "Flagship Showroom",
    body: "Unveiled our flagship showroom showcasing the full lighting portfolio — from residential warmth to architectural precision.",
    photo: mile_4,
  },
  {
    id: "2016", year: "2016", title: "Design Consultancy",
    body: "Launched our specialized lighting design consultancy and completed landmark projects across residential and commercial sectors.",
    photo: mile_2,
  },
  {
    id: "2019", year: "2019", title: "Sustainable Leadership",
    body: "Achieved market leadership in sustainable lighting with a focus on energy-efficient LED technology and solar-powered systems.",
    photo: mile_6,
  },
  {
    id: "2024", year: "2024", title: "Stellmore Italia Launched",
    body: "Introduced Stellmore Italia — the pinnacle of Italian luxury lighting, where architectural mastery meets exquisite craftsmanship.",
    photo: stell,
  },
  {
    id: "2026", year: "2026", title: "Illuminate Your Vision",
    body: "19 years of excellence. Three iconic brands. Hundreds of landmark projects. One unwavering commitment — to light every space with purpose.",
    photo: mile_7,
  },
];

/* ─────────────────────────────────────────────
    BRAND DATA
───────────────────────────────────────────── */
const BRANDS = [
  { 
    id: "noura", 
    name: "Noura", 
    year: "2010", 
    tagline: "Reliable Lighting, Exceptional Value.", 
    desc: "Noura offers smart, affordable lighting solutions designed to meet everyday needs without compromising quality. Perfect for budgetconscious projects, Noura products deliver dependable performance and style, backed by a solid 3-year warranty for peace of mind.", 
    accent: "#c8a96e", 
    photo: noura, 
    photos: [noura1, noura2, noura3] 
  },
  { 
    id: "verolite", 
    name: "Verolite UK", 
    year: "2013", 
    tagline: "Premium Lighting, Perfected.", 
    desc: "Registered in the UK, VEROLITE is the go-to brand for premium lighting solutions crafted exclusively for high-end projects. Combining innovative technology, superior craftsmanship, and elegant design, VEROLITE brings luxury spaces to life with stunning, energy-efficient illumination..", 
    accent: "#7ea8c0", 
    photo: vero, 
    photos: [vero1, vero_trade, vero2] 
  },
  { 
  id: "stellmore", 
  name: "Stellmore Italia", 
  year: "2026", 
  tagline: "Crafted in Style. Designed by Light.", 
  desc: "The  pinnacle of Italian luxury, with visionary architectural artistry and masterful craftsmanship.Creating timeless lighting solutions with innovation, elegance, and exceptional attention to detail.Backed by a comprehensive 5-year warranty for lasting confidence and performance.", 
  accent: "#dcd2be", 
  photo: stell, 
  photos: [stell1, stell_trade, stell2] 
}
];

const STYLES = `
.jrny-section {
  padding: 60px 0;
  background: #080808;
  color: #f0ece4;
  margin: 0 !important;
}
.jrny-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- HORIZONTAL SCROLL STRIP --- */
.cj-strip {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  gap: 25px;
  overflow-x: auto !important;
  padding: 20px 0 40px;
  scrollbar-width: thin;
  scrollbar-color: #c8a96e transparent;
  -webkit-overflow-scrolling: touch;
}
.cj-strip::-webkit-scrollbar { height: 3px; }
.cj-strip::-webkit-scrollbar-thumb { background: #c8a96e; border-radius: 10px; }

.cj-item {
  flex: 0 0 320px !important; /* Larger card size */
  min-width: 320px;
  background: #0d0d0d;
  border: 1px solid #1a1a1a;
  padding: 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.cj-item:hover { transform: translateY(-8px); border-color: #333; }

.cj-item-photo {
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}
.cj-item-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: 0.5s ease;
}
.cj-item:hover img { filter: brightness(1); transform: scale(1.05); }

.cj-item-year { color: #c8a96e; font-size: 0.75rem; letter-spacing: 0.25em; margin-bottom: 6px; }
.cj-item-title { font-size: 1.2rem; color: #fff; margin-bottom: 10px; font-weight: 500; }
.cj-item-body { font-size: 0.85rem; color: #777; line-height: 1.7; }

/* --- BRAND JOURNEY TYPOGRAPHY --- */
.bj-tagline {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.bj-divider {
  height: 1px;
  margin-bottom: 15px;
}
.bj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.bj-card { background: #0b0b0b; border: 1px solid #161616; border-radius: 8px; overflow: hidden; }

@media (max-width: 768px) {
  .bj-grid { grid-template-columns: 1fr; }
  .cj-item { flex: 0 0 280px !important; min-width: 280px; }
}
`;

function Lightbox({ src, onClose }) {
  return (
    <div 
      className="jrny-lb" 
      onClick={onClose} 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        background: 'rgba(0,0,0,0.95)', 
        zIndex: 1000, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        cursor: 'zoom-out'
      }}
    >
       <img src={src} style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '4px' }} alt="" />
    </div>
  );
}

export function CompanyJourney() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const id = "jrny-styles-final";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = STYLES;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <section className="jrny-section">
      <div className="jrny-wrap">
        <h2 style={{ marginBottom: '35px', fontWeight: '300', fontSize: '2rem', letterSpacing: '2px', color: '#c8a96e' }}>COMPANY EVOLUTION</h2>
        <div className="cj-strip">
          {COMPANY_MILESTONES.map((m) => (
            <div key={m.id} className="cj-item" onClick={() => setLightbox(m.photo)}>
              <div className="cj-item-photo">
                <img src={m.photo} alt={m.title} />
              </div>
              <div className="cj-item-year">{m.year}</div>
              <div className="cj-item-title">{m.title}</div>
              <p className="cj-item-body">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}

export function BrandJourney() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="jrny-section" style={{ paddingTop: '0' }}>
      <div className="jrny-wrap">
        <h2 style={{ marginBottom: '35px', fontWeight: '300', fontSize: '2rem', letterSpacing: '2px', color: '#c8a96e'}}>OUR BRANDS</h2>
        <div className="bj-grid">
          {BRANDS.map((brand) => (
            <div key={brand.id} className="bj-card">
              <div style={{ height: '220px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setLightbox(brand.photo)}>
                <img src={brand.photo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '5px' }}>{brand.name}</h3>
                
                {/* RESTORED BRAND COLORS */}
                <div className="bj-tagline" style={{ color: brand.accent }}>{brand.tagline}</div>
                <div className="bj-divider" style={{ background: brand.accent, opacity: 0.4 }} />
                
                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '20px', lineHeight: '1.6' }}>{brand.desc}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {brand.photos.map((p, i) => (
                        <img key={i} src={p} onClick={() => setLightbox(p)} style={{ width: '32%', height: '60px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px', border: '1px solid #1a1a1a' }} alt="" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}