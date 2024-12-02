import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Ballet } from "next/font/google";
import { FaLightbulb, FaShieldAlt, FaHandshake, FaArrowUp, FaTrophy, FaBalanceScale } from "react-icons/fa";

/**
 * Props for `Values`.
 */
export type ValuesProps = SliceComponentProps<Content.ValuesSlice>;

/**
 * Component for "Values" Slices.
 */
const Values = ({ slice }: ValuesProps): JSX.Element => {
  const icons = {
    lightBulb: <FaLightbulb size={36}/>,
    shield: <FaShieldAlt size={36}/>,
    handShake: <FaHandshake size={36}/>,
    arrowUp: <FaArrowUp size={36}/>,
    trophy: <FaTrophy size={36}/>,
    balancedScale: <FaBalanceScale size={36}/>
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <PrismicRichText
          field={slice.primary.header}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent mb-4">{children}</h3>
            ),
          }}
        />
        {/* Headline */}
        <PrismicRichText
          field={slice.primary.headline}
          components={{
            paragraph: ({ children }) => (
              <p className="text-xl font-semibold">{children}</p>
            ),
          }}
        />
      </div>

      {/* Value Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {slice.primary.value_cards.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Icon */}
            <div className="h-20 w-20 bg-gray-700 flex items-center justify-center rounded-full mb-4 focus:ring-offset-3 relative border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-blue-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-red-200/40 hover:text-blue-300 after:hover:bg-opacity-15 focus:ring-2">
              {icons[item.icon]}
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
              {/* Heading */}
              {item.heading && (
                <PrismicRichText
                  field={item.heading}
                  components={{
                    heading4: ({ children }) => (
                      <h4 className="text-2xl font-semibold mb-2">{children}</h4>
                    ),
                  }}
                />
              )}
              {/* Text */}
              {item.text && (
                <PrismicRichText
                  field={item.text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-sm">{children}</p>
                    ),
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Values;
