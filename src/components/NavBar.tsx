'use client';

import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import AuthModal from "./Auth/AuthModal";
import ButtonCustom from "./shared/ButtonCustom";
import { LinkItem } from "@/types/Link";

interface NavBarProps {
   logo: string;
   navData: LinkItem[];
}

const NavBar : React.FC<NavBarProps> = ({ logo, navData }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${isScrolled ? 'bg-secondary py-2.5' : 'py-5 bg-[#FFFFFF33]'} 
      px-[8.2051%] md:px-[3.8369%] lg:px-[7.7777%] fixed left-1/2 -translate-x-1/2 z-51 
      border border-transparent transition-all duration-200 ease-in-out w-full`}>
        <div className="flex justify-between items-center w-full">
          <Image 
            className={`${isScrolled ? 'w-[62.5px] h-[62.5px]' : 'w-[100px] md:w-[130px] h-[90px] md:h-[90px]'} 
            transition-transform duration-300`}
            src={logo} 
            alt={"logo"}
            width={130}
            height={130} />
          <ul
            className={`z-51 flex flex-col gap-3 md:gap-1.5 lg:gap-5 justify-center items-center text-lg 
              lg:text-[20px] leading-6 transition-all duration-300 ease-in-out fixed inset-0 h-screen 
              w-screen
                ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto bg-secondary delay-150"
                : "-translate-y-full md:translate-y-0 opacity-0 pointer-events-none delay-0"}
                md:static md:transform-none md:flex-row md:gap-1.5 md:bg-transparent md:h-auto
                md:w-auto md:opacity-100 md:pointer-events-auto md:delay-0`}>
            {navData.map((item, index) => (
              <li key={index} className="p-1">
                <Link
                  href={item.path}
                  className={`${pathname === item.path ? 'underline underline-offset-8 decoration-primary' : 'hover:underline hover:underline-offset-8 text-primary'} font-semibold [line-height:100%] text-lg lg:text-xl text-white transition-transform duration-300`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="p-2 block md:hidden">
              <button
                onClick={() => {setMenuOpen(false); setIsModalOpen(true); setIsLogin(true); }}
                className={"font-semibold [line-height:100%] text-lg lg:text-xl text-white hover:text-primary transition-transform duration-300"}>
                Login
              </button>
            </li>
            <li className="p-2 block md:hidden">
              <ButtonCustom type={undefined} 
                label="Sign Up" 
                classBtnExtra=""
                onClick={() => {setMenuOpen(false); setIsModalOpen(true); setIsLogin(false); }}/>
            </li>
            <li className="p-2 block md:hidden">
              <select
                id="transportation"
                name="transportation"
                className="font-semibold text-lg lg:text-xl [line-height:100%] text-white">
                <option value="EN">En</option>
                <option value="AR">AR</option>
              </select>
            </li>

            <li className="fixed bottom-1 md:hidden mb-5">
              <button onClick={() => setMenuOpen(false)} aria-label="close menu">
                <VscChromeClose className="text-white"/>
              </button>
            </li>
          </ul>
          <div className="translate-y-0 flex md:gap-1 lg:gap-2.5 justify-center items-center">
            <select
              id="transportation"
              name="transportation"
              className="hidden md:block rounded-md font-semibold text-lg lg:text-xl [line-height:100%] text-white">
              <option  className="bg-primary" value="EN">En</option>
              <option  className="bg-primary" value="AR">AR</option>
            </select>
            <button
              onClick={() => {setMenuOpen(false); setIsModalOpen(true); setIsLogin(true); }}
              className={"hidden md:block font-semibold [line-height:100%] text-lg lg:text-xl text-white hover:text-primary transition-transform duration-300"}>
              Login
            </button>
            <ButtonCustom type={undefined} 
              label="Sign Up" 
              classBtnExtra="hidden md:block"
              onClick={() => {setMenuOpen(false); setIsModalOpen(true); setIsLogin(false); }}/>
          </div>
          
          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu">
          <RxHamburgerMenu className="text-white"/>
          </button>
        </div>
      </nav>
      <AuthModal isLogin={isLogin} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onchangeMode={() => setIsLogin(!isLogin)}/>
    </>
  );
};

export default NavBar;
