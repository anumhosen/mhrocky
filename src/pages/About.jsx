import Rocky from '../assets/rocky.png';
import bg from '../assets/bg.jpg';

const About = () => {
    const bgstyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="w-full">
            <div className="block sm:flex justify-between sm:px-16 py-16 text-white" style={bgstyle}>
                <div className='text-center sm:text-left'>
                    <p className="text-3xl font-black">Mahabub Hasan Rocky</p>
                    <p className='text-xl'>Physics, Researcher, Hard Work</p>
                </div>
                <div>
                    <img src={Rocky} alt="Mahabub Hasan Rocky" className="w-32 h-32 mx-auto mt-8 sm:mt-0 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default About;
