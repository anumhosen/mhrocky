import React from 'react';

const Conferences = () => {
    return (
        <div className="sm:p-8">
            <div className="text-4xl font-bold text-center px-8 py-16 bg-[#081826] text-white mb-8">
                Conferences
            </div>
            <div className="sm:w-[80%] mx-auto space-y-8 text-center sm:text-left">
                <div className="sm:flex items-center">
                    <img
                        src="https://phy.just.edu.bd/img/just.jpg"
                        alt="JUST"
                        className="w-26 h-24 sm:mr-8 mx-auto"
                    />
                    <div>
                        <p className="text-xl">
                            Symposium on Technological Challenges and Possible Solutions for Power
                            and Energy in Bangladesh, Poster presentation: An AbInitio Study of
                            S-doped Penta-Graphenefor Oxygen-based Toxic Gas Sensing Application in
                            Power and Energy Industry.
                        </p>
                        <p className="text-xl">
                            Jashore University of Science & Technology (2023 - 2025)
                        </p>
                        <p className="font-semibold italic">Bangladesh</p>
                    </div>
                </div>
                <div className="sm:flex items-center">
                    <img
                        src="https://phy.just.edu.bd/img/just.jpg"
                        alt="JUST"
                        className="w-26 h-24 sm:mr-8 mx-auto"
                    />
                    <div>
                        <p className="text-xl">
                            1stNational Conference on Physics for the Future: Exploring Matter,
                            Energy, Life, and Cosmos, Poster Presentation: An AbInitio Study of
                            S-doped Penta-Graphenefor Oxygen-based Toxic Gas Sensing Application.
                        </p>
                        <p className="text-xl">
                            Jashore University of Science & Technology (2023 - 2025)
                        </p>
                        <p className="font-semibold italic">Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conferences;
