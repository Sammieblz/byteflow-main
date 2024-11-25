"use client";

import ContactForm from "@/components/ContactForm";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type Hero2Props = SliceComponentProps<Content.Hero2Slice>;

const Hero2 = ({ slice }: Hero2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center px-6 py-16"
    >
      <div className="w-full max-w-7xl text-center text-white">
  

        {/* Title */}
        {isFilled.richText(slice.primary.title) && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-b from-teal-300 to-blue-500 bg-clip-text text-transparent my-6">
            <PrismicRichText field={slice.primary.title} />
          </h1>
        )}
      </div>

      <div
        className={`flex flex-col lg:flex-row w-full max-w-7xl items-center gap-10 mt-10 ${
          slice.variation === "imageRight"
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        }`}
      >
        {/* Image Section */}
        {isFilled.image(slice.primary.image) && (
          <div className="flex-1 flex justify-center">
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Contact Form */}
        <div className="flex-1 w-full mt-10 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
