import styled from 'styled-components/macro';
import {
    StyledLayout,
    StyledDescription,
    StyledImageDiv,
    StyledHide,
} from '../styles';
import Toggle from './Toogle';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { scrollRevealAnim } from '../animation';
import { useScroll } from './useScroll';

// Todo:
// div.question isn't clickable because it isn't in Toggle element

function FaqSection() {
    // scroll animation controls
    const [faqSection, faqScrollAnimControls] = useScroll();

    return (
        <StyledFaqLayout
            // Scroll animation
            ref={faqSection}
            variants={scrollRevealAnim}
            initial="hidden"
            animate={faqScrollAnimControls}
        >
            <h2>
                Any Questions <span>FAQ</span>
            </h2>

            <AnimateSharedLayout>
                <div className="question">
                    <Toggle title="How Do I Start?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, officiis.
                            </p>
                        </div>
                    </Toggle>
                    <motion.div layout className="faq-line"></motion.div>
                </div>

                <div className="question">
                    <Toggle title="Daily Schedule">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, officiis.
                            </p>
                        </div>
                    </Toggle>
                    <motion.div layout className="faq-line"></motion.div>
                </div>

                <div className="question">
                    <Toggle title="Different Payment Methods">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, officiis.
                            </p>
                        </div>
                    </Toggle>
                    <motion.div layout className="faq-line"></motion.div>
                </div>

                <div className="question">
                    <Toggle title="What Products Do You Offer?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, officiis.
                            </p>
                        </div>
                    </Toggle>
                    <motion.div layout className="faq-line"></motion.div>
                </div>
            </AnimateSharedLayout>
        </StyledFaqLayout>
    );
}

const StyledFaqLayout = styled(StyledLayout)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
