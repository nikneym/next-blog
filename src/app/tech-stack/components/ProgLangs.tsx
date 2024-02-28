"use client";
import { motion } from "framer-motion";
import {
  JavaScript,
  Lua,
  React,
  type Icon,
  TypeScript,
  Zig,
  Go,
  C,
} from "@/components/techIcons";
import { Cpu } from "react-feather";
import InfoBox from "./InfoBox";
import GridWrapper from "./GridWrapper";

interface Language {
  icon: Icon;
  percentage: string; // in "00%" CSS format
}

const langs: Language[] = [
  { icon: JavaScript, percentage: "80%" },
  { icon: TypeScript, percentage: "70%" },
  { icon: Zig, percentage: "90%" },
  { icon: C, percentage: "85%" },
  { icon: Go, percentage: "60%" },
  { icon: Lua, percentage: "94%" },
];

export default function ProgLangs() {
  return (
    <GridWrapper>
      {/* info */}
      <InfoBox title="Programming Languages" icon={Cpu}>
        I mean, where else to start? These are the very things that keep me
        looking on the screen for hours. Zig and Lua are by far the ones I most
        feel productive. I used to hate JS/TS (surely I still do) but Ive learnt
        to live with it.
      </InfoBox>

      {/* data listing */}
      <ul className="w-full flex flex-col gap-y-3 order-last lg:order-first">
        {langs.map((e, i) => (
          <li
            className="relative flex flex-row justify-end items-center gap-x-2"
            key={i}
          >
            <e.icon className="flex-shrink-0" />
            <div className="relative w-full h-6 bg-transparent border border-r-0 border-soft-gray rounded-full lg:rounded-tl-full lg:rounded-bl-full lg:rounded-r-none p-2">
              <motion.div
                className="relative h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: e.percentage }}
                transition={{ delay: 0.1 * (i + 1) }}
              />
            </div>
          </li>
        ))}
      </ul>
    </GridWrapper>
  );
}
