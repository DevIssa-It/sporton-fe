import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero-section" className="relative container mx-auto h-[90vh] flex px-10">
            <div className="relative self-center">
                <Image 
                    src="/image/img-basketball.svg"
                    alt="basketball-bg"
                    width={432}
                    height={423}
                    className="grayscale absolute left-5 -top-15"
                />
                <div className="w-full relative ml-40 self-center">
                    <div className="text-primary italic">Friday Sale, 50%</div>
                    <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b from-black to-[#979797D1] bg-clip-text text-transparent leading-tight">
                        WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
                    </h1>
                    <p className="w-1/2 mt-6 leading-relaxed">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
                    </p>
                    <div className="flex gap-5 mt-8">
                        <Button>
                            Explore More <FiFastForward />
                        </Button>
                        <Button variant="ghost">
                            Watch Video <Image src="/image/icon-play-video.svg" alt="icon play video" width={29} height={29} />
                        </Button>
                    </div>
                </div>
                <Image 
                    src="/image/img-hero.svg" 
                    alt="hero image" 
                    width={650} 
                    height={750}
                    className="absolute -right-1 top-1/2 -translate-y-1/2" 
                />
            </div>
            <Image 
                src="/image/img-ornament-hero.svg" 
                alt="ornament" 
                width={320} 
                height={320}
                className="absolute -right-50 top-1/3 -translate-y-1/2"
            />
        </section>
    );
};

export default HeroSection;