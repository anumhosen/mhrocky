import { RiFileWord2Fill, RiFileExcel2Fill, RiFilePpt2Fill } from 'react-icons/ri';
import MaterialStudio from '../assets/material-studio.png';
import CESTEP from '../assets/castep-02.png';
import Origin from '../assets/origin.png';
import Mendeley from '../assets/mendeley.png';
import VMD from '../assets/vmd.gif';

const MaterialStudioIcon = () => {
    return <img src={MaterialStudio} className="w-10 h-10" />;
};

const CESTEPIcon = () => {
    return <img src={CESTEP} className="w-40 h-10" />;
};

const OriginIcon = () => {
    return <img src={Origin} className="w-10 h-10" />;
};

const MendeleyIcon = () => {
    return <img src={Mendeley} className="w-12 h-12 bg-black p-2 rounded-md" />;
};

const VMDIcon = () => {
    return <img src={VMD} className="w-20 h-14 rounded-md" />;
};

const MiscellaneousExperience = () => {
    const experiences = [
        {
            name: 'Material Studio',
            icon: <MaterialStudioIcon />,
        },
        {
            name: 'CESTEP',
            icon: <CESTEPIcon />,
        },
        {
            name: 'Origin',
            icon: <OriginIcon />,
        },
        {
            name: 'Mendeley',
            icon: <MendeleyIcon />,
        },
        {
            name: 'VMD (Visual Molecular Dynamics)',
            icon: <VMDIcon />,
        },
        {
            name: 'Microsoft Word',
            icon: <RiFileWord2Fill />,
        },
        {
            name: 'Microsoft Excle',
            icon: <RiFileExcel2Fill />,
        },
        {
            name: 'Microsoft Powerpoint',
            icon: <RiFilePpt2Fill />,
        },
    ];
    return (
        <div className="sm:p-8">
            <div className="text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8">
                Miscellaneous Experience
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 border border-gray-400 p-8 rounded-lg shadow-md shadow-gray-300">
                        <div className="text-5xl">{exp.icon}</div>
                        <div className="text-2xl">{exp.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiscellaneousExperience;
