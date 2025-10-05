import Image from 'next/image';
import hero1 from '@/assets/image/hero/hero1.png';
import hero2 from '@/assets/image/metro/comp1.gif';
import hero3 from '@/assets/image/metro/Frame1.gif';
import hero4 from '@/assets/image/metro/Frame3.gif';

const HeroSection = () => {
  return (
    <section className="bg-primary-black">
      <div className="contain">
        <div className="hero py-16">
          <div className="hero-content flex flex-col lg:flex-row">
            {/* text content */}
            <div className="lg:max-w-[500px]">
              <div>
                <h1 className="heading">
                  Expert to Digitalise
                  <Image
                    src={hero3}
                    height={300}
                    width={300}
                    alt="icon hero"
                    className="rounded-lg shadow-2xl"
                  />
                </h1>
                <p className="pt-5 pb-10">
                  We are constantly growing or learning and improving.Enter your
                  the personal real estate sanctf uary, where finding the ideal
                  home is
                </p>
                <button
                  className=" text-white py-5 transition-transform duration-300 hover:scale-105 rounded-full border-[1px] border-b-[#C16EFD] border-l-[#c16efd47] px-12 text-2xl font-medium flex items-center justify-center gap-3"
                  style={{
                    background:
                      'linear-gradient(180deg, #6331F1 0%, #6331F1 53%, #6D43E4 69%, #9F63FF 100%)',
                  }}>
                  <Image
                    src={hero1}
                    height={32}
                    width={32}
                    alt="icon hero"
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  Get Started
                </button>
              </div>
            </div>

            {/* images */}
            <div className="col-span-3 relative">
              <Image
                src={hero2}
                height={500}
                width={800}
                alt="icon hero"
                className="w-full h-full bg-cover bg-center"
              />

              <div className="absolute right-0 -bottom-8">
                <Image src={hero4} height={80} width={80} alt="icon hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
