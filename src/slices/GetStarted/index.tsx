"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaCalendar, FaRocket, FaWpforms, FaArrowAltCircleRight } from "react-icons/fa";
import { InlineWidget } from "react-calendly";
import clsx from "clsx";

/**
 * Props for `GetStarted`.
 */
export type GetStartedProps = SliceComponentProps<Content.GetStartedSlice>;

/**
 * Component for "GetStarted" Slices.
 */
const GetStarted = ({ slice, ...restProps }: GetStartedProps): JSX.Element => {
  const icons = {
    rocketShip: <FaRocket size={40} />,
    calendar: <FaCalendar size={40} />,
    form: <FaWpforms size={40} />,
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-6 text-white"
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
      {slice.primary.body && (
        <div className="mt-6 text-center">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-center relative">
        {slice.primary.steps_cards.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "glass-container rounded-lg w-full max-w-xs p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300",
              "border border-transparent mx-auto"
            )}
            style={{ height: "280px", minHeight: "280px" }} // Ensuring consistent card size
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{icons[item.icon]}</div>

            {/* Header */}
            <PrismicRichText
              field={item.header}
              components={{
                heading4: ({ children }) => (
                  <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent mb-4">
                    {children}
                  </h4>
                ),
              }}
            />

            {/* Body */}
            <PrismicRichText
              field={item.body}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-sm md:text-base mb-4">{children}</p>
                ),
              }}
            />

            {/* Button */}
            <PrismicNextLink
              field={item.card_link}
              className={clsx(
                "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-blue-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-red-200/40 hover:text-blue-300 after:hover:bg-opacity-15 focus:ring-2"
              )}
              {...restProps}
            >
              {item.button_label}
            </PrismicNextLink>
          </div>
        ))}

        {/* Right Arrow Icons */}
        <div className="absolute top-1/2 left-[33%] transform -translate-y-1/2 text-4xl text-blue-200 hidden md:block">
          <FaArrowAltCircleRight />
        </div>
        <div className="absolute top-1/2 left-[66%] transform -translate-y-1/2 text-4xl text-blue-200 hidden md:block">
          <FaArrowAltCircleRight />
        </div>
      </div>

      {/* Calendly Schedule */}
      <div className="mt-12">
        <InlineWidget
          url="https://calendly.com/byteflowservices/30min?hide_gdpr_banner=1&background_color=121111&text_color=ffffff&primary_color=8ca4c7"
          styles={{
            height: "600px",
            width: "100%",
            border: "none",
          }}
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
    </section>
  );
};

export default GetStarted;
