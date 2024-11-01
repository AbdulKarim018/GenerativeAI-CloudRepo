import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <BenchMarksSection />
      <Testimonials />
      <div className="w-full bg-secondary">
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <MaxWidthWrapper
      element="header"
      className="flex items-center justify-between py-4"
    >
      <h2 className="text-2xl font-semibold">Soudemy</h2>
      <nav className="flex items-center gap-4 max-md:hidden">
        <span className="cursor-pointer">Products</span>
        <span className="cursor-pointer">Features</span>
        <span className="cursor-pointer">Reviews</span>
        <span className="cursor-pointer">Pricing</span>
        <button className="rounded-md bg-primary p-2 text-sm text-white">
          Sign Up
        </button>
      </nav>
    </MaxWidthWrapper>
  );
}

function HeroSection() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-4 text-center">
      <Image src="/hero.png" alt="Hero" width={700} height={700} />
      <h3 className="text-3xl">Everything You Need All In One Place</h3>
      <h2 className="text-black/80">
        Software and analytics services will render your chunks into meaningful
        data.
      </h2>
      <button className="rounded-lg bg-primary px-8 py-2 text-sm text-white">
        Register Now
      </button>
      <Image
        src="/hero-brands.png"
        alt="brands using our services"
        width={500}
        height={200}
        className="opacity-50"
      />
    </MaxWidthWrapper>
  );
}

const products = new Array(6).fill(null).map((_, index) => ({
  id: index,
  title: `Product ${index + 1}`,
  description:
    "Deliver the best stories and ideas on the topics you care about most straight to you.",
}));
function ProductsSection() {
  return (
    <div className="w-full bg-secondary py-4 pb-6">
      <MaxWidthWrapper className="flex flex-col items-center gap-4">
        <h2 className="pt-4 text-3xl font-semibold">Our Products</h2>
        <p className="text-center text-sm text-black/80 md:w-3/4">
          We&apos;ll Deliver the best stories and ideas on the topics you care
          about most straight to your homepage, app, or inbox.
        </p>
        <ProductList products={products.slice(0, 3)} />
        <ProductList products={products.slice(3, 7)} />
      </MaxWidthWrapper>
    </div>
  );
}

function FeaturesSection() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-4 py-4">
      <h2 className="pt-4 text-3xl font-semibold max-md:text-2xl">
        Build Better Websites With Us
      </h2>
      <p className="text-center text-sm text-black/80 md:w-1/2">
        When you get staright to the point the presentation looks attractive on
        your web pages. Keep it simple and clean always.
      </p>

      {/*  div1 */}
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 md:w-3/4">
        {/* img div */}
        <div className="flex items-center justify-center md:w-1/2">
          <Image
            src="/features-website-1.png"
            alt="web1"
            className="rounded-xl"
            width={300}
            height={300}
          />
        </div>

        {/* text div */}
        <div className="flex items-center justify-center max-md:px-4 md:w-1/2">
          <div className="flex flex-col md:w-1/2">
            <h4 className="font-semibold">Website Number One</h4>
            <p className="text-sm text-black/80">
              When you get staright to the point the presentation looks
              attractiveon your web pages.
            </p>
          </div>
        </div>
      </div>

      {/*  div2 */}
      <div className="flex flex-row-reverse items-center justify-between max-md:flex-col max-md:gap-4 md:w-3/4">
        {/* img div */}
        <div className="flex items-center justify-center md:w-1/2">
          <Image
            src="/features-website-2.png"
            alt="web1"
            className="rounded-xl"
            width={300}
            height={300}
          />
        </div>

        {/* text div */}
        <div className="flex items-center justify-center max-md:px-4 md:w-1/2">
          <div className="flex flex-col md:w-1/2">
            <h4 className="font-semibold">Website Number Two</h4>
            <p className="text-sm text-black/80">
              When you get staright to the point the presentation looks
              attractiveon your web pages.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function BenchMarksSection() {
  return (
    <div className="w-full bg-primary text-center text-white">
      <MaxWidthWrapper className="flex flex-col items-center gap-8 py-4">
        <div>
          <h2 className="pt-4 text-3xl font-semibold max-md:text-3xl">
            Boost Your Revenue & Cut Work Hours
          </h2>
          <p className="pt-2 text-sm">
            Organized workflow and predictive patterns to boost your revenue.
          </p>
        </div>
        <div className="flex gap-8 max-md:flex-col">
          <div>
            <h3 className="text-7xl">47%</h3>
            <p className="pt-2 text-xs">Lesser Backlogs</p>
          </div>
          <div>
            <h3 className="text-7xl">33%</h3>
            <p className="pt-2 text-xs">Higher Profits</p>
          </div>
          <div>
            <h3 className="text-7xl">33%</h3>
            <p className="pt-2 text-xs">Higher Profits</p>
          </div>
        </div>
        <div>
          <button className="cursor-pointer pt-4 text-xs underline">
            Learn More About Our Company
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function Testimonials() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-6 py-4 text-center">
      <h2 className="pt-4 text-3xl font-semibold max-md:text-2xl">
        Customers Say Nice Things
      </h2>
      <p className="text-sm md:w-1/2">
        We have very fair pricing policy that would benefit you and us at the
        same time. Get the free plan & if you need more - pay.
      </p>
      <div className="flex flex-col items-center gap-4 rounded-xl bg-secondary px-8 py-4 pb-8">
        <div>
          <Image
            src="/testimonial-1.png"
            alt="testimonial"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p className="text-xl font-semibold">Melissa Vanbergh</p>
        </div>
        <div>
          <p className="mx-auto md:w-1/2">
            &quot;We have very fair pricing policy that would benefit you and us
            at the same time. Choose what price you&apos;re willing to pay. Get
            the free plan & if you need more - pay.&quot;
          </p>
        </div>
        <p className="cursor-pointer text-sm text-primary underline">
          View More
        </p>
      </div>
    </MaxWidthWrapper>
  );
}

function ContactSection() {
  return (
    <div className="w-full bg-secondary py-4 pb-16">
      <MaxWidthWrapper className="flex flex-col items-center gap-4 text-center">
        <p className="pt-6 uppercase max-md:text-sm">
          grab array for best price today
        </p>
        <p className="text-4xl font-semibold max-md:text-2xl">
          Start now and turn your online business into a profitable route.
        </p>
        <div className="flex w-3/4 flex-col gap-4 md:w-2/4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-primary px-4 py-2 text-sm outline-primary"
          />
          <button className="rounded-lg bg-primary px-8 py-2 text-sm text-white">
            Sign Up Now
          </button>
        </div>
        <p className="py-4 text-xs text-black/50">
          14-day free trial and no credit card required.
        </p>
      </MaxWidthWrapper>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full bg-secondary">
      <MaxWidthWrapper
        element="footer"
        className="flex items-center justify-between py-4"
      >
        <h2 className="text-2xl font-semibold">Soudemy</h2>
        <p className="text-xs text-black/50">All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <p className="cursor-pointer text-xs text-black/50">Facebook</p>
          <p className="cursor-pointer text-xs text-black/50">Twitter</p>
          <p className="cursor-pointer text-xs text-black/50">Linkedin</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
