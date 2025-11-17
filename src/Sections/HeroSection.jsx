import MiniSlider from "../Components/MiniSlider";
import MiniSlider2 from "../Components/MiniSlider2";
import Slider from "../Components/Slider";

const HeroSection = () => {
    return (
        <div>
            <div className="lg:grid lg:grid-cols-9 gap-6  w-full">
                <div className="col-span-6"> <Slider /></div>
                <div className="lg:col-span-3 mt-4 lg:mt-0 w-full flex flex-row md:flex-col gap-4 ">
                    <MiniSlider />
                    <MiniSlider2 />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;