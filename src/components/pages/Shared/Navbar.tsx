import Image from 'next/image';
import logo from '@/assets/image/metro/Frame_1.gif';
import Link from 'next/link';
import navIcon1 from '@/assets/image/nav/navIcon1.png';
import {LuShoppingCart} from 'react-icons/lu';

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="w-30 text-black">
            <li>
              <Link href={'/'}>Service 1</Link>
            </li>
            <li>
              <Link href={'/'}>Service 2</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href={'/'}>White Label</Link>
      </li>
      <li>
        <Link href={'/'}>Contact US</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#0A111C]">
      <div className="navbar shadow-sm lg:px-20 contain">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Image src={logo} width={105} height={56} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className="border-2 border-transparent rounded-full hover:border-white px-4 transition-all duration-300 text-base">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="border-2 border-transparent rounded-full hover:border-white px-4 transition-all duration-300 text-base">
              <Link href={'/'}>About us</Link>
            </li>
            <li className="border-2 border-transparent rounded-full hover:border-white px-4 transition-all duration-300 text-base">
              <details>
                <summary>Services</summary>
                <ul className="w-30 text-black">
                  <li>
                    <Link href={'/'}>Service 1</Link>
                  </li>
                  <li>
                    <Link href={'/'}>Service 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="border-2 border-transparent rounded-full hover:border-white px-4 transition-all duration-300 text-base">
              <Link href={'/'}>White Label</Link>
            </li>
            <li className="border-2 border-transparent rounded-full hover:border-white px-4 transition-all duration-300 text-base">
              <Link href={'/'}>Contact US</Link>
            </li>
          </ul>
        </div>

        {/* right items */}
        <div className="navbar-end">
          <div className="flex items-center justify-center gap-6">
            <div className="avatar avatar-placeholder">
              <div className="gradient text-neutral-content w-16 rounded-full cursor-pointer">
                <div className="relative">
                  <span className="absolute w-3 h-3 top-1 right-0 text-[10px] bg-red-500 rounded-full flex items-center justify-center">
                    1
                  </span>
                  <LuShoppingCart className="text-3xl" />
                </div>
              </div>
            </div>

            {/* image */}
            <div className="avatar">
              <div className="w-14 h-14 rounded-full ring-2 ring-offset-2 cursor-pointer">
                <Image src={navIcon1} alt="avatar" width={56} height={56} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
