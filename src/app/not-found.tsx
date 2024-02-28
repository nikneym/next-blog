import MainWrapper from "@/components/MainWrapper";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "react-feather";

export default function NotFound() {
  return (
    <MainWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 self-center place-items-center mt-28">
        <Image
          className="rounded-xl shadow-sm select-none"
          src="/yipyip.gif"
          width={300}
          height={300}
          alt="yipyip"
        />
        <div className="flex flex-col items-center gap-4 w-full">
          <h1 className="text-7xl font-semibold text-accent">404</h1>
          Appa doesn't know this way.
          <Link
            href="/"
            className="inline-flex w-auto break-keep justify-center items-center gap-x-1.5 select-none drop-shadow-sm bg-accent hover:bg-pink-400 transition-none md:transition-all shadow-sm font-semibold text-sm px-4 py-2 rounded-md text-ground"
          >
            <ChevronLeft className="flex-shrink-0 text-ground" size={20} />
            Yip Yip
          </Link>
        </div>
      </div>
    </MainWrapper>
  );
}
