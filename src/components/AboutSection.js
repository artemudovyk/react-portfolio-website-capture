import home_image from '../img/home1.png';
import styled from 'styled-components/macro';
import { StyledLayout, StyledDescription, StyledImageDiv, StyledHide } from '../styles'

function AboutSection() {
    return (
        <StyledLayout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true</h2>
                    </StyledHide>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImageDiv>
                <img src={home_image} alt="guy with a camera" />
            </StyledImageDiv>
        </StyledLayout>
    );
}

export default AboutSection;
