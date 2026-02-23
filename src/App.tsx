import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Messaging from './pages/Messaging'
import Mail from './pages/Messaging/Mail'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'
import Messaging2 from './pages/Messaging2'
import Team from './pages/Team'

import Home2 from './pages/Home2'

function App() {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home2 />} />
                <Route path="*" element={
                    <>
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/home2" element={<Home />} />
                                <Route path="/messaging" element={<Messaging />} />
                                <Route path="/mail" element={<Mail />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/licensing" element={<Licensing />} />
                                <Route path="/messaging2" element={<Messaging2 />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </main>
                        <Footer />
                    </>
                } />
            </Routes>
        </div>
    )
}

export default App
