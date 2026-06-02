import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectSection.css";
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
import alesayi from '../assets/Projects/alesayi.jpeg'

const projects = [
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
       id: 13,
       title: "AleSayi Dental Clinic",
       category: "Commercial",
       location: "Sharjah, UAE",
       year: "2021",
       description:
         "Outdoor architectural lighting integrating pool, landscape, and facade zones seamlessly.",
       image: alesayi,
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
  
];

const categories = ["All", "Commercial", "Residential", "Hospitality", "Landscape"];

export default function ProjectsSection() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="projects-grain" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className={`projects-inner ${visible ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="projects-header">
          <p className="projects-eyebrow">Our Portfolio</p>
          <h2 className="projects-title">
            Illuminated<br />
            <span className="projects-title-gold">Masterworks</span>
          </h2>
          <p className="projects-subtitle">
            Every space tells a story. We write ours in light.
          </p>
        </div>

        {/* Filters */}
        {/* <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${visible ? "card-visible" : ""}`}
              style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-image-wrap">
                <img src={project.image} alt={project.title} className="card-image" />
                {/* <div className="card-image-overlay" /> */}
                <div className={`card-shine ${hoveredId === project.id ? "card-shine--active" : ""}`} />
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{project.category}</span>
                  {/* <span className="card-year">{project.year}</span> */}
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-location">
                  <span className="location-dot" />
                  {project.location}
                </p>
                {/* <p className="card-description">{project.description}</p> */}
                <div className="card-cta">
                  {/* <span>View Project</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

              <div className="card-border" />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="projects-footer">
          <button className="all-projects-btn" onClick={() => navigate("/projects")}>
            <span>Explore All Projects</span>
            <div className="btn-glow" />
          </button>
        </div>
      </div>
    </section>
  );
}