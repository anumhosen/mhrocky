import React from 'react';

const TeachingExperience = () => {
    return (
        <div className="sm:p-8">
            <div className="text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8">
                Teaching Experience
            </div>
            <div className="sm:w-[80%] mx-auto space-y-8 text-center sm:text-left">
                <div className="sm:flex items-center">
                    <img
                        src="https://phy.just.edu.bd/img/just.jpg"
                        alt="JUST"
                        className="w-26 h-24 sm:mr-8 sm:ml-0 mx-auto"
                    />
                    <div>
                        <p className="text-xl">Lecturer in Physics</p>
                        <p className="text-xl">
                            Jashore University of Science and Technology School and College
                        </p>
                        <p>(September 2025 - Present)</p>
                        <p className="font-semibold italic">Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingExperience;
