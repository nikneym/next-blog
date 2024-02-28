import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GridWrapper({ children }: Props) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-4 place-items-stretch lg:place-items-center">
      {children}
    </div>
  );
}
