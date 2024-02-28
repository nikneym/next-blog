"use client";
import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { X } from "react-feather";

interface Props {
  isOpen: boolean;
  setClose: () => void;
  children: ReactNode;
}

export default function Drawer({ isOpen, setClose, children }: Props) {
  useEffect(() => {
    const body = document.body;

    if (isOpen === true) {
      // make the body unscrollable
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    // reset the body on unmount
    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap active={isOpen}>
          <motion.div
            className="drawer text-white"
            role="dialog"
            initial={{ left: "-16rem" }}
            animate={{ left: 0 }}
            exit={{ left: "-16rem" }}
            transition={{
              /* TODO: */
              easings: ["backIn"],
              duration: 0.25,
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setClose();
              }
            }}
            aria-hidden={!isOpen}
          >
            <div className="flex justify-end w-full px-3.5 py-4">
              <button
                className="flex-shrink-0 inline-block outline-none text-accent"
                onClick={setClose}
              >
                <X size={24} />
              </button>
            </div>
            {children}
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
}
