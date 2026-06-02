import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";
import architectural from '../assets/architectural.jpg';
import hero3 from '../assets/hero3.jpg';
import industrial from '../assets/industrial.jpg';
import controls from '../assets/controls.jpg';

const CATEGORIES = [
  { id: "architecture", label: "Indoor Lighting",    tagline: "Shape structures with light and precision.",          accent: "#c8a96e", img: architectural },
  { id: "outdoor",      label: "Outdoor Lighting",   tagline: "Command the night — pathways, facades, plazas.",      accent: "#82b89a", img: hero3 },
  { id: "industrial",   label: "Industrial Lighting", tagline: "Built for demanding, high-output environments.",      accent: "#c47a5a", img: industrial },
  { id: "controls",     label: "Lighting Controls",  tagline: "Precision dimming and smart scene management.",       accent: "#a07ec8", img: controls },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CategoriesSection({ onNavigate }) {
  const [visible, setVisible] = useState([false, false, false, false]);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => { const next = [...prev]; next[i] = true; return next; });
            }, i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleCardClick = useCallback((cat) => {
    if (cat.id === "architecture") {
      navigate("/indoor-lighting");
    } else if (cat.id === "outdoor") {
      navigate("/outdoor-lighting");
    } else if (cat.id === "industrial") {
      navigate("/industrial-lighting");
    // } else if (cat.id === "controls") {
    //   navigate("/lighting-controls");
    }
  }, [navigate]);

  return (
    <section id="product-section" className="categories-section">
      <div className="section-header">
        <div className="section-header-line" />
        <span className="section-header-label">Product Categories</span>
        <div className="section-header-line" />
      </div>

      <div className="categories-grid">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`cat-card${visible[i] ? " visible" : ""}`}
            style={{ "--accent": cat.accent, animationDelay: visible[i] ? `${i * 0.08}s` : "0s" }}
            onClick={() => handleCardClick(cat)}
          >
            <div className="cat-img-wrapper">
              <img className="cat-card-img" src={cat.img} alt={cat.label} />
            </div>
            <div className="cat-card-body">
              <div className="cat-card-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="cat-card-title">{cat.label}</div>
              <p className="cat-card-tagline">{cat.tagline}</p>
              <button className="cat-card-btn">Browse Products <ArrowIcon /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}