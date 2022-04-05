import React, { ReactElement, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import Link from "next/link";

export interface NavType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavLinkType {
  to: string;
  children: string;
}

function NavLink({ to, children }: NavLinkType) {
  return (
    <Link href={to}>
      <a className={`mr-8`}>{children}</a>
    </Link>
  );
}

function MobileNavLink({ to, children }: NavLinkType) {
  return (
    <Link href={to} passHref>
      <a className={`text-xl font-normal my-4`}>{children}</a>
    </Link>
  );
}

function MobileNav({ open, setOpen }: NavType) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-gray-50 dark:bg-gray-900 h-20">
        {/*logo container*/}
        <Link href="/" passHref>
          <a className="text-xl font-semibold">RW</a>
        </Link>
      </div>
      <div className="flex flex-col ml-4 mt-6">
        <MobileNavLink to="/"> Home</MobileNavLink>
        {/* <NavLink to="/guestbook">Guestbook</NavLink> */}
        <MobileNavLink to="/experience">Experience</MobileNavLink>
        <MobileNavLink to="/featured">Featured</MobileNavLink>
        <MobileNavLink to="/chat">Chat</MobileNavLink>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <nav className="relative w-full z-50 bg-gray-50 dark:bg-gray-900 flex filter drop-shadow-md px-8 py-4 h-20 items-center">
      <div className="container mx-auto flex max-w-2xl">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-9/12 flex justify-start items-center">
          <div
            className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/guestbook">Guestbook</NavLink> */}
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/featured">Featured</NavLink>
            <NavLink to="/chat">Chat</NavLink>
          </div>
        </div>
        <div className="w-3/12 flex items-center justify-end">
          <button
            id="theme-toggle"
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            {loaded && theme === "dark" ? (
              <MdNightlightRound color="yellow" fontSize="1.5em" />
            ) : (
              <MdLightMode color="darkOrange" fontSize="1.5em" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
