import { FaPython, FaUbuntu, FaWindows } from 'react-icons/fa6';
import { SiC } from 'react-icons/si';
import { RiFileWord2Fill, RiFileExcel2Fill, RiFilePpt2Fill } from 'react-icons/ri';


const MaterialStudioIcon = () => {
    return <img src='/material-studio.png' className='w-10 h-10' />;
};

const CESTEPIcon = () => {
    return <img src='/castep-02.png' className='w-40 h-10' />;
};

const OriginIcon = () => {
    return <img src='/origin.png' className='w-10 h-10' />;
};

const MendeleyIcon = () => {
    return <img src='/mendeley.png ' className='w-12 h-12 bg-black p-2 rounded-md' />;
};

const VMDIcon = () => {
    return <img src='/vmd.gif' className='w-20 h-14 rounded-md' />;
};
const FaMatlab = () => {
    return <img src='./icons8-matlab-50.png' className='w-10 h-10' />;
};

const FaMechineLearning = () => {
    return <img src='/brain.png' className='w-10 h-10' />;
};

const TechnicalSkills = () => {
    const skils = [
        {
            name: 'Python',
            icon: <FaPython />,
        },
        {
            name: 'C Programming',
            icon: <SiC />,
        },
        {
            name: 'Mechine Learning',
            icon: <FaMechineLearning />,
        },
        {
            name: 'Matlab',
            icon: <FaMatlab />,
        },
        {
            name: 'Windows',
            icon: <FaWindows />,
        },
        {
            name: 'Linux Ubuntu',
            icon: <FaUbuntu />,
        },
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
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8'>
                Technical Skills
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 sm:gap-8'>
                {skils.map((skil, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center p-8 space-y-4 sm:border border-b border-gray-400 sm:rounded-lg sm:shadow-md shadow-gray-300'
                    >
                        <div className='text-5xl'>{skil.icon}</div>
                        <div className='text-2xl text-center'>{skil.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;
