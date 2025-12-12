import Rocky from '../assets/rocky.png';
import bg from '../assets/bg.jpg';
import ResearchGate from '../assets/researchgate.png';
import LinkedIn from '../assets/linkedin.png';
import GoogleScholar from '../assets/google-scholar.png';
import ORCID from '../assets/orcid.png';
import { Link } from 'react-router-dom';

const About = () => {
    const bgstyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="md:ml-[25%]">
            <div
                className="block sm:flex justify-between sm:px-16 py-16 text-white"
                style={bgstyle}
            >
                <div className="text-center sm:text-left">
                    <p className="text-3xl font-black">Mahabub Hasan Rocky</p>
                    <p className="text-xl">Physics, Researcher, Hard Work</p>
                </div>
                <div>
                    <img
                        src={Rocky}
                        alt="Mahabub Hasan Rocky"
                        className="w-32 h-32 mx-auto mt-8 sm:mt-0 rounded-full"
                    />
                </div>
            </div>

            <div className="sm:px-16 p-4 mx-auto space-y-4 text-justify">
                <p>
                    Mahabub Hasan Rocky was born in the Khulna district of Bangladesh. He completed
                    his SSC and HSC at Jhikargacha ML Model High School and Natunhat Public College,
                    Jashore, Dhaka, Bangladesh. He also completed his Bachelor's degree in physics
                    at Jashore University of Science and Technology. He is continuing his Master's
                    degree in physics at Jashore University of Science and Technology.
                </p>
                <p>
                    He is an earnest person who believes in hard work. He is keen to work with every
                    ever-changing dynamic workforce. He also has leadership qualities, management
                    skills, organization, and adaptability to any kind of unexpected challenges. He
                    is now working on a few scientific articles and looking forward to working on
                    versatile research opportunities. Research Interests: Nanomaterials, 2D sheets,
                    gas sensors.
                </p>
            </div>

            <div className="sm:px-16 p-4 mx-auto space-y-4 text-justify">
                <div className="text-2xl font-semibold italic">External Links</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 gap-4">
                    <Link
                        to="https://www.researchgate.net/profile/Mahabub-Rocky"
                        className="flex flex-col items-center p-4 space-y-4 border border-gray-400 rounded-md shadow-md shadow-gray-300 hover:text-blue-500"
                        target="_blank"
                    >
                        <img src={ResearchGate} className="w-12 h-12" alt="ResearchGate" />
                        <p>ResearchGate</p>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/mahabub-rocky/"
                        className="flex flex-col items-center p-4 space-y-4 border border-gray-400 rounded-md shadow-md shadow-gray-300 hover:text-blue-500"
                        target="_blank"
                    >
                        <img src={LinkedIn} className="w-12 h-12" alt="LinkedIn" />
                        <p>LinkedIn</p>
                    </Link>
                    <Link
                        to="https://scholar.google.com/citations?user=1PkIl-MAAAAJ&hl=en"
                        className="flex flex-col items-center p-4 space-y-4 border border-gray-400 rounded-md shadow-md shadow-gray-300 hover:text-blue-500"
                        target="_blank"
                    >
                        <img src={GoogleScholar} className="w-12 h-12" alt="Google Scholar" />
                        <p>Google Scholar</p>
                    </Link>
                    <Link
                        to="https://orcid.org/0009-0003-7903-3947"
                        className="flex flex-col items-center p-4 space-y-4 border border-gray-400 rounded-md shadow-md shadow-gray-300 hover:text-blue-500"
                        target="_blank"
                    >
                        <img src={ORCID} className="w-12 h-12" alt="ORCID" />
                        <p>ORCID</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
