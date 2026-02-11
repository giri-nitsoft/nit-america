import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Messaging from './pages/Messaging'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'
import Messaging2 from './pages/Messaging2'

function App() {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/messaging" element={<Messaging />} />
                    <Route path="/licensing" element={<Licensing />} />
                    <Route path="/messaging2" element={<Messaging2 />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
