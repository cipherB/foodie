import React, { useState, useEffect } from 'react';
import Base from '../components/Base';
import ImageHelper from './helper/imageHelper';
import { getInfo } from './helper/InfoApiCall';

const Promo = () => {
    const [promo, setPromo] = useState([]);
    const [error, setError] = useState(false);

    const loadAllInfos = () => {
        getInfo()
        .then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setPromo(data);
                console.log('data', data)
            }
        });

    };

    
    // const items = infos[0].results;

    useEffect(() => {
        loadAllInfos();
        console.log('info', promo)
    }, [])

    return (
        <div>
            <Base title="Promo" />
            <div class="container">
                <div className="row">
                    {
                        (promo && promo.map((items, key) => (items.title === "Promo" ? (
                                <div id={key} className="my-4 col" >
                                        <div class="lead text-capitalize py-2 text-center promo-contain">
                                            <ImageHelper picture={items.image} classname="rounded img-help d-flex justify-content-center" />
                                            <p><strong>{items.description} </strong></p>
                                        </div>
                                </div>
                            ): null)
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Promo;
