import { useState, useRef } from "react";
import oman_ghbora1 from '../assets/oman.png'
import salalah from'../assets/salalah.jpeg'
import pool_care from '../assets/pool_care.jpeg'
import nakheel from '../assets/nakheel.jpeg'
import nakeel from '../assets/nakeel.jpeg'
import qatar from '../assets/qatar1.jpeg'
import ajman from '../assets/ajman .jpeg'


const showrooms = [
  {
    id: 2,
    name: "City Fanoos – Al Ghobra",
    location: "Al Ghobra, Muscat, Oman",
    flag: "🇴🇲",
    country: "Oman",
    phone: "+968 9206 2707",
    tag: "Oman",
    mapsUrl: "https://maps.app.goo.gl/VMRM21ZcHEvvGKCRA?g_st=iw",
    bg: oman_ghbora1,
  },
  {
    id: 7,
    name: "City Fanoos Pool Care – Al Ghobra",
    location: "Al Ghobra, Muscat, Oman",
    flag: "🇴🇲",
    country: "Oman",
    phone: "+968 9206 2707",
    tag: "Oman",
    mapsUrl: " https://maps.app.goo.gl/VMRM21ZcHEvvGKCRA?g_st=iw",
    bg: pool_care,
  },
  {
    id: 3,
    name: "City Fanoos – Salalah",
    location: "Salalah, Dhofar, Oman",
    flag: "🇴🇲",
    country: "Oman",
    phone: "+968 9142 8815",
    tag: "Oman",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Fanoos+Salalah+Dhofar+Oman",
    bg: salalah,
  },
  {
    id: 4,
    name: "City Fanoos – Nakheel",
    location: "Nakheel Street, Dubai, UAE",
    flag: "🇦🇪",
    country: "UAE",
    phone: "+971 503846548",
    tag: "Dubai",
    mapsUrl: "https://maps.app.goo.gl/MNvu4heD2kcNynhU8?g_st=iw",
    bg: nakeel,
  },
  {
    id: 8,
    name: "City Fanoos – Baniyas Street",
    location: "Baniya Street, Dubai, UAE",
    flag: "🇦🇪",
    country: "UAE",
    phone: "+971 42288067",
    tag: "Dubai",
    mapsUrl: "https://www.google.com/maps/place/City+Fanoos+Lighting+LLC/@25.2678694,55.3031748,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43ad1c42e1bf:0x699068d3c17daa76!8m2!3d25.2678646!4d55.3057497!16s%2Fg%2F11kqzs2hdq?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D",
    bg: nakheel,
  },
  {
    id: 5,
    name: "City Fanoos – Ajman",
    location: "China Mall, Ajman, UAE",
    flag: "🇦🇪",
    country: "UAE",
    phone: "+971 55 459 5280",
    tag: "Ajman",
    mapsUrl: "https://maps.app.goo.gl/qWwNv73Uk6rpEtxK9?g_st=iw",
    bg: ajman,
  },
  {
    id: 6,
    name: "Versailles Trading & Contracting",
    location: "Doha, Qatar",
    flag: "🇶🇦",
    country: "Qatar",
    phone: "+974 5997 7997",
    tag: "Distributor",
    isDistributor: true,
    mapsUrl: "https://www.google.com/maps/place/25%C2%B012'46.0%22N+51%C2%B034'36.5%22E/@25.2127705,51.5742226,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.2127705!4d51.5767975?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D",
    bg: qatar,
  },
];

const PhoneIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d={dir === "left" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"} />
  </svg>
);

