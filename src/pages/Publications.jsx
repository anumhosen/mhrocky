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
    ];
    return (
        <div className="sm:p-8">
            <div className="text-4xl font-bold text-center p-8 bg-gray-800 text-white mb-8">Publications</div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {publications.map((pub, index) => (
                    <Link to={pub.doi} target="_blank" key={index}>
                        <div className="sm:border border-b sm:rounded-xl p-8">
                            <img src={pub.img} className="mx-auto mb-8" />
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
