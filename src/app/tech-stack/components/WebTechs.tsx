"use client";
import {
  NextJS,
  React,
  type Icon,
  Redux,
  Sass,
  Tailwind,
  ThreeJS,
  Prisma,
  Svelte,
  Bun,
  NodeJS,
  PostgreSQL,
  SQLite,
} from "@/components/techIcons";
import cn from "classnames";
import { type ReactNode, useState } from "react";
import { Globe } from "react-feather";
import InfoBox from "./InfoBox";
import GridWrapper from "./GridWrapper";
import { motion } from "framer-motion";

enum Kind {
  None = 0,
  Library,
  Framework,
  Runtime,
  Database,
}

interface Tech {
  icon: Icon;
  kind: Kind;
}

const techs: Tech[] = [
  { icon: Prisma, kind: Kind.Library },
  { icon: Redux, kind: Kind.Library },
  { icon: Sass, kind: Kind.Framework },
  { icon: Tailwind, kind: Kind.Framework },
  { icon: React, kind: Kind.Library },
  { icon: ThreeJS, kind: Kind.Library },
  { icon: NextJS, kind: Kind.Framework },
  { icon: Svelte, kind: Kind.Framework },
  { icon: Bun, kind: Kind.Runtime },
  { icon: NodeJS, kind: Kind.Runtime },
  { icon: PostgreSQL, kind: Kind.Database },
  { icon: SQLite, kind: Kind.Database },
];

export default function WebTechs() {
  const [kind, setKind] = useState<Kind>(Kind.None);
  const reset = () => setKind(Kind.None);

  const Indicate = ({ children, to }: { children: ReactNode; to: Kind }) => (
    <span
      className="text-pink-400 hover:underline underline-offset-4 cursor-default"
      onMouseEnter={() => setKind(to)}
      onTouchStart={() => setKind(to)}
      onTouchEnd={reset}
      onMouseLeave={reset}
    >
      {children}
    </span>
  );

  return (
    <GridWrapper>
      {/* info */}
      <InfoBox title="Web Technologies" icon={Globe}>
        Components we need for crafting beautiful experiences! These are the{" "}
        <Indicate to={Kind.Library}>libraries</Indicate>,{" "}
        <Indicate to={Kind.Framework}>frameworks</Indicate>,{" "}
        <Indicate to={Kind.Runtime}>runtimes</Indicate> and{" "}
        <Indicate to={Kind.Database}>databases</Indicate> I mostly use & feel
        comfortable with. I know databases are not only intended for web, though
        it won't hurt to mention them here.
      </InfoBox>

      {/* data listing */}
      <div className="relative grid grid-cols-3 sm:grid-cols-4 place-items-center gap-8">
        {techs.map((e, i) => (
          <motion.div
            className={cn(
              "relative inline-flex bg-soft-gray outline outline-2 outline-offset-2 shadow-lg p-2 rounded-full",
              e.kind === kind ? "outline-accent" : "outline-soft-gray"
            )}
            key={i}
            animate={{ scale: [0, 1] }}
            transition={{
              type: "spring",
              delay: 0.05 * (i + 1),
              bounce: 0.6,
            }}
          >
            <e.icon size={32} />
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
