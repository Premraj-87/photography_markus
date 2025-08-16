import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

const Hero = () => {
  const images = [
    { src: image1, alt: "Photography sample 1" },
    { src: image2, alt: "Photography sample 2" },
    { src: image3, alt: "Photography sample 3" },
  ];

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="hero"
      className="flex flex-col min-h-screen px-4 py-10 md:py-16"
    >
      {/* Text Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mb-10 md:mb-16">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-light text-4xl leading-snug mt-10
                     sm:text-4xl sm:leading-snug
                     md:text-5xl md:leading-tight
                     lg:text-4xl lg:leading-tight lg:mt-5"
        >
          Bringing your memories to life through the art of photography. Creating
          images that speak from the heart and last forever.
        </motion.h1>
      </div>

      {/* Images Section */}
      <div
        className="
          flex gap-4 w-full mt-auto overflow-x-auto 
          sm:grid sm:grid-cols-2 md:grid-cols-3 
          scrollbar-hide
        "
      >
        {images.map((img, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: false,
          });

          return (
            <motion.img
              key={index}
              ref={ref}
              src={img.src}
              alt={img.alt}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.95 }
              }
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="w-64 h-64 sm:w-full sm:h-72 md:h-80 object-cover shadow-lg flex-shrink-0"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
