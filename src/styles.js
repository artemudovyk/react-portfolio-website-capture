import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

// Styled Components
export const StyledLayout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5 rem;
    z-index: 2;

    h2 {
        font-weight: lighter;
    }
`;

export const StyledImageDiv = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledTitle = styled.div`
    margin-bottom: 4rem;
    color: white;
`;

export const StyledHide = styled.div`
    overflow: hidden;
`;
