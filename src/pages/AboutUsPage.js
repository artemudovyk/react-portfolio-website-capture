import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import { motion } from 'framer-motion';
import { pageTransitionAnim } from '../animation';

function AboutUsPage() {
    return (
        <motion.div
            variants={pageTransitionAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUsPage;
