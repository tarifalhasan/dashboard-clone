"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCreditCard2BackFill, BsFillHandbagFill } from "react-icons/bs";
import { FaAngellist, FaBuffer } from "react-icons/fa";
import { MdOutlineSettings, MdSpaceDashboard } from "react-icons/md";
import { PiChatsTeardropFill } from "react-icons/pi";
const Sidebar = () => {
  const pathName = usePathname();
  const Links = [
    {
      icon: <MdSpaceDashboard />,
      href: "/",
    },
    {
      icon: <FaBuffer />,
      href: "/page",
    },
    {
      icon: <BsFillHandbagFill />,
      href: "/cart",
    },
    {
      icon: <BsCreditCard2BackFill />,
      href: "/paymeny",
    },
    {
      icon: <MdOutlineSettings />,
      href: "/settings",
    },
    {
      icon: <PiChatsTeardropFill />,
      href: "/chat",
    },
  ];

  return (
    <aside className=" z-50 hidden h-[calc(100%-2.5rem)] lg:flex w-20 fixed left-[1.5rem] top-[1.5rem] -bottom-[1.5rem]   flex-col  items-center  bg-white rounded-xl px-4 py-5 space-y-5">
      <Link href="/" className=" logo">
        <FaAngellist className=" bg-amber-500 text-white rounded-md text-5xl p-2" />
      </Link>
      <ul className=" space-y-6 w-full flex flex-col items-center">
        {Links.map((link, i) => (
          <li key={i} className=" w-full   grid place-items-center">
            <Link
              className={` text-3xl rounded-md w-full py-2.5 grid place-items-center ${
                pathName === link.href
                  ? " text-[#3347AC] bg-[#EFF1FE]"
                  : "text-[#CBCBCB] bg-transparent"
              }`}
              href={link.href}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
