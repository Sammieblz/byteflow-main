"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import clsx from "clsx";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

const Pricing = ({ slice, ...restProps }: PricingProps): JSX.Element => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleConsultationClick = () => {
    setShowCalendar(true);
  };

  const closeCalendly = () => {
    setShowCalendar(false);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-16"
    >
      {/* Heading */}
      <div className="text-center text-white mb-12">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-teal-300 to-blue-500 bg-clip-text text-transparent my-4">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-4 text-lg md:text-xl text-gray-300">{children}</p>
            ),
          }}
        />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {slice.primary.pricecards.map((item, index) => {
          const cardThemes = [
            "glass-container bg-gradient-to-b from-gray-400 to-gray-600", // Silver
            "glass-container bg-gradient-to-b from-yellow-600 to-yellow-900", // Gold
            "glass-container bg-gradient-to-b from-gray-800 to-gray-500", // Platinum
          ];
          return (
            <div
              key={index}
              className={`rounded-lg shadow-lg text-white p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 ${cardThemes[index % 3]}`}
            >
              {/* Card Heading */}
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-b from-red-600 to-blue-700 bg-clip-text text-transparent">
                <PrismicRichText field={item.heading} />
              </h3>

              {/* Card Body */}
              <ol className="list-disc list-inside text-left space-y-2 text-gray-200">
                <PrismicRichText
                  field={item.body}
                  components={{
                    paragraph: ({ children }) => (
                      <li className="text-base">{children}</li>
                    ),
                  }}
                />
              </ol>
            </div>
          );
        })}
      </div>

      {/* Consultation Button */}
      <button
        onClick={handleConsultationClick}
        className={clsx(
          "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-md border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-blue-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-red-200/40 hover:text-blue-300 after:hover:bg-opacity-15 focus:ring-2 mt-10"
        )}
        {...restProps}
      >
        Get Consultation
      </button>

      {/* Calendly Widget */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg relative max-w-2xl w-full">
            <button
              onClick={closeCalendly}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <InlineWidget
              url="https://calendly.com/byteflowservices"
              styles={{ height: "500px", width: "100%" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
