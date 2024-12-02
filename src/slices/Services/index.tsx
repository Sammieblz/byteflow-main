import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-10 flex flex-col items-center justify-center"
    >
      {/* Content Container */}
      <div className="w-full max-w-6xl text-center flex flex-col items-center gap-8 animate-fade-in">
        {/* Header */}
        {slice.primary.header && (
          <PrismicRichText
            field={slice.primary.header}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent mb-4">
                  {children}
                </h2>
              ),
            }}
          />
        )}

        {/* Subtitle */}
        {slice.primary.subtitle && (
          <PrismicRichText
            field={slice.primary.subtitle}
            components={{
              paragraph: ({ children }) => (
                <p className="text-lg md:text-xl text-gray-300">
                  {children}
                </p>
              ),
            }}
          />
        )}

        {/* Scroll Icon */}
        {slice.primary.scroll_icon && (
          <div className="mt-8 flex justify-center">
            <PrismicNextImage
              field={slice.primary.scroll_icon}
              className="w-12 h-12 md:w-16 md:h-16 animate-bounce"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
