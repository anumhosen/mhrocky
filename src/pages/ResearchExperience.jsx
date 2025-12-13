import { Link } from 'react-router-dom';

const ResearchExperience = () => {
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8'>
                Research Experience
            </div>
            <div className='lg:w-[80%] mx-auto space-y-8 text-center sm:text-left'>
                <Link
                    to='https://mta-phy.github.io/cmp-lab-just/members.html'
                    target='_blank'
                    className='sm:flex block items-center p-8 sm:border border-gray-400 rounded-lg sm:shadow-md shadow-gray-300'
                >
                    <img src='/cmplab.jpeg' alt='CMP LAB' className='w-28 h-24 sm:mr-8 sm:ml-0 mx-auto' />
                    <div className='w-full'>
                        <p className='font-semibold text-xl'>Condensed Matter Physics Lab</p>
                        <p>Department of Physics</p>
                        <p className='text-xl'>Jashore University of Science and Technology</p>
                        <p>(Febury 2022 - Present)</p>
                        <p className='font-semibold italic'>Bangladesh</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ResearchExperience;
