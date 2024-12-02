import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Construction`.
 */
export type ConstructionProps = SliceComponentProps<Content.ConstructionSlice>;

/**
 * Component for "Construction" Slices.
 */
const Construction = ({ slice }: ConstructionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-screen items-center justify-center px-6 py-12"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Heading */}
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {children}
              </h2>
            ),
          }}
        />

        {/* Body */}
        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {children}
              </p>
            ),
          }}
        />

        {/* Image */}
        <div className="w-full max-w-xs mx-auto">
          <PrismicNextImage
            field={slice.primary.image}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Construction;
