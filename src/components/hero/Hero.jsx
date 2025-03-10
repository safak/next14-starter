import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:flex gap-[2rem] w-full">
      <section className="flex flex-1 flex-col gap-10 items-center lg:items-start">
        <div className="contents text-center lg:text-left">
          <h1 className="text-6xl/20 md:text-8xl/30 font-bold">
            Creative Thoughts Agency.
          </h1>
          <p>
            Building the future of web applications and digital experiences with
            the latest cutting edge technologies.
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm font-medium">
          <Link
            href="/about"
            className="px-4.5 py-3.5 bg-txt-btn cursor-pointer border-none rounded-md min-w-32 hover:bg-blue-600 text-center"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="px-4.5 py-3.5 min-w-32 bg-txt text-primary-soft cursor-pointer border-none rounded-md hover:bg-gray-200 text-center"
          >
            Contact
          </Link>
        </div>

        <div className="h-[60px] w-[85%] lg:w-full relative ml-auto lg:ml-0">
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className="object-contain lg:object-left grayscale"
          />
        </div>
      </section>

      <section className="hidden flex-1 lg:flex relative h-full w-1/2">
        <Image
          src="/hero.gif"
          fill
          alt="hero gif"
          className="object-fill xl:object-contain"
        />
      </section>
    </div>
  );
}
