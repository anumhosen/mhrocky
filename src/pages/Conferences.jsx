import { useState, useEffect } from 'react';

const Conferences = () => {
    const [conferences, setConferences] = useState([]);
    useEffect(() => {
        const fetchCSVData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFdb0VQKDsCs3Ea8GpEJhyxGpxi9Rgp5pyhL_lLM8lHbv3Lit9-f1We-8493xw9tz8qGAepQTig4B9/pub?gid=0&single=true&output=tsv'
                );
                const text = await response.text();
                // Parse TSV to JSON
                const rows = text.split('\n').map((row) => row.split('\t'));
                setConferences(rows);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchCSVData();
    }, []);
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8'>
                Conferences
            </div>
            <div className='sm:w-[80%] mx-auto space-y-8 text-center sm:text-left'>
                {conferences.slice(1).map((con, index) => (
                    <div key={index} className='sm:flex items-center'>
                        <img src={con[3]} alt={con[0]} className='w-26 h-24 sm:mr-8 mx-auto' />
                        <div>
                            <p className='text-xl font-semibold'>{con[0]}</p>
                            <p className='text-xl'>{con[1]}</p>
                            <p className='font-semibold italic'>{con[2]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Conferences;
