import React, {useEffect, useState} from 'react';
import Banner from '../components/Banner';
import FancyButton from '../components/FancyButton';
import ImageHelper from './helper/imageHelper';
import { getInfo } from './helper/InfoApiCall';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgDef from '../assets/foodies-logo.png';
import Footer from '../components/Footer';

const Home = () => {

    const [infos, setInfos] = useState([]);
    const [error, setError] = useState(false);

    const loadAllInfos = () => {
        getInfo()
        .then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setInfos(data);
                console.log('data', data)
            }
        });

    };

    
    // const items = infos[0].results;

    useEffect(() => {
        loadAllInfos();
        console.log('info', infos)
    }, [])


    return (
        <div className="" >
            <FancyButton />
            <div class="home_text">
                <p>We have lots of promotional events. So why not come over, order to benefit from them</p>
            </div>
            <Banner title="Promo" />
            <div>
                {
                    (infos && infos.map((info, index) => {
                        return (
                            <div key={index}>
                                {(info.id === 6) ? (<ImageHelper picture={info.image} />) : null}
                            </div>
                        )
                    }))
                }
            </div>
            <div class="home_text">
                <p>Amazing Services and beautiful scenery to enhance your dining experiences</p>
            </div>
            <Banner title="pics" />
            <Carousel autoPlay={true} infiniteLoop='true' className="cars">
                {
                    (infos && infos.map((info) => {
                        return (
                            <div>
                                {(info.title !== "Promo") ? (
                                    <div>
                                        <img src={info.image} alt="carsel" />
                                        <p className="legend">{info.title} </p>
                                    </div>
                                ) : (<div><img src={imgDef} alt="foodies" /></div>) }
                            </div>
                        )
                    }))
                }
            </Carousel>
            <Footer />
        </div>
    )
};

export default Home;
