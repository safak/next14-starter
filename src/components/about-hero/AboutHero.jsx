import Image from "next/image";

export default function AboutHero() {
return (
    <div className="md:flex gap-[2rem] w-full">
        <section className="flex flex-1 flex-col gap-10 items-center lg:items-start">
            <div className="contents text-center lg:text-left">
                <h2 className="font-bold text-2xl text-txt-btn">About Agency</h2>
                <h1 className="text-5xl/15 md:text-6xl/18 font-bold">We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission we&#39;re world&#39;s Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
            </div>
            
            <div className="flex flex-col items-center gap-5 text-sm md:flex-row">
                <div className="flex flex-col items-center gap-2 lg:items-start">
                    <span className="font-bold text-3xl text-txt-btn">10 K+</span>
                    <span className="text-[1.2rem]">Year of experience</span>
                </div>
                <div className="flex flex-col items-center gap-2 lg:items-start">
                    <span className="font-bold text-3xl text-txt-btn">10 K+</span>
                    <span className="text-[1.2rem]">Year of experience</span>
                </div>
                <div className="flex flex-col items-center gap-2 lg:items-start">
                    <span className="font-bold text-3xl text-txt-btn">10 K+</span>
                    <span className="text-[1.1rem]">Year of experience</span>
                </div>
            </div>

        </section>

        <section className="hidden flex-1 lg:flex relative h-full w-1/2">
            <Image src="/about.png" fill alt="about"  className="object-contain"/>
        </section>

        
    </div>
);
}