export default function ShowroomsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const filters = ["All", "Oman", "UAE", "Qatar"];
  const filtered =
    activeFilter === "All"
      ? showrooms
      : showrooms.filter((s) => s.country === activeFilter);

  const CARD_WIDTH = 340;

  const scrollTo = (idx) => {
    if (!trackRef.current) return;
    const clamped = Math.max(0, Math.min(idx, filtered.length - 1));
    setActiveIdx(clamped);
    trackRef.current.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollStart.current - (x - startX.current) * 1.1;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      const idx = Math.round(trackRef.current.scrollLeft / CARD_WIDTH);
      setActiveIdx(Math.max(0, Math.min(idx, filtered.length - 1)));
    }
  };

  const handleGetDirections = (showroom) => {
    window.open(showroom.mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section style={{
      background: "linear-gradient(160deg, #0a0a0a 0%, #111108 50%, #0a0a0a 100%)",
      padding: "100px 0 110px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

        .fs-track {
          display: flex;
          flex-direction: row;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          cursor: grab;
          padding: 16px 48px 32px;
          scrollbar-width: none;
        }
        .fs-track::-webkit-scrollbar { display: none; }

        .fs-card {
          flex: 0 0 300px;
          scroll-snap-align: start;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.15);
          background: #111;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94),
                      box-shadow 0.4s ease,
                      border-color 0.35s ease;
          user-select: none;
        }
        .fs-card:hover {
          transform: translateY(-10px) scale(1.025);
          box-shadow: 0 30px 60px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.45);
        }
        .fs-card-img {
          transition: transform 0.6s ease;
        }
        .fs-card:hover .fs-card-img {
          transform: scale(1.07);
        }
        .fs-card-body {
          transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .fs-card:hover .fs-card-body {
          transform: translateY(-4px);
        }

        .gold-line {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
          margin: 0 auto;
        }
        .filter-btn {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.25);
          color: rgba(201,168,76,0.55);
          padding: 7px 26px;
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .filter-btn:hover, .filter-btn.active {
          background: rgba(201,168,76,0.1);
          border-color: #C9A84C;
          color: #C9A84C;
        }
        .showroom-tag {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #C9A84C;
          border: 1px solid rgba(201,168,76,0.45);
          padding: 3px 9px;
          display: inline-block;
          backdrop-filter: blur(4px);
          background: rgba(0,0,0,0.35);
        }
        .info-row {
          display: flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.48);
          font-size: 13px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.3px;
          margin-bottom: 8px;
        }
        .info-row svg { flex-shrink: 0; color: rgba(201,168,76,0.65); }

        .dir-btn {
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.22);
          color: rgba(201,168,76,0.65);
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dir-btn:hover {
          background: rgba(201,168,76,0.14);
          border-color: #C9A84C;
          color: #C9A84C;
        }
        .dir-btn:disabled {
          opacity: 0.25;
          cursor: default;
        }
        .directions-btn {
          background: transparent;
          border: 1px solid rgba(201,168,76,0.35);
          color: #C9A84C;
          padding: 9px 0;
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 14px;
        }
        .directions-btn:hover {
          background: rgba(201,168,76,0.1);
          border-color: #C9A84C;
        }

        .distributor-badge {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #C9A84C;
          padding: 3px 10px;
          display: inline-block;
        }
        .distributor-card {
          border-color: rgba(201,168,76,0.3) !important;
          background: linear-gradient(160deg, #111 0%, #141208 100%) !important;
        }
        .distributor-card:hover {
          border-color: rgba(201,168,76,0.6) !important;
        }
        .distributor-label {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(201,168,76,0.5);
          margin-bottom: 4px;
          display: block;
        }

        .progress-pip {
          height: 2px;
          border-radius: 2px;
          background: rgba(201,168,76,0.2);
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .progress-pip.active {
          background: #C9A84C;
        }
        .fade-edge-l {
          position: absolute; left: 0; top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
          background: linear-gradient(to right, #0a0a0a, transparent);
        }
        .fade-edge-r {
          position: absolute; right: 0; top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
          background: linear-gradient(to left, #0a0a0a, transparent);
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 15% 60%, #C9A84C, transparent 50%), radial-gradient(circle at 85% 20%, #C9A84C, transparent 45%)",
      }} />

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: "52px", padding: "0 32px" }}>
        <p style={{
          fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "5px",
          color: "#C9A84C", textTransform: "uppercase", marginBottom: "18px", opacity: 0.8,
        }}>Our Locations</p>

        <div className="gold-line" style={{ marginBottom: "22px" }} />

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 300, color: "#f5f0e8",
          letterSpacing: "2px", lineHeight: 1.15, margin: "0 0 14px",
        }}>
          Visit a <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Showroom</em>
        </h2>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "16px",
          color: "rgba(255,255,255,0.32)", fontWeight: 300,
          maxWidth: "420px", margin: "0 auto 36px", letterSpacing: "0.3px",
        }}>
          Experience our curated collection of luxury lighting in person, across Oman and the UAE.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => { setActiveFilter(f); setActiveIdx(0); setTimeout(() => trackRef.current?.scrollTo({ left: 0, behavior: "smooth" }), 10); }}
            >{f}</button>
          ))}
        </div>
      </div>

      {/* ── Scroll Track ── */}
      <div style={{ position: "relative" }}>
        <div className="fade-edge-l" />
        <div className="fade-edge-r" />

        <div
          className="fs-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {filtered.map((showroom) => (
            <div
              key={showroom.id}
              className={`fs-card ${showroom.isDistributor ? "distributor-card" : ""}`}
              onMouseEnter={() => setHovered(showroom.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  className="fs-card-img"
                  src={showroom.bg}
                  alt={showroom.name}
                  draggable={false}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.58) saturate(0.6)",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.93) 100%)",
                }} />
                <div style={{ position: "absolute", top: "13px", left: "13px" }}>
                  {showroom.isDistributor
                    ? <span className="distributor-badge">{showroom.tag}</span>
                    : <span className="showroom-tag">{showroom.tag}</span>}
                </div>
                <div style={{ position: "absolute", top: "11px", right: "13px", fontSize: "20px", lineHeight: 1 }}>
                  {showroom.flag}
                </div>
              </div>

              {/* Body */}
              <div className="fs-card-body" style={{ padding: "18px 18px 16px" }}>
                {showroom.isDistributor && <span className="distributor-label">Authorized Distributor</span>}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px", fontWeight: 500,
                  color: "#f0ead6", letterSpacing: "0.3px",
                  margin: "0 0 6px", lineHeight: 1.2,
                }}>
                  {showroom.name}
                </h3>
                <div style={{
                  width: "26px", height: "1px",
                  background: "linear-gradient(90deg, #C9A84C, transparent)",
                  marginBottom: "13px",
                }} />
                <div className="info-row"><PinIcon /><span>{showroom.location}</span></div>
                <div className="info-row"><PhoneIcon /><span>{showroom.phone}</span></div>
                <button
                  className="directions-btn"
                  onClick={() => handleGetDirections(showroom)}
                >
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Controls ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "18px", marginTop: "28px", padding: "0 32px",
      }}>
        <button className="dir-btn" onClick={() => scrollTo(activeIdx - 1)} disabled={activeIdx === 0}>
          <ChevronIcon dir="left" />
        </button>

        <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
          {filtered.map((s, i) => (
            <div
              key={s.id}
              className={`progress-pip ${i === activeIdx ? "active" : ""}`}
              style={{ width: i === activeIdx ? "36px" : "18px" }}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>

        <button className="dir-btn" onClick={() => scrollTo(activeIdx + 1)} disabled={activeIdx >= filtered.length - 1}>
          <ChevronIcon dir="right" />
        </button>
      </div>

      {/* Footer */}
      
    </section>
  );
}