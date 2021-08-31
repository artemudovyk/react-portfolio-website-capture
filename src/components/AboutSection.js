import home_image from '../img/home1.png';
import {
    StyledLayout,
    StyledDescription,
    StyledImageDiv,
    StyledHide,
} from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fadeAnim, imageAnim } from '../animation';
import Wave from './Wave';

function AboutSection() {
    return (
        <StyledLayout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>true</motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fadeAnim}>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fadeAnim}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImageDiv>
                <motion.img variants={imageAnim} src={home_image} alt="guy with a camera" />
            </StyledImageDiv>
            <Wave />
        </StyledLayout>
    );
}

export default AboutSection;
