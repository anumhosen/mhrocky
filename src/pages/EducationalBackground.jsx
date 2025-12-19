import { useState, useEffect } from 'react';

const EducationalBackground = () => {
    const [educations, setEducations] = useState([]);
    useEffect(() => {
        const fetchCSVData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTMCEGsHqKn_c_EpXYXlEFdJdPL18SqDoweCaQ2ZFyefr564DFvd5qxDuoJy7KfqdgWHknB0MABbYnN/pub?gid=0&single=true&output=tsv'
                );
                const text = await response.text();
                // Parse TSV to JSON
                const rows = text.split('\n').map((row) => row.split('\t'));
                console.log(rows);

                setEducations(rows);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchCSVData();
    }, []);
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center py-16 bg-[#081826] text-white mb-8'>
                Educational Background
            </div>
            <div className='sm:w-[80%] mx-auto space-y-8 text-center sm:text-left'>
                {educations.slice(1).map((edu, index) => (
                    <div key={index} className='sm:flex items-center'>
                        <img
                            src={edu[3]}
                            alt='Institute Logo'
                            className='max-w-28 sm:mr-8 sm:ml-0 mx-auto'
                        />
                        <div>
                            <p className='text-xl'>{edu[0]}</p>
                            <p className='text-xl'>{edu[1]}</p>
                            <p className='font-semibold italic'>{edu[2]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationalBackground;
