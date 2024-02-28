"use client";
import { Box, GitHub, Icon, Linkedin, Twitter, Youtube } from "react-feather";
import Image from "next/image";
import HomeContainer from "@/components/HomeContainer";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import MainWrapper from "@/components/MainWrapper";

const cat = localFont({
  src: "../../public/fonts/comic_cat-webfont.woff2",
});

interface Project {
  name: string;
  description: string;
}

interface Social {
  icon: Icon;
  href: string;
}

const socials: Social[] = [
  { icon: GitHub, href: "https://github.com/nikneym" },
  { icon: Twitter, href: "https://twitter.com/hll_drk" },
  { icon: Linkedin, href: "https://linkedin.com/in/halildurak" },
  { icon: Youtube, href: "https://youtube.com/@thunderkebap" },
];

const projects: Project[] = [
  {
    name: "dynamo",
    description:
      "Performant abstraction over system APIs for non-blocking socket I/O.",
  },
  { name: "ws", description: "WebSocket library for Zig ⚡" },
  { name: "wave", description: "Tiny WAV encoder/decoder for Zig ⚡" },
  {
    name: "ucuzkit.app",
    description: "Find cheapest books from turkish booksellers",
  },
  {
    name: "lua-trie",
    description: "Simple trie data structure implemented in Lua",
  },
  { name: "picodns", description: "Caching and non-blocking DNS resolver" },
];

/*         {/*         <div className="relative flex flex-col md:flex-row gap-x-3 bg-hover-tone rounded-full md:rounded-3xl gap-y-4 px-4 py-10 sm:py-3 justify-center items-center align-middle overflow-hidden">
          <h1
            className={classNames(
              cat.className,
              "w-2/3 text-xl text-center md:text-left font-semibold z-30 text-white leading-7"
            )}
          >
            I'm hosting a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-400 to-primary">
              podcast show
            </span>{" "}
            where me and some great people talk on various topics
          </h1>
          <button className="inline-flex break-keep justify-center items-center gap-x-1.5 drop-shadow-sm bg-accent hover:bg-pink-400 transition-none md:transition-all shadow-sm font-semibold text-sm px-4 py-2 rounded-md text-ground">
            <Mic className="flex-shrink-0" size={20} />
            Take me to podcasts!
          </button>
        </div>
 */

export default function Home() {
  return (
    <>
      <MainWrapper>
        {/* about area */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start">
          <div className="space-y-2.5">
            {/* Image wrapper + Image */}
            <div className="relative flex-shrink-0 w-[96px] h-[96px] rounded-full outline outline-offset-2 outline-pink-400 shadow-sm">
              <Image
                src="/me.png"
                className="object-cover rounded-full shadow-sm"
                sizes="96px"
                alt="me"
                fill
              />
            </div>
            {/* Socials */}
            <motion.nav className="grid grid-cols-4 place-items-center text-pink-400 gap-y-0 gap-x-3">
              {socials.map((social, i) => (
                <motion.a
                  className="relative inline-block [&:nth-child(2)]:top-1 [&:nth-child(3)]:top-1"
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.11 * (i + 1),
                    bounce: 0.75,
                  }}
                  href={social.href}
                >
                  <social.icon className="relative hover:scale-110" size={18} />
                </motion.a>
              ))}
            </motion.nav>
          </div>
          <div>
            <h2 className="block text-3xl leading-10 font-semibold text-accent">
              Hi, its Halil.
            </h2>
            <p className="text-lg leading-7">
              I am many things but none of them singly define me. If you were to
              ask me, I'd spit software developer, comics enjoyer, sci-fi/horror
              movies/books appreciator. Unsure if that's complementary though.
            </p>
            <span className="block text-xs leading-9 text-left">
              I might also be bad at selling myself.
            </span>
          </div>
        </div>

        {/* Projects List */}
        <HomeContainer title="Projects">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((e, i) => (
              <li
                className="flex flex-row items-start text-ellipsis gap-2 bg-soft-gray border border-hover-tone rounded-md px-3 py-3 shadow-sm text-accent"
                key={i}
              >
                <div className="flex-shrink-0 relative w-[64px] h-[64px]">
                  <Image
                    src="/hamsi.jpeg"
                    sizes="128px"
                    className="object-cover rounded-md"
                    alt={e.name}
                    fill
                  />
                </div>
                <div>
                  <div className="block">
                    <a
                      className="inline-flex flex-row items-center gap-1"
                      /* href="https://www.google.com" */
                    >
                      <Box className="flex-shrink-0" size={18} />
                      <h2 className="text-base">{e.name}</h2>
                    </a>
                  </div>
                  <div className="text-white leading-5 text-sm">
                    {e.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </HomeContainer>
      </MainWrapper>
    </>
  );
}

/* 
        <HomeContainer title="Posts">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-x-2 flex-row-reverse justify-between items-start">
              <time
                className="inline-block flex-shrink-0 bg-hover-tone border border-soft-gray text-white font-semibold shadow-sm px-2 py-1 rounded-full text-xs select-none"
                dateTime="2024-02-01"
              >
                Feb 01 2024
              </time>
              <h1 className="truncate font-medium text-accent underline underline-offset-2 text-md md:text-lg">
                Running Next.js on Cloudflare Workers
              </h1>
            </li>

            <li className="flex gap-x-2 flex-row-reverse justify-between items-start">
              <time
                className="inline-block flex-shrink-0 bg-hover-tone border border-soft-gray text-white font-semibold shadow-sm px-2 py-1 rounded-full text-xs select-none"
                dateTime="2024-02-01"
              >
                Sep 20 2023
              </time>
              <h1 className="truncate font-medium text-accent underline underline-offset-2 text-md md:text-lg">
                Solving C10K Problem with libuv
              </h1>
            </li>
          </ul>
        </HomeContainer>
 */
