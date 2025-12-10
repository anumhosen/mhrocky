import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Publications from './pages/Publications';
import EducationalBackground from './pages/EducationalBackground';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="md:ml-[25%]">
                <Routes>
                    <Route path="*" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/educational-background" element={<EducationalBackground />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
