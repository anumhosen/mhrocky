const EducationalBackground = () => {
    return (
        <div className='md:ml-[25%] sm:p-8'>
            <div className='text-4xl font-bold text-center py-16 bg-[#081826] text-white mb-8'>
                Educational Background
            </div>
            <div className='sm:w-[80%] mx-auto space-y-8 text-center sm:text-left'>
                <div className='sm:flex items-center'>
                    <img
                        src='https://phy.just.edu.bd/img/just.jpg'
                        alt='JUST'
                        className='w-26 h-24 sm:mr-8 sm:ml-0 mx-auto'
                    />
                    <div>
                        <p className='text-xl'>M.Sc. (Physics)</p>
                        <p className='text-xl'>
                            Jashore University of Science & Technology (2023 - Present)
                        </p>
                        <p className='font-semibold italic'>Bangladesh</p>
                    </div>
                </div>
                <div className='sm:flex items-center'>
                    <img
                        src='https://phy.just.edu.bd/img/just.jpg'
                        alt='JUST'
                        className='w-26 h-24 sm:mr-8 sm:ml-0 mx-auto'
                    />
                    <div>
                        <p className='text-xl'>B.Sc. (Physics)</p>
                        <p className='text-xl'>
                            Jashore University of Science & Technology (2019 - 2022)
                        </p>
                        <p className='font-semibold italic'>Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalBackground;
