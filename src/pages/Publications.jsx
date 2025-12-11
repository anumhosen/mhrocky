import { Link } from 'react-router-dom';

const Publications = () => {
    const publications = [
        {
            img: 'https://ars.els-cdn.com/content/image/1-s2.0-S2210271X24001786-ga1.jpg',
            title: 'A DFT study on boron carbon nitride and in-plane graphene-boron nitride nanosheets for O3 and F2 gas sensing',
            content:
                'In the industry era, nanostructures-based gas sensors have been more striking for environmental monitoring. In this research, we investigated the prop...',
            doi: 'https://doi.org/10.1016/j.comptc.2024.114639',
        },
        {
            img: 'https://ars.els-cdn.com/content/image/1-s2.0-S2210271X24003086-ga1.jpg',
            title: 'Ab initio study of Ti-doped C3N nanosheet as COCl2, O3, and HCN gas sensor',
            content:
                'In the present study, we designed the pristine C3N and Ti-doped C3N nanosheets to investigate the geometrical, electrical, and optical properties usin…',
            doi: 'https://doi.org/10.1016/j.comptc.2024.114769',
        },
        {
            img: 'https://chemistry-europe.onlinelibrary.wiley.com/cms/asset/78b68b32-533d-431d-a19a-5b54396d4b8f/open202400210-toc-0001-m.png',
            title: 'In the present study, we designed the pristine C3N and Ti-doped C3N nanosheets to investigate the geometrical, electrical, and optical properties usin…',
            content:
                'This study uses DFT calculations to explore the stability, electronic, and optical properties of MoSe2 and N-doped MoSe2 monolayers, highlighting their enhanced gas sensing potential after N-doping',
            doi: 'https://doi.org/10.1002/open.202400210',
        },
        {
            img: 'https://ars.els-cdn.com/content/image/1-s2.0-S025405842500923X-ga1.jpg',
            title: 'An ab initio study of S-doped penta-graphene for oxygen-based toxic gas sensing application',
            content:
                'In our modern age, toxic gases are becoming increasingly dangerous for the environment. Herein, by using density functional theory calculations, we explained the adsorption of COCl2, O3, and OF2 gas molecules on the penta-graphene (PG) and S-doped PG substrates...',
            doi: 'https://doi.org/10.1016/j.matchemphys.2025.131277',
        },
        {
            img: 'https://ars.els-cdn.com/content/image/1-s2.0-S0925963525007381-ga1.jpg',
            title: 'Ab Initio Study of Ge-doped Boron Carbon Nitride Nanosheet for CH2O and CNCl Gas Sensing',
            content:
                'The sensing properties of pristine and Ge-doped BCN to CH2O and CNCl gas molecules have been studied via first-principles calculations. Among these hexagonal structures, Ge-doped BCN reveals the maximum adsorption energy of about −0.530 eV when exposed to COCl2 gas molecules...',
            doi: 'https://doi.org/10.1016/j.diamond.2025.112681',
        },
        {
            img: 'https://content.cld.iop.org/journals/1402-4896/100/11/115942/revision1/psae1db6f4a_lr.jpg',
            title: 'First-principles study of CO, NO, and SO2 adsorption mechanisms on phosphorus-doped tetragonal boron nitride nanosheets for gas sensing applications',
            content:
                'With the rise of industrialization, nanostructure-based gas sensors have emerged as vital tools for environmental monitoring due to their high sensitivity and tunable properties. This research is motivated by the unique geometry of tetragonal boron nitride (TBN) and the ability of phosphorous (P) dopant to enhance the adsorption behavior...',
            doi: 'https://doi.org/10.1088/1402-4896/ae1db6',
        },
    ];
    return (
        <div className="sm:p-8">
            <div className="text-4xl font-bold text-center py-16 bg-[#081826] text-white mb-4">
                Publications
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {publications.map((pub, index) => (
                    <Link to={pub.doi} target="_blank" key={index}>
                        <div className="sm:border border-b border-gray-400 sm:rounded-xl p-4 sm:shadow-md shadow-gray-400">
                            <img src={pub.img} className="max-h-60 mx-auto mb-8" />
                            <h1 className="font-bold text-2xl">{pub.title}</h1>
                            <p>{pub.content}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Publications;
