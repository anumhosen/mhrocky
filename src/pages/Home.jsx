import Rocky from '../assets/rocky.png';
const Home = () => {
    return (
        <div className="w-[75%]">
            <div className="flex justify-between p-16">
                <div>
                    <p className="text-3xl font-black">Mahabub Hasan Rocky</p>
                    <p>Physics, Researcher, Hard Work</p>
                </div>
                <div>
                    <img src={Rocky} alt="Mahabub Hasan Rocky" className="w-32 h-32 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Home;
