import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import bahi_ajman from '../assets/Projects/Bahi_ajman.jpg';
import Builtmore from'../assets/Projects/Builtmore.jpeg';
import JSTower from '../assets/Projects/JSTower.jpeg';
import marriot from '../assets/Projects/marriot.jpg';
import primier_inn from '../assets/Projects/primier_inn.jpg';
import Mutakamil from '../assets/Projects/Qusais.jpeg';
import indus from '../assets/Projects/indus.jpeg';
import alshamali from '../assets/Projects/alshamali.jpeg'
import BrightArrows from '../assets/Projects/BrightArrows.jpeg'
import majan from '../assets/Projects/majan .jpeg';
import double_tree from '../assets/Projects/double_tree.jpg'
import star_metro from '../assets/Projects/star_metro.jpg'
import alesayi from '../assets/Projects/alesayi.jpeg';

const allProjects = [
  {
    id: 1,
    title: "Bahi Ajman",
    category: "Hospitality",
    location: "Ajman, UAE",
    image: bahi_ajman
  },
  {
    id: 2,
    title: "BiltMore",
    category: "Landscape",
    location: "Dubai, UAE",
    year: "2024",
    description:
      "Bespoke chandelier design and smart ambient lighting for a 12,000 sqft private villa.",
    image: Builtmore,
  },
  {
    id: 3,
    title: "JS Towers",
    category: "Residential",
    location: "Dubai, UAE",
    year: "2023",
    description:
      "Sculptural pendant installations and gallery-grade track lighting across 6 exhibition halls.",
    image: JSTower,
  },
  {
    id: 4,
    title: "Marriot",
    category: "Hospitality",
    location: "Dubai, UAE",
    year: "2023",
    description:
      "2.4km of waterfront lighting blending architectural bollards with submerged aquatic fixtures.",
    image: marriot,
  },
  {
    id: 5,
    title: "Primier Inn",
    category: "Hospitality",
    location: "Dubai, UAE",
    year: "2023",
    description:
      "Kinetic light canopy with 860 programmable nodes creating dynamic sky simulations.",
    image: primier_inn,
  },
  {
    id: 6,
    title: "Mutakamila",
    category: "Commercial",
    location: "Dubai, UAE",
    year: "2022",
    description:
      "Intimate layered lighting concept merging warm filament glows with precision accent beams.",
    image: Mutakamil,
  },
  {
    id: 7,
    title: "Indus",
    category: "Commercial",
    location: "Dubai, UAE",
    year: "2022",
    description:
      "Layered garden path lighting with moonlighting techniques through mature tree canopies.",
    image: indus,
  },
  {
    id: 8,
    title: "ALShamali",
    category: "Commercial",
    location: "Dubai, UAE",
    year: "2022",
    description:
      "Statement ceiling installation with 1,200 hand-blown glass orbs at varying drop heights.",
    image: alshamali,
  },
  {
    id: 9,
    title: "SunTek Al Ghurair",
    category: "Commercial",
    location: "Dubai, UAE",
    year: "2021",
    description:
      "Outdoor architectural lighting integrating pool, landscape, and facade zones seamlessly.",
    image: BrightArrows,
  },
  {
    id: 10,
    title: "Majan Tower",
    category: "Landscape",
    location: "Dubai, UAE",
    year: "2021",
    description:
      "Outdoor architectural lighting integrating pool, landscape, and facade zones seamlessly.",
    image: majan,
  },
   {
    id: 11,
    title: "Double Tree",
    category: "Hospitality",
    location: "RAK, UAE",
    year: "2021",
    description:
      "Outdoor architectural lighting integrating pool, landscape, and facade zones seamlessly.",
    image: double_tree,
  },
  {
    id: 12,
    title: "Star Metro Hotel",
    category: "Hospitality",
    location: "Dubai, UAE",
    year: "2021",
    description:
      "Outdoor architectural lighting integrating pool, landscape, and facade zones seamlessly.",
    image: star_metro,
  },
  {
    id: 13,
    title: "AleSayi Dental Clinic",
    category: "Commercial",
    location: "Sharjah, UAE",
    year: "2021",
    description:
      "Outdoor architectural lighting integrating pool, landscape, and facade zones seamlessly.",
    image: alesayi,
  },
];

const categories = ["All", "Commercial", "Residential", "Hospitality", "Landscape"];

export default function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filtered = allProjects.filter((p) => {
    const matchCat = activeFilter === "All" || p.category === activeFilter;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pg-root">
      <div className="pg-grain" />
      <div className="pg-orb pg-orb-1" />
      <div className="pg-orb pg-orb-2" />

      {/* ── Back button ── */}
      <button className="pg-back" onClick={() => navigate(-1)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M13 8H3M3 8L7 4M3 8L7 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Back</span>
      </button>

      <div className={`pg-inner ${visible ? "pg-visible" : ""}`}>

        {/* ── Hero Header ── */}
        <header className="pg-hero" ref={headerRef}>
          <p className="pg-eyebrow">Complete Portfolio</p>
          <h1 className="pg-title">
            All <span className="pg-title-gold">Projects</span>
          </h1>
          <p className="pg-subtitle">
            {allProjects.length} projects spanning commercial, residential, hospitality &amp; landscape.
          </p>

          {/* Search */}
          <div className="pg-search-wrap">
            <svg className="pg-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <input
              className="pg-search"
              type="text"
              placeholder="Search by title or location…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        {/* ── Filters ── */}
        <div className="pg-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pg-filter-btn ${activeFilter === cat ? "pg-filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              <span className="pg-filter-count">
                {cat === "All"
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Results count ── */}
        <p className="pg-results-count">
          Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? "s" : ""}
          {activeFilter !== "All" && ` in ${activeFilter}`}
          {search && ` matching "${search}"`}
        </p>

        {/* ── Grid ── */}
        {filtered.length > 0 ? (
          <div className="pg-grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="pg-card"
                style={{ animationDelay: `${i * 0.07}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="pg-card-img-wrap">
                  <img src={project.image} alt={project.title} className="pg-card-img" />
                  <div className="pg-card-overlay" />
                  <div className={`pg-card-shine ${hoveredId === project.id ? "pg-card-shine--on" : ""}`} />
                  <span className="pg-card-badge">{project.category}</span>
                </div>

                <div className="pg-card-body">
                  <div className="pg-card-top">
                    <h3 className="pg-card-title">{project.title}</h3>
                    {/* <span className="pg-card-year">{project.year}</span> */}
                  </div>
                  <p className="pg-card-loc">
                    <span className="pg-loc-dot" />
                    {project.location}
                  </p>
                  {/* <p className="pg-card-desc">{project.description}</p> */}
                  <div className="pg-card-cta">
                    {/* <span>View Details</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                </div>

                <div className="pg-card-line" />
              </div>
            ))}
          </div>
        ) : (
          <div className="pg-empty">
            <p>No projects found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}