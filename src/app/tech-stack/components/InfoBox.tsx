import type { ReactNode } from "react";
import type { Icon } from "react-feather";

interface Props {
  title: string;
  icon: Icon;
  children: ReactNode;
}

export default function InfoBox({ title, icon, children }: Props) {
  const Icon = icon;

  return (
    <div className="relative flex flex-col justify-start items-start bg-hover-tone px-4 lg:px-8 py-4 rounded-xl shadow-lg border border-soft-gray lg:min-h-60 overflow-hidden">
      {/* title */}
      <h1 className="text-xl font-bold leading-8 mb-1 text-accent z-20">
        {title}
      </h1>
      {/* content */}
      <p className="leading-6 text-sm">{children}</p>
      {/* some related icon */}
      <Icon className="absolute top-4 right-4 text-soft-gray z-10" size={18} />
    </div>
  );
}
