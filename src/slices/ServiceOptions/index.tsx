
'use client'
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * Props for `ServiceOptions`.
 */
export type ServiceOptionsProps = SliceComponentProps<Content.ServiceOptionsSlice>;

/**
 * Component for "ServiceOptions" Slices.
 */
const ServiceOptions = ({ slice }: ServiceOptionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-16 flex flex-col items-center justify-center"
    >
      {/* Section Heading */}
      <div className="text-center text-white w-full max-w-4xl mb-16 animate-fade-in">
        {slice.primary.headline && (
          <PrismicRichText
            field={slice.primary.headline}
            components={{
              heading3: ({ children }) => (
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent mb-6">
                  {children}
                </h3>
              ),
            }}
          />
        )}
        {slice.primary.text && (
          <PrismicRichText
            field={slice.primary.text}
            components={{
              paragraph: ({ children }) => (
                <p className="text-lg md:text-xl text-gray-300">{children}</p>
              ),
            }}
          />
        )}
      </div>

      {/* Services List */}
      <motion.div 
        className="w-full max-w-screen-xl flex flex-col gap-12"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {slice.primary.services_list.slice(0, 10).map((item, index) => (
          <motion.div 
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 p-8 bg-gradient-to-b from-gray-800 to-gray-700 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.1 }} 
          >
            {/* Service Icon */}
            {item.icon_illustration && (
              <div className="w-full max-w-xs lg:max-w-sm flex-shrink-0">
                <PrismicNextImage
                  field={item.icon_illustration}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {/* Service Content */}
            <div className="flex-1 flex flex-col gap-6 text-white">
              {item.service_name && (
                <PrismicRichText
                  field={item.service_name}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {children}
                      </h3>
                    ),
                  }}
                />
              )}
              {item.description && (
                <PrismicRichText
                  field={item.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {children}
                      </p>
                    ),
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceOptions;
