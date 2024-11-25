import Bounded from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import clsx from "clsx";
import ButtonLink from "@/components/ButtonLink";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-full bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center px-6"
    >
      {/* Heading */}
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent">
              {children}
            </h2>
          ),
        }}
      />

      {/* Body */}
      <div className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-300 md:text-xl">
        <PrismicRichText field={slice.primary.body} />
      </div>

      {/* Grid Layout */}
      <div className="mt-16 grid w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {slice.primary.services.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "glass-container flex flex-col justify-between items-start rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-6 shadow-lg transition-transform duration-300 hover:scale-105",
              index >= 3 ? "lg:row-start-2" : "lg:row-start-1"
            )}
          >
            <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
              <PrismicText field={item.title} />
            </h3>
            <div className="mb-4 text-base text-slate-300 md:text-lg">
              <PrismicRichText field={item.body} />
            </div>
            <PrismicNextImage
              field={item.image}
              className="w-full h-auto max-h-64 rounded-md object-cover"
            />
          </div>
        ))}
      </div>

      <div className="p-4 mt-8 mb-2">
      {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
        
          </ButtonLink>

        )}
      </div>
    </Bounded>
  );
};

export default Bento;
