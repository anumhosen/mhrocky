import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Publications = () => {
    const [publications, setPublications] = useState([]);
    useEffect(() => {
        const fetchCSVData = async () => {
            try {
                const response = await fetch(
                    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuYmxBIwMn3j202eiKh5wkbvl2w6a24mnJTUU_FyAuTaY2Wk7YvUX-cTjoisdCNrMgxVltyZl3Bn3S/pub?output=tsv'
                );
                const text = await response.text();
                // Parse TSV to JSON
                const rows = text.split('\n').map((row) => row.split('\t'));
                console.log(rows);

                setPublications(rows);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchCSVData();
    }, []);

    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center py-16 bg-[#081826] text-white mb-4'>
                Publications
            </div>
            <div className='grid grid-cols-1 gap-4'>
                {publications.slice(1).map((pub, index) => (
                    <Link to={pub[0]} target='_blank' key={index}>
                        <div className='sm:flex gap-4 sm:border border-b border-gray-400 sm:rounded-xl p-4 sm:shadow-md shadow-gray-400'>
                            <img src={pub[3]} className='max-w-40 max-h-40 mx-auto mb-4 sm:mb-0' />
                            <div>
                                <h1 className='font-bold text-xl text-justify'>{pub[1]}</h1>
                                <p className='text-justify'>{pub[2]}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Publications;
