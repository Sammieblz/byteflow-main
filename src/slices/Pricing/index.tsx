"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

const Pricing = ({ slice }: PricingProps): JSX.Element => {
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
              <h2 className="text-4xl md:text-5xl font-bold text-teal-300">
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
            "bg-gradient-to-b from-gray-400 to-gray-600", // Silver
            "bg-gradient-to-b from-yellow-400 to-yellow-600", // Gold
            "bg-gradient-to-b from-gray-800 to-gray-500", // Platinum
          ];
          return (
            <div
              key={index}
              className={`rounded-lg shadow-lg text-white p-8 transition-transform duration-300 hover:scale-105 ${cardThemes[index % 3]}`}
            >
              <h3 className="text-2xl font-bold mb-4">
                <PrismicRichText field={item.heading} />
              </h3>
              <p className="text-lg text-gray-200">
                <PrismicRichText field={item.body} />
              </p>
            </div>
          );
        })}
      </div>

      {/* Consultation Button */}
      <button
        onClick={handleConsultationClick}
        className="mt-12 px-8 py-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 text-lg font-semibold"
      >
        Click for Consultation
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
              url="https://calendly.com/byteflowllc" 
              styles={{ height: "500px", width: "100%" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
