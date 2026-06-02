import { useEffect, useRef, useState } from "react";
import "./ClientSection.css";

import ADNOC from "../assets/Clients/ADNOC.png";
import SEWA from "../assets/Clients/SEWA.jpg";
import Alghurair from "../assets/Clients/Alghurair.jpg";
import AASA from "../assets/Clients/aasa.jpg";
import BAHI from "../assets/Clients/BAHI.jpg";
import BNH from "../assets/Clients/BNH.png";
import Doubletree from "../assets/Clients/Doubletree.jpg";
import Hilton from "../assets/Clients/hilton.jpg";
import Khansaheb from "../assets/Clients/Khansaheb.jpg";
import Marriott from "../assets/Clients/Marriott.jpg";
import Mutakamila from "../assets/Clients/mutakamila.jpg";
import PremierInn from "../assets/Clients/premier_inn.jpg";

const stats = [
  { value: 4000, suffix: "+", label: "Happy Clients" },
  { value: 240, suffix: "+", label: "Projects Completed" },
  { value: 20,  suffix: "",  label: "Years of Excellence" },
  { value: 3,  suffix: "",  label: "Countries Served" },
];

const clients = [
  { name: "ADNOC",        img: ADNOC },
  { name: "SEWA",         img: SEWA },
  { name: "Al Ghurair",   img: Alghurair },
  { name: "AASA",         img: AASA },
  { name: "BAHI",         img: BAHI },
  { name: "BNH",          img: BNH },
  { name: "DoubleTree",   img: Doubletree },
  { name: "Hilton",       img: Hilton },
  { name: "Khansaheb",    img: Khansaheb },
  { name: "Marriott",     img: Marriott },
  { name: "Mutakamila",   img: Mutakamila },
  { name: "Premier Inn",  img: PremierInn },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, animate }) {
  const count = useCountUp(value, 1600, animate);
  return (
    <div className="stat-card">
      <div className="stat-value">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function ClientsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="clients-section" ref={sectionRef}>
      <div className="clients-grain" />
      <div className="clients-divider-top" />

      <div className={`clients-inner ${visible ? "clients-visible" : ""}`}>

        {/* ── Header ── */}
        <div className="clients-header">
          <p className="clients-eyebrow">Trusted By</p>
          <h2 className="clients-title">
            The Names Behind<br />
            <span className="clients-title-gold">Our Light</span>
          </h2>
          <p className="clients-subtitle">
            From iconic towers to private estates — world-class clients trust us to shape their spaces.
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="stats-row">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} animate={visible} />
          ))}
        </div>

        {/* ── Gold divider ── */}
        <div className="clients-rule">
          <span className="clients-rule-line" />
          <span className="clients-rule-diamond" />
          <span className="clients-rule-line" />
        </div>

        {/* ── Logo grid ── */}
        <div className="logos-grid">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="logo-card"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="logo-img-wrap">
                <img src={client.img} alt={client.name} className="logo-img" />
              </div>
              <div className="logo-name">{client.name}</div>
            </div>
          ))}
        </div>

        {/* ── Marquee strip ── */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="marquee-item">
                <img src={c.img} alt={c.name} className="marquee-logo" />
                <span className="marquee-name">{c.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="clients-divider-bottom" />
    </section>
  );
}