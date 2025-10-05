import Marquee from 'react-fast-marquee';
import marquee1 from '@/assets/image/marquee/mar1.png';
import marquee2 from '@/assets/image/marquee/mar2.png';
import marquee3 from '@/assets/image/marquee/mar3.png';
import Image from 'next/image';

const FeatureMarquee = () => {
  return (
    <div className="py-5">
      <Marquee speed={50}>
        <Image
          src={marquee1}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee2}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee3}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee1}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee2}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee3}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee1}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee2}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
        <Image
          src={marquee3}
          width={250}
          height={70}
          alt="marquee image"
          className="rounded-lg shadow-2xl mx-5"
        />
      </Marquee>
    </div>
  );
};

export default FeatureMarquee;
