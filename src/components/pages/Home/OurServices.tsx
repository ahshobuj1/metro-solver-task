import SectionTitle from '@/components/UI/SectionTitle';
import Link from 'next/link';
import {GoArrowUpRight} from 'react-icons/go';
import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaCube,
  FaPenFancy,
  FaSearch,
  FaShoppingCart,
  FaGift,
  FaCalculator,
  FaGlobe,
  FaServer,
  FaSchool,
  FaTshirt,
  FaFilm,
} from 'react-icons/fa';
import {RxCross1} from 'react-icons/rx';

const services = [
  {
    title: 'Graphic Design',
    desc: 'We create eye-catching visuals and branding that make your business stand out from the crowd.',
    icon: <FaPaintBrush className="text-4xl text-white" />,
  },
  {
    title: 'Multimedia & Video Editing',
    desc: 'Professional video editing and multimedia creation to bring your story to life.',
    icon: <FaFilm className="text-4xl text-white" />,
  },
  {
    title: 'Web & Software Development',
    desc: 'From modern websites to full-scale software solutions, we build it all with precision.',
    icon: <FaCode className="text-4xl text-white" />,
  },
  {
    title: 'Digital Marketing',
    desc: 'Boost your online visibility and reach the right audience through our marketing strategies.',
    icon: <FaBullhorn className="text-4xl text-white" />,
  },
  {
    title: '3D Animation & Visualisation',
    desc: 'Turn your ideas into stunning 3D animations and realistic visual experiences.',
    icon: <FaCube className="text-4xl text-white" />,
  },
  {
    title: 'Creative Writing Solution',
    desc: 'Words that inspire, inform, and influence — content writing that connects deeply.',
    icon: <FaPenFancy className="text-4xl text-white" />,
  },
  {
    title: 'SEO',
    desc: 'Rank higher, grow faster — complete SEO services for organic traffic and visibility.',
    icon: <FaSearch className="text-4xl text-white" />,
  },
  {
    title: 'E-Commerce',
    desc: 'Custom-built online stores with smooth UI/UX and secure payment integrations.',
    icon: <FaShoppingCart className="text-4xl text-white" />,
  },
  {
    title: 'Special Combo',
    desc: 'Get our best digital services bundled together for unbeatable value.',
    icon: <FaGift className="text-4xl text-white" />,
  },
  {
    title: 'Accounting',
    desc: 'Smart, simple, and reliable accounting solutions tailored for your business.',
    icon: <FaCalculator className="text-4xl text-white" />,
  },
  {
    title: 'Premium Domains',
    desc: 'Exclusive domains that give your brand instant credibility and online authority.',
    icon: <FaGlobe className="text-4xl text-white" />,
  },
  {
    title: 'Premium Website',
    desc: 'Beautifully designed, high-performing websites that elevate your digital presence.',
    icon: <FaServer className="text-4xl text-white" />,
  },
  {
    title: 'Proxy',
    desc: 'Secure proxy and network solutions to keep your online activity protected.',
    icon: <FaServer className="text-4xl text-white" />,
  },
  {
    title: 'Academy',
    desc: 'Empowering minds with professional training and modern learning resources.',
    icon: <FaSchool className="text-4xl text-white" />,
  },
  {
    title: 'Merchandise',
    desc: 'Custom apparel and branded merchandise designed to represent your business.',
    icon: <FaTshirt className="text-4xl text-white" />,
  },
];

const OurServices = () => {
  return (
    <section className="pb-5 lg:pb-20">
      <div className="contain">
        <h2 className="text-2xl font-medium text-white flex items-center gap-3 mt-7 ml-12">
          Get My 15% OFF
          <Link href="/">
            <RxCross1 />
          </Link>
        </h2>
        <SectionTitle
          title="Our Services"
          desc="Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card w-96 bg-[#130d19] hover:bg-gradient-to-r from-[#361A67] via-[#1B1B31] to-[#361A67] border-2 hover:border-white transition-all duration-300 p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <span>{service.icon}</span>
                </div>
                <h2 className="text-2xl font-medium text-white">
                  {service.title}
                </h2>
                <p className="mt-1 mb-3 text-gray-300 text-sm">
                  {service.desc}
                </p>

                <div className="card-actions">
                  <Link href="/" className="flex items-center gap-1">
                    <p className="text-[#7F56D9] font-medium">Read More</p>
                    <span className="mt-1.5">
                      <GoArrowUpRight className="text-white text-base" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
