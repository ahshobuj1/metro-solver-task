import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import top1 from '@/assets/image/latestWork/top1.png';
import top2 from '@/assets/image/latestWork/top2.png';
import top3 from '@/assets/image/latestWork/top3.png';
import middle1 from '@/assets/image/latestWork/middle1.png';
import middle2 from '@/assets/image/latestWork/middle2.png';
import bottom1 from '@/assets/image/latestWork/bottom1.png';
import bottom2 from '@/assets/image/latestWork/bottom2.png';
import bottom3 from '@/assets/image/latestWork/bottom3.png';

const OurLatestWorks = () => {
  return (
    <section className="py-5 lg:py-20">
      <div className="flex items-center justify-between mb-12 contain">
        <h2 className="subHeading">Our Latest Works</h2>
        <p className="max-w-md text-center">
          Based on the description of Metro Solver and the image provided, here
          is a 6-step process that Metro Solver uses to scale a customers
          business
        </p>
      </div>

      {/* Top */}
      <div>
        <Marquee speed={50}>
          <Image
            src={top1}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={top2}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={top3}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={top1}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={top2}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={top3}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
        </Marquee>
      </div>

      {/* Middle */}
      <div className="py-8">
        <Marquee speed={50} direction="right">
          <Image
            src={middle1}
            width={405}
            height={600}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={middle2}
            width={405}
            height={600}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={middle1}
            width={405}
            height={600}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={middle2}
            width={405}
            height={600}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
        </Marquee>
      </div>

      {/* Bottom */}
      <div>
        <Marquee speed={50}>
          <Image
            src={bottom1}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={bottom2}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={bottom3}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={bottom1}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={bottom2}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
          <Image
            src={bottom3}
            width={296}
            height={296}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default OurLatestWorks;
