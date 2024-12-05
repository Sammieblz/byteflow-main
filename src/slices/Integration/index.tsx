import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import StarBackground from "./StarBackground";
import Image from "next/image";

import background from "./dark-gradient1.jpg";
import React from "react";

import {FaGithub, FaCloudflare, FaFigma, FaWix, FaReact, FaPython, FaJs, FaHtml5} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoFlutter } from "react-icons/bi"
import { SiVercel, SiMysql  } from "react-icons/si";
/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integration = ({ slice }: IntegrationsProps): JSX.Element => {

  const icons = {
    cloudflare: <FaCloudflare />,
    github: <FaGithub />,
    firebase: <IoLogoFirebase />,
    wix: <FaWix />,
    nextjs: <RiNextjsFill />,
    figma: <FaFigma />,
    flutter: <BiLogoFlutter />,
    vercel: <SiVercel />,
    react: <FaReact />,
    python: <FaPython />,
    javascript: <FaJs />,
    html: <FaHtml5 />,
    tailwind: <RiTailwindCssFill />,
    mysql: <SiMysql />
  }
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="mt-20 flex flex-col items-center md:flex-row">
          {slice.primary.repeatable_zone.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(slice.items.length /2 ) && (
                <>
              
                <div className="rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div
                className="pulsing-icon flex aspect-square shrink-2 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl
                text-blue-100 opacity-90 md:text-4xl lg:text-5xl"
              >
                {item.icon && icons[item.icon]}
              </div>

            </React.Fragment>
          ))} 
        </div>
      </div>
    </Bounded>
  );
};

export default Integration;