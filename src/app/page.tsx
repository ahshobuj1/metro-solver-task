import FeatureMarquee from '@/components/pages/Home/FeatureMarquee';
import HeroSection from '@/components/pages/Home/HeroSection';
import OurLatestWorks from '@/components/pages/Home/OurLatestWorks';
import OurServices from '@/components/pages/Home/OurServices';
import Video from '@/components/pages/Home/Video';
import WhyChooseUs from '@/components/pages/Home/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureMarquee />
      <OurServices />
      <OurLatestWorks />
      <WhyChooseUs />
      <Video />
    </main>
  );
}
