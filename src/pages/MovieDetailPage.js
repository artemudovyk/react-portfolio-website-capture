import styled from 'styled-components/macro';
import { MovieState } from '../movieState';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitionAnim } from '../animation';

function MovieDetailPage() {
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    const history = useHistory();
    const url = history.location.pathname;

    useEffect(() => {
        const currentMovie = movies.find((movie) => movie.url === url);
        setMovie(currentMovie);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <StyledDetails
                    variants={pageTransitionAnim}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <StyledHeadline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title} />
                    </StyledHeadline>
                    <StyledAwards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={movie.secondaryImg} alt={movie.title} />
                    </StyledImageDisplay>
                </StyledDetails>
            )}
        </>
    );
}

// Award Component
function Award({ title, description }) {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
}

// Styled
const StyledDetails = styled(motion.div)`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1300px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }

    p {
        padding: 2rem 0rem;
    }
`;

const StyledImageDisplay = styled.div`
    min-height: 50vh;

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

export default MovieDetailPage;
