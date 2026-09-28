"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Office", href: "#office" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d0c6] bg-[#f7f3ed]/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="serif text-2xl font-semibold text-[#29443D]">
            Dr. Maya Reynolds
          </span>

          <span className="text-xs tracking-[2px] text-[#756557]">
            PSYD · CLINICAL PSYCHOLOGIST
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-sm
                text-[#40504B]
                transition-all
                duration-300
                hover:text-[#29443D]
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="
              rounded-full
              bg-[#29443D]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#203832]
              hover:shadow-lg
            "
          >
            Schedule a Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            rounded-lg
            border
            border-[#b9c5bc]
            p-2
            transition-all
            duration-300
            hover:bg-[#E7DED1]
            md:hidden
          "
          aria-label="Open menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[#29443D]" />
            <span className="block h-0.5 w-6 bg-[#29443D]" />
            <span className="block h-0.5 w-6 bg-[#29443D]" />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#d9d0c6] bg-[#f7f3ed] px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  text-[#40504B]
                  transition-colors
                  duration-300
                  hover:text-[#29443D]
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                rounded-full
                bg-[#29443D]
                px-6
                py-3
                text-center
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#203832]
                hover:shadow-lg
              "
            >
              Schedule a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}