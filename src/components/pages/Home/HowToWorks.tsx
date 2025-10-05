import Image from 'next/image';
import howTo1 from '@/assets/image/howToWorks/howWorks.png';
import howTo2 from '@/assets/image/howToWorks/howWorks2.png';

const HowToWorks = () => {
  return (
    <section className="bg-[#361a674a]">
      <div className="contain py-5 lg:py-20">
        <div className="relative">
          <Image
            src={howTo1}
            width={1280}
            height={550}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4"
          />

          <Image
            src={howTo2}
            width={330}
            height={300}
            alt="marquee image"
            className="rounded-lg shadow-2xl mx-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToWorks;
