import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="container max-w-6xl mx-auto"></div> */}
      <Header />
      <HeroSection />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-primary w-full">
      <MaxWidthWrapper>
        <h1 className="font-rye text-4xl text-white px-4 py-2">MANZZARI</h1>
      </MaxWidthWrapper>
    </header>
  );
}

function HeroSection() {
  return (
    <MaxWidthWrapper className="my-10 h-[60vh] max-w-5xl">
      <div className="flex items-center justify-between max-md:flex-col">
        <div className="w-full md:w-3/5 flex flex-col items-start gap-4 px-2">
          <h3 className="text-3xl font-bold w-3/5 leading-relaxed">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h3>
          <p className="text-primary w-3/4">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="text-white bg-primary px-8 py-1 rounded-md">
            Explore Now
          </button>
        </div>
        <div className="">
          <Image
            src={"/hero.png"}
            alt="hero image"
            className="object-cover rounded-tl-[80px] rounded-br-[80px]"
            width={350}
            height={350}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
