// Import icons and images
import clock_icon from '../img/clock.svg';
import diaphragm_icon from '../img/diaphragm.svg';
import money_icon from '../img/money.svg';
import teamwork_icon from '../img/teamwork.svg';
import home_image from '../img/home2.png';
// Import styles
import styled from 'styled-components/macro';
import { StyledLayout, StyledDescription, StyledImageDiv } from '../styles';
import { scrollRevealAnim } from '../animation';
import { useScroll } from './useScroll';

function ServicesSection() {
    // Scroll animation controls
    const [servicesSection, servicesScrollAnimControls] = useScroll();

    return (
        <StyledServicesLayout
            // Scroll animation
            ref={servicesSection}
            variants={scrollRevealAnim}
            initial="hidden"
            animate={servicesScrollAnimControls}
        >
            <StyledDescription>
                <h2>
                    High <span>quality</span> services
                </h2>

                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock_icon} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork_icon} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm_icon} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <img src={money_icon} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>

            <StyledImageDiv>
                <img src={home_image} alt="camera" />
            </StyledImageDiv>
        </StyledServicesLayout>
    );
}

const StyledServicesLayout = styled(StyledLayout)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;
