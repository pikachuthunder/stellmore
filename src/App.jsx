import './bootstrap.min.css'
import Header from './pages/Headers'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from "./pages/Projects"
import Indoor from "./pages/indoor"
import Outdoor from "./pages/Outdoor"
import Industrial from './pages/industrial'
import DownloadsPage from "./pages/Downloads"
import AboutUsPage from "./pages/Aboutus"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"                   element={<Home />} />
        <Route path="/projects"           element={<Projects />} />
        <Route path="/indoor-lighting"    element={<Indoor />} />
        <Route path="/outdoor-lighting"   element={<Outdoor />} />
        <Route path="/industrial-lighting" element={<Industrial />} />
        <Route path="/downloads"          element={<DownloadsPage />} />
        <Route path="/about"              element={<AboutUsPage />} />
      </Routes>
    </>
  )
}

export default App