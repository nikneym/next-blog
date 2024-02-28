"use client";
import { type MouseEvent } from "react";
import { Menu } from "react-feather";

interface Props {
  toggle: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export default function MenuButton({ toggle }: Props) {
  return (
    <button
      className="flex-shrink-0 inline-block lg:hidden text-accent"
      type="button"
      onClick={toggle}
    >
      <Menu size={24} />
    </button>
  );
}
