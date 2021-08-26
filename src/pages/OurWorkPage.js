import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

// Images
import athlete_image from '../img/athlete-small.png';
import racer_image from '../img/theracer-small.png';
import goodtimes_image from '../img/goodtimes-small.png';

function OurWorkPage() {
    return (
        <StyledWorkLayout>
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete_image} alt="athlete" />
                </Link>
            </StyledMovie>

            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={racer_image} alt="racer" />
                </Link>
            </StyledMovie>

            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes_image} alt="good times" />
                </Link>
            </StyledMovie>
        </StyledWorkLayout>
    );
}

const StyledWorkLayout = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled.div`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWorkPage;
