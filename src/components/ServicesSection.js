// import icons and images
import clock_icon from '../img/clock.svg';
import diaphragm_icon from '../img/diaphragm.svg';
import money_icon from '../img/money.svg';
import teamwork_icon from '../img/teamwork.svg';
import home_image from '../img/home2.png'

function ServicesSection() {
    return (
        <div className="services">
            <div className="description">
                <h2>
                    Hight <span>quality</span> services
                </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock_icon} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork_icon} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm_icon} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money_icon} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home_image} alt="camera" />
            </div>
        </div>
    );
}

export default ServicesSection;
