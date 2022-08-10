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
            <Base title="About Us" subtitle="Get to know who we are." />
            <div class="container about">
                {
                    (about && about.map((items) => {
                        return (
                            <div >
                                {((items.title !== "Promo" && items.title !== "Just Picture") ? (
                                    <div class="row mb-4">
                                        <div className='col' >
                                            <div className='about_img_contain' >
                                                <img className="about_img mb-3" src={items.image} alt="about" />
                                            </div>
                                        </div>
                                        <div className='col' >
                                            <h3 className="about_title" >{items.title} </h3>
                                            <p className="about_text" >{items.description}</p>
                                        </div>
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
