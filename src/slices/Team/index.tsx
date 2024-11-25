import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaLinkedin } from "react-icons/fa";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 px-6 py-12"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-4 text-lg text-gray-300 md:text-xl">
                {children}
              </p>
            ),
          }}
        />
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {slice.primary.teamcard.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-gray-700 to-gray-800 transition-transform duration-300 hover:scale-105"
          >
            {/* Profile Picture */}
            <div className="w-full h-96 relative">
              <PrismicNextImage
                field={item.profilepic}
                className="absolute inset-0 w-full h-94 object-cover object-center"
              />
            </div>

            {/* Sliding Overlay */}
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-xl font-semibold text-white">
                <PrismicRichText field={item.name} />
              </h3>
              <p className="mt-2 text-gray-300">
                <PrismicRichText field={item.role} />
              </p>
              <PrismicNextLink
                field={item.icon}
                className="mt-4 flex items-center justify-center gap-2 text-blue-400 hover:text-blue-500"
              >
                <FaLinkedin className="text-2xl" />
                <span className="font-medium">View Profile</span>
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
