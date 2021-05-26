import React, { useState, useEffect } from 'react';
import Base from '../components/Base';
import { getInfo } from './helper/InfoApiCall';

const About = () => {
    const [about, setAbout] = useState([]);
    const [error, setError] = useState(false);

    const loadAllInfos = () => {
        getInfo()
        .then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setAbout(data);
                console.log('data', data)
            }
        });

    };

    
    // const items = infos[0].results;

    useEffect(() => {
        loadAllInfos();
        console.log('info', about)
    }, [])

    return (
        <div>
            <Base title="About Us" />
            <div class="row">
                {
                    (about && about.map((items) => {
                        return (
                            <div >
                                {((items.title !== "Promo" && items.title !== "Just Picture") ? (
                                    <div class="grid">
                                        <h3 className="grid_title" >{items.title} </h3>
                                        <img className="grid_img" src={items.image} alt="about" />
                                        <p className="grid_text" ><strong>{items.description} </strong></p>
                                    </div>
                                ): null)}
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    )
};

export default About;
