// has to be client component since drawer logic requires useState
"use client";
import { Book, Code, Coffee, Icon, MessageCircle, Zap } from "react-feather";
import classNames from "classnames";
import localFont from "next/font/local";
import { useState } from "react";
import Drawer from "./Drawer";
import MenuButton from "./menuButton";
import Link from "next/link";
import { motion } from "framer-motion";

const cat = localFont({
  src: "../../public/fonts/comic_cat-webfont.woff2",
});

interface Nav {
  text: string;
  icon: Icon;
  href: string;
}

const navigations: Nav[] = [
  { text: "Home", icon: Coffee, href: "/" },
  //{ text: "Posts", icon: Code, href: "/posts" },
  //{ text: "Diaries", icon: Book, href: "/" },
  { text: "Tech Stack", icon: Zap, href: "/tech-stack" },
  { text: "Contact", icon: MessageCircle, href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <div className="sticky py-4 top-0 z-40 select-none m-auto w-full px-4 lg:w-[52rem] lg:px-0 flex shadow-sm lg:shadow-none bg-soft-gray lg:bg-transparent justify-between items-center backdrop-blur-sm">
        <motion.a
          className={classNames(
            cat.className,
            "hidden lg:inline text-md lg:text-2xl drop-shadow-md text-accent font-extrabold"
          )}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          halil
        </motion.a>
        {/* Desktop NavBar + Theme selector */}
        <motion.div
          className="hidden lg:inline-flex items-center justify-center gap-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <nav className="relative flex flex-row gap-0.5 z-40 outline outline-2 outline-offset-2 outline-soft-gray rounded-full">
            {navigations.map((navItem, i) => (
              <Link
                className="relative inline-flex items-center gap-x-1.5 bg-accent hover:underline rounded-sm first:rounded-l-full last:rounded-r-full px-3 py-1 text-sm text-ground hover:bg-accent-darker"
                href={navItem.href}
                key={i}
              >
                <navItem.icon
                  className="flex-shrink-0"
                  size={16}
                  strokeWidth={2}
                />
                {navItem.text}
              </Link>
            ))}
          </nav>
          {/* TODO: theme switch */}
          {/*         <button className="relative z-30 flex-shrink-0 bg-hover-tone p-2 shadow-sm rounded-full text-white">
          <Moon size={16} strokeWidth={2} />
        </button> */}
        </motion.div>

        {/* mobile only burger menu */}
        <MenuButton toggle={toggle} />
        {/* mobile only right side of the navbar */}
        {/*         <span className="inline-block lg:hidden text-accent font-medium border border-accent self-center rounded-md px-2 py-0.5 text-sm shadow-inner">
          Home
        </span> */}
      </div>

      {/* Mobile only drawer */}
      <Drawer isOpen={open} setClose={toggle}>
        <div className="px-4">
          <nav className="inline-flex flex-col gap-6">
            {navigations.map((navItem, i) => (
              <Link
                className="flex flex-row items-center gap-x-2.5 text-sm text-accent font-semibold"
                href={navItem.href}
                key={i}
                // close the drawer
                onClick={toggle}
                prefetch
              >
                <navItem.icon
                  className="flex-shrink-0 text-accent"
                  size={20}
                  strokeWidth={2}
                />
                <span className="hover:underline underline-offset-4 transition-all">
                  {navItem.text}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </Drawer>
    </>
  );
}
