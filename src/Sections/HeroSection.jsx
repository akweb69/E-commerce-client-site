import Slider from "../Components/Slider";

const HeroSection = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-9 gap-6  w-full">
                <div className="col-span-6"> <Slider /></div>
                <div className="col-span-3 w-fit h-full p-6 bg-white">

                </div>
            </div>
        </div>
    );
};

export default HeroSection;