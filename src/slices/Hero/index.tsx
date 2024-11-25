import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import CircleGrid from "@/components/CircleGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <div // change to div or section later
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center mt-10"
    >
      <div className="relative">
        
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-balanced text-center text-5xl font-medium md:text-7xl">
            <PrismicRichText field={slice.primary.heading} />
          </h1>
          
        )}

        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 mb-8 max-w-md text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
          

        )}
        
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
        
          </ButtonLink>

        )}

        <Bounded className="-mt-20">
          {isFilled.image(slice.primary.image) && (
            <div className="glass-container mt-16 w-fit">
              <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
              <PrismicNextImage className="rounded-lg" field={slice.primary.image} />
            </div>
            

          )}
          
        </Bounded>



        

      </div>
    </div>
  );
};

export default Hero;
