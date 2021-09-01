// Images
import athlete_image from '../img/athlete-small.png';
import racer_image from '../img/theracer-small.png';
import goodtimes_image from '../img/goodtimes-small.png';

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    pageTransitionAnim,
    fadeAnim,
    imageAnim,
    lineAnim,
    scrollRevealAnim,
    // sliderAnim,
    // sliderContainerAnim,
} from '../animation';
import { useScroll } from '../components/useScroll';



function OurWorkPage() {
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <StyledWorkLayout
            variants={pageTransitionAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* <motion.div variants={sliderContainerAnim}>
                <Frame1 variants={sliderAnim}></Frame1>
                <Frame2 variants={sliderAnim}></Frame2>
                <Frame3 variants={sliderAnim}></Frame3>
                <Frame4 variants={sliderAnim}></Frame4>
            </motion.div> */}

            <StyledMovie>
                <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <StyledHide>
                        <motion.img
                            variants={imageAnim}
                            src={athlete_image}
                            alt="athlete"
                        />
                    </StyledHide>
                </Link>
            </StyledMovie>

            <StyledMovie ref={element1} variants={scrollRevealAnim} animate={controls1} initial="hidden">
                <motion.h2 variants={fadeAnim}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <StyledHide>
                        <motion.img
                            variants={imageAnim}
                            src={racer_image}
                            alt="racer"
                        />
                    </StyledHide>
                </Link>
            </StyledMovie>

            <StyledMovie ref={element2} variants={scrollRevealAnim} animate={controls2} initial="hidden">
                <motion.h2 variants={fadeAnim}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <StyledHide>
                        <motion.img
                            variants={imageAnim}
                            src={goodtimes_image}
                            alt="good times"
                        />
                    </StyledHide>
                </Link>
            </StyledMovie>
        </StyledWorkLayout>
    );
}

const StyledWorkLayout = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        color: white;
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledHide = styled.div`
    overflow: hidden;
`;

// Frame Animation
// const Frame1 = styled(motion.div)`
//     position: fixed;
//     left: 0;
//     top: 10%;
//     width: 100%;
//     height: 100vh;
//     background: #fffebf;
//     z-index: 2;
// `;

// const Frame2 = styled(Frame1)`
//     background: #ff8efb;
// `;

// const Frame3 = styled(Frame1)`
//     background: #8ed2ff;
// `;

// const Frame4 = styled(Frame1)`
//     background: #8effa0;
// `;

export default OurWorkPage;
