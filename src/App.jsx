import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import ContactPage from './pages/ContactPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'

function App() {
  return (
    <div className="bg-ku-navy text-ku-cream">
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
