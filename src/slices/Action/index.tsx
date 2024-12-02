import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx"

/**
 * Props for `Action`.
 */
export type ActionProps = SliceComponentProps<Content.ActionSlice>;

/**
 * Component for "Action" Slices.
 */
const Action = ({ slice }: ActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        
        <PrismicRichText
          field={slice.primary.header}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-center text-4xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent">
                {children}
              </h3>
            ),
          }}
        
        />
        

        {/* Text */}
        <p className="text-lg mb-6 mt-4">
          <PrismicRichText
            field={slice.primary.text}
            
          />
        </p>
     

        {/* Button */}
        <div className="mt-6">
          <PrismicNextLink
            field={slice.primary.button_link}
            className={clsx( "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-blue-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-red-200/40 hover:text-blue-300 after:hover:bg-opacity-15 focus:ring-2")}
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>

      </div>
    </section>
  );
};

export default Action;
