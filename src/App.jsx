import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Publications from './pages/Publications';
import EducationalBackground from './pages/EducationalBackground';
import TeachingExperience from './pages/TeachingExperience';
import ResearchExperience from './pages/ResearchExperience';
import Conferences from './pages/Conferences';
import TechnicalSkills from './pages/TechnicalSkills';
import References from './pages/References';
import Contacts from './pages/Contacts';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/educational-background' element={<EducationalBackground />} />
                <Route path='/teaching-experience' element={<TeachingExperience />} />
                <Route path='/research-experience' element={<ResearchExperience />} />
                <Route path='/publications' element={<Publications />} />
                <Route path='/conferences' element={<Conferences />} />
                <Route path='/technical-skills' element={<TechnicalSkills />} />
                <Route path='/references' element={<References />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
