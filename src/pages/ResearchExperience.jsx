import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResearchExperience = () => {
    const [research, setResearch] = useState([]);
    useEffect(() => {
        const fetchCSVData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJw4B6G7w0idJrtMQgYJJZopKJqyQJOzYgNBMi8GoE0Knu7QTrY4BiRMruGozkW-w7Nz9U3XErpw38/pub?gid=0&single=true&output=tsv'
                );
                const text = await response.text();
                // Parse TSV to JSON
                const rows = text.split('\n').map((row) => row.split('\t'));
                setResearch(rows);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchCSVData();
    }, []);
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8'>
                Research Experience
            </div>
            <div className='lg:w-[80%] mx-auto space-y-8 text-center sm:text-left'>
                {research.slice(1).map((res, index) => (
                    <Link to={res[1]} target='_blank' key={index}>
                        <div className='sm:flex items-center p-8 sm:border border-gray-400 rounded-lg sm:shadow-md shadow-gray-300'>
                            <img src={res[7]} alt={res[0]} className='w-28 h-24 sm:mr-8 mx-auto' />
                            <div className='w-full'>
                                <p className='font-semibold text-xl'>{res[0]}</p>
                                <p>{res[2]}</p>
                                <p>{res[3]}</p>
                                <p className='text-xl'>{res[4]}</p>
                                <p>{res[5]}</p>
                                <p className='font-semibold italic'>{res[6]}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResearchExperience;
