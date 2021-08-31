import { motion } from 'framer-motion';
import { pageTransitionAnim } from '../animation';

function ContactUsPage() {
    return (
        <motion.div
            variants={pageTransitionAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1>Contact Us</h1>
        </motion.div>
    );
}

export default ContactUsPage;
