"use client";

import Byteflowlogo from "@/components/Bytflowlogo";
import { Content } from "@prismicio/client";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBarProps) {
  return (
    <nav className="px-4 py-4 gap-16 md:px-8 lg:px-16" aria-label="Main">
      <div className="mx-auto flex max-w-8xl items-center justify-between py-2 font-medium text-white">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Byteflowlogo />
          <span className="sr-only">Byteflow Home Page</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link} className="text-sm md:text-base lg:text-lg">
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center text-sm font-medium hover:text-blue-300 md:text-base lg:text-lg"
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
