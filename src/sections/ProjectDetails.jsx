import { motion } from "framer-motion";
import leftImage from "../assets/images/image9.png";
import rightImage from "../assets/images/image10.png";
import image1 from "../assets/images/image11.png";
import image2 from "../assets/images/image12.png";
import image3 from "../assets/images/image13.png";

const ProjectDetails = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-bold text-lg mt-2 mb-4"
            >
                More About My Works
            </motion.div>

            {/* Top Images (Responsive) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="flex gap-4 mb-4 p-4 
                           flex-row lg:flex-row"
            >
                {/* Left Image */}
                <img
                    src={leftImage}
                    alt="Left"
                    className="w-1/3 lg:w-1/2 h-48 lg:h-[50vh] object-cover"
                />

                {/* Right Image */}
                <img
                    src={rightImage}
                    alt="Right"
                    className="w-2/3 lg:w-1/2 h-48 lg:h-[50vh] object-cover"
                />
            </motion.div>

            {/* Bottom Images */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-3 lg:w-1/3 lg:flex-row lg:gap-2 lg:justify-between lg:p-1"
            >
                <img src={image1} alt="Image 1" className="object-cover" />
                <img src={image2} alt="Image 2" className="object-cover" />
                <img src={image3} alt="Image 3" className="object-cover" />
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
