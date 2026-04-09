import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<div className="container mx-auto py-20 text-center text-slate-500">Search Page (Coming Soon)</div>} />
          <Route path="/compare" element={<div className="container mx-auto py-20 text-center text-slate-500">Comparison Engine (Coming Soon)</div>} />
          <Route path="/verification" element={<div className="container mx-auto py-20 text-center text-slate-500">Travel Verification (Coming Soon)</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
