import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoDesignernews } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <CourseCategorySection />
      <AchievementSection />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-off-white border-b-foreground border-b-2 ">
      <MaxWidthWrapper
        element={"header"}
        className="py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <span>Phone Number: 956 742 455 678</span>
          <div className="h-8 w-1 border-r border-foreground"></div>
          <span>Email:info@ddsgnr.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebookF size={24} />
          <FaInstagram size={24} />
          <FaTwitter size={24} />
          <FaLinkedin size={24} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-off-white border-b-foreground border-b-2 ">
      <MaxWidthWrapper
        element={"nav"}
        className="py-4 gap-32 flex items-center"
      >
        <div className="flex items-center gap-2 font-bold text-3xl">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <h1>Ddsgnr</h1>
        </div>
        <div className="bg-background flex items-center justify-between text-lg pl-2 w-full">
          <h2 className="cursor-pointer">Home</h2>
          <h2 className="cursor-pointer">Courses</h2>
          <h2 className="cursor-pointer">Services</h2>
          <h2 className="cursor-pointer">Achievement</h2>
          <h2 className="cursor-pointer">About Us</h2>
          <h2 className="cursor-pointer">Testemonials</h2>
          <button className="border-2 border-foreground rounded-lg px-6 py-2">
            Login
          </button>
          <button className="rounded-lg px-6 py-2 bg-foreground text-background">
            Sign Up
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function HeroSection() {
  return (
    <>
      <section className="w-full h-[100vh] flex items-center justify-between">
        <div className="px-40">
          <h1 className="text-6xl font-bold">
            Learn new skills online with ease
          </h1>
          <p className="text-lg py-10">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 text-background bg-foreground rounded-lg">
              Start Learning Now
            </button>
            <button className="px-8 py-4 border-2 border-foreground rounded-lg">
              Explore Courses
            </button>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={800}
          height={1000}
          className="-z-10"
        />
      </section>
      <section className="flex items-center justify-between bg-off-white py-12">
        <h1 className="text-2xl font-bold">
          Trusted by 2000+ companies worldwide.
        </h1>
        <div>
          <Image
            src={"/company_logos.png"}
            alt="company_logos"
            width={1200}
            height={1000}
          />
        </div>
      </section>
    </>
  );
}

function CourseCategorySection() {
  return (
    <section className="mt-28 flex flex-col">
      <div className="text-center space-y-4 py-4">
        <h2 className="font-bold text-5xl">Explore Courses By Category</h2>
        <p className="text-lg">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Design & Development</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Commnication</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Business</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Marketing</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Digital Marketing</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Finance</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Development</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Self Development</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-off-white px-4 py-2">
            <div className="bg-white rounded-lg">
              <IoLogoDesignernews size={30} className="m-6" />
            </div>
            <div className="flex flex-col py-3 rounded-lg p-8">
              <h5 className="font-bold text">Consulting</h5>
              <p className="text-sm">50+ Courses Available</p>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-foreground px-4 py-2 my-16 w-fit rounded-lg mx-auto">
        View All Courses
      </button>
    </section>
  );
}

function AchievementSection() {
  return (
    <MaxWidthWrapper element={"section"} className="mt-28 text-center">
      <h2 className="text-5xl font-bold">Our Achievements</h2>
      <p className="text-lg py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h6 className="text-4xl font-bold">200+</h6>
          <p>Courses</p>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="text-4xl font-bold">50K</h6>
          <p>Members</p>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="text-4xl font-bold">370K</h6>
          <p>Students</p>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="text-4xl font-bold">100+</h6>
          <p>Recognitions</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function CoursePreviewSection() {

  
  
}