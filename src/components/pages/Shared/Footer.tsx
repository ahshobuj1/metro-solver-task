import {CiLocationOn} from 'react-icons/ci';
import {IoCallOutline} from 'react-icons/io5';
import {AiOutlineMail} from 'react-icons/ai';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import marquee1 from '@/assets/image/footer/footer1.png';
import marquee2 from '@/assets/image/footer/footer2.png';
import marquee3 from '@/assets/image/footer/footer3.png';
import marquee4 from '@/assets/image/footer/footer4.png';
import marquee5 from '@/assets/image/footer/footer5.png';
import marquee6 from '@/assets/image/footer/footer6.png';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#1B1B31] via-[#361A67] to-[#1B1B31]">
      <footer className="footer sm:footer-horizontal px-4 py-5 lg:py-20 lg:px-20 max-w-[1440x] text-white">
        <aside className="max-w-80">
          <h2 className="subHeading text-[40px]">Got Questions?</h2>

          <div className="flex gap-4 items-center justify-center">
            <div>
              <div className="flex gradient items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                <CiLocationOn className="text-xl" />
              </div>
            </div>

            <p className="text-lg">
              Head office: Metro Solver Limited Grantham Road, London E12 5LX,
              United Kingdom
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <div>
              <div className="flex gradient items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                <IoCallOutline className="text-xl" />
              </div>
            </div>

            <p className="text-lg">+447936 455446</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div>
              <div className="flex gradient items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                <AiOutlineMail className="text-xl" />
              </div>
            </div>

            <p className="text-lg">official@metrosolver.com</p>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-medium">Country Currency</h2>
          </div>
        </aside>

        <nav>
          <h6 className=" text-white text-lg font-medium">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className=" text-white text-lg font-medium">About Us</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className=" text-white text-lg font-medium">Support</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <nav>
          <h6 className=" text-white text-lg font-medium">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
      </footer>

      {/* Marquee */}
      <div className="py-5 lg:pb-10">
        <p className="contain text-lg text-[#70757F] font-light">
          Our Partners
        </p>
        <div>
          <Marquee speed={50}>
            <Image
              src={marquee6}
              width={250}
              height={50}
              alt="marquee image"
              className="rounded-lg shadow-2xl mx-5"
            />
            <Image
              src={marquee1}
              width={250}
              height={50}
              alt="marquee image"
              className="rounded-lg shadow-2xl mx-5"
            />
            <Image
              src={marquee2}
              width={250}
              height={50}
              alt="marquee image"
              className="rounded-lg shadow-2xl mx-5"
            />
            <Image
              src={marquee3}
              width={250}
              height={50}
              alt="marquee image"
              className="rounded-lg shadow-2xl mx-5"
            />
            <Image
              src={marquee4}
              width={250}
              height={50}
              alt="marquee image"
              className="rounded-lg shadow-2xl mx-5"
            />
            <Image
              src={marquee5}
              width={250}
              height={50}
              alt="marquee image"
              className="rounded-lg shadow-2xl mx-5"
            />
          </Marquee>
        </div>
      </div>

      <div className="border-t-2 border-[#361A67] w-full"></div>

      {/*  Bottom footer */}
      <div className="flex items-center justify-between contain py-8">
        <p className="text-sm">
          © Metro Solver. All Rights Reserved {new Date().getFullYear()}
        </p>

        <p className="text-sm">
          Metro Solver Ltd incorporated in England & Wales Registration
          No:15792819
        </p>
      </div>
    </div>
  );
};

export default Footer;
