import hero1 from '@/assets/image/hero/hero1.png';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section>
      <div className="contain py-5 lg:py-20 ">
        {/* content */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          {/* contents */}
          <div className="lg:max-w-[500px]">
            <div>
              <h1 className="heading">Why You Choose Metro Solver?</h1>
              <p className="pt-5 pb-10">
                We are constantly growing or learning and improving.Enter your
                personal real estate sanctuary, where finding the ideal home is
                effortless and comfortable with our assistance.
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
                Book Now
              </button>
            </div>
          </div>

          {/* buttons */}

          <div className="flex flex-col gap-5">
            <div>
              <button className="relative px-14 py-10 text-white font-semibold bg-[#0a111c] rounded-full overflow-hidden group skew-x-12 -skew-y-8 w-full cursor-pointer">
                <span className="absolute inset-0 opacity-10 transform group-hover:opacity-20 transition-all duration-300 "></span>
                <span className="relative z-10 lg:text-5xl font-medium">
                  Cancel Anytime
                </span>
              </button>
            </div>

            <div>
              <button className="relative px-14 py-10 text-white font-semibold bg-gradient-to-r from-[#361A67] via-[#1B1B31] to-[#361A67] rounded-full overflow-hidden group -skew-x-6 skew-y-5 lg:mt-12 w-full cursor-pointer">
                <span className="absolute inset-0 opacity-10 transform group-hover:opacity-20 transition-all duration-300 "></span>
                <span className="relative z-10 lg:text-5xl font-medium">
                  24/7 Customer Service
                </span>
              </button>
            </div>

            <div>
              <button className="relative mt-14 px-10 py-10 text-white font-semibold bg-[#0a111c] rounded-full overflow-hidden group skew-x-12 -skew-y-8 w-full cursor-pointer">
                <span className="absolute inset-0 opacity-10 transform group-hover:opacity-20 transition-all duration-300 "></span>
                <span className="relative z-10 lg:text-5xl font-medium">
                  Refers & Earn
                </span>
              </button>
            </div>

            <div>
              <button className="relative mt-6 px-14 py-10 text-white font-semibold bg-[#0a111c] rounded-full overflow-hidden group w-full cursor-pointer">
                <span className="absolute inset-0 opacity-10 transform group-hover:opacity-20 transition-all duration-300 "></span>
                <span className="relative z-10 lg:text-5xl font-medium">
                  Money Back Guarantee
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
