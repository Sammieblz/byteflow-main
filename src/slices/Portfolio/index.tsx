import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio = ({ slice }: PortfolioProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} 
      components={{
        heading2: ({children}) => (
          <h2 className="text-balance text-center text-5xl font-medium md:text-7xl bg-gradient-to-b from-yellow-100 to-slate-500 bg-clip-text not-italic text-transparent">{children}</h2>
        ),
      }}
      
      />
    
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />

      </div>

     

    


      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full h-full">
          {slice.primary.projects.map((item, index) => (
            <div
              key={index}
              className={clsx(
                'p-4 glass-container rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
                'border border-transparent'
              )}
            >
              <h4 className="text-2xl font-bold mb-2">
                <PrismicRichText field={item.title} />
              </h4>
              <div className="text-slate-300 mb-4">
                <PrismicRichText field={item.body} />
              </div>
              <PrismicNextImage field={item.image} className="w-full h-auto rounded-md mb-4" />
              <PrismicNextLink field={item.see_more} className="text-slate-300 hover:text-blue-500 transform hover:scale-105 transition-transform duration-300">
                See More ➡️
              </PrismicNextLink>
            </div>
          ))}
        </div>
      </div>






    </Bounded>
  );
};

export default Portfolio;
