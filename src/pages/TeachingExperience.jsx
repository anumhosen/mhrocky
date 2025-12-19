import { useState, useEffect } from 'react';

const TeachingExperience = () => {
    const [teaching, setTeaching] = useState([]);
    useEffect(() => {
        const fetchCSVData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxrZ2zrqpVh2y_UE9yJ2qQhaIjBbS0ZXC3L8sZkte8LpE5azkPV-pL2YpH5s_iVcdFIxiF8u-evZLm/pub?gid=0&single=true&output=tsv'
                );
                const text = await response.text();
                // Parse TSV to JSON
                const rows = text.split('\n').map((row) => row.split('\t'));
                setTeaching(rows);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchCSVData();
    }, []);
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8'>
                Teaching Experience
            </div>
            <div className='sm:w-[80%] mx-auto space-y-8 text-center sm:text-left'>
                {teaching.slice(1).map((teach, index) => (
                    <div key={index} className='sm:flex items-center'>
                        <img src={teach[4]} alt={teach[0]} className='w-26 h-24 sm:mr-8 mx-auto' />
                        <div>
                            <p className='text-xl font-semibold'>{teach[0]}</p>
                            <p className='text-xl'>{teach[1]}</p>
                            <p>{teach[2]}</p>
                            <p className='font-semibold italic'>{teach[3]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeachingExperience;
