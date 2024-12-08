import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import CircleGrid from "@/components/CircleGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

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
      <AnimatedContent slice={slice}/>
    </div>
  );
};

export default Hero;
