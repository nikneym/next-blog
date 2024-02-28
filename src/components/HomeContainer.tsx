import classNames from "classnames";
import { type ReactNode } from "react";
import localFont from "next/font/local";

const cat = localFont({
  src: "../../public/fonts/comic_cat-webfont.woff2",
});

interface Props {
  title: string;
  children: ReactNode;
}

export default function HomeContainer({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col self-start lg:self-center select-none">
        <h1 className={classNames(cat.className, "text-2xl font-extrabold")}>
          {title}
        </h1>
        <div className="h-1 w-full bg-accent rounded-full" />
      </div>
      {children}
    </div>
  );
}
