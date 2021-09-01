import { motion } from 'framer-motion';
import { pageTransitionAnim, titleAnim } from '../animation';
import styled from 'styled-components';
import { StyledHide, StyledTitle } from '../styles';

function ContactUsPage() {
    return (
        <StyledContactLayout
            variants={pageTransitionAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <StyledTitle>
                <motion.h2 variants={titleAnim}>Contact Us</motion.h2>
            </StyledTitle>
            <div>
                <StyledHide>
                    <StyledSocialLinks variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send Us a Message</h2>
                    </StyledSocialLinks>
                </StyledHide>

                <StyledHide>
                    <StyledSocialLinks variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send an email</h2>
                    </StyledSocialLinks>
                </StyledHide>

                <StyledHide>
                    <StyledSocialLinks variants={titleAnim}>
                        <StyledCircle />
                        <h2>Social Media</h2>
                    </StyledSocialLinks>
                </StyledHide>
            </div>
        </StyledContactLayout>
    );
}

const StyledContactLayout = styled(motion.div)`
    padding: 5rem 10rem;
    color: #dddddd;
    min-height: 90vh;
`;

const StyledCircle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #dddddd;
`;

const StyledSocialLinks = styled(motion.div)`
    display: flex;
    align-items: center;

    h2 {
        margin: 2rem;
    }
`;

export default ContactUsPage;
