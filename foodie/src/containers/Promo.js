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
        <div class="container">
            <Base title="Promo" />
            <div class="row">
                {
                    (promo && promo.map((items) => {
                        return (
                            <div >
                                {(items.title === "Promo" ? (
                                    <div class="col-md proms text-danger lead text-capitalize text-monospace">
                                        <ImageHelper picture={items.image} classname="col-md rounded border border-danger img-promo" />
                                        <p><strong>{items.description} </strong></p>
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

export default Promo;
