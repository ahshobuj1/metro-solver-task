import {CiLocationOn} from 'react-icons/ci';
import {IoCallOutline} from 'react-icons/io5';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#1B1B31] via-[#361A67] to-[#1B1B31]">
      <footer className="footer sm:footer-horizontal py-20 px-10 max-w-[1440x] text-white">
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

      <div className="border-t-2 border-[#361A67] w-full"></div>

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
