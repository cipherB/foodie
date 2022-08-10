import React, { useState, useEffect } from 'react';
import Base from '../components/Base';
import Card from '../components/Card';
import { getProducts } from './helper/ProductApiCall';

const Promo = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
        .then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setProducts(data);
                console.log('data', data)
            }
        });

    };

    
    // const items = Products[0].results;

    useEffect(() => {
        loadAllProducts();
        console.log('info', products)
    }, [])

    return (
        <div>
            <Base title="Menu" subtitle="May we take your order" />
            <div className="container ">
                <nav id="menu-cat" className="navbar bg-light px-1 sticky-top" style={{zIndex:4}}>
                    <ul className="nav nav-pills">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#dishes">Dishes</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#deserts">Deserts</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#drinks">Drinks</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" href="/cart"><i className="fa fa-shopping-cart" style={{color: "white"}} /> </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h4 id="dishes">Dishes</h4>
                    <div className="row">
                        {
                            (products && products.map((items) => {
                                return (
                                    <div >
                                        {(items.category === 1 ? (
                                            <div  className="menu_bod">
                                            <Card product={items} />
                                        </div>
                                        ): null)}
                                    </div>
                                )
                            }))
                        }
                    </div>
                    <h4 id="deserts">Deserts</h4>
                    <div className="row">
                        {
                            (products && products.map((items) => {
                                return (
                                    <div >
                                    {(items.category === 2 ? (
                                            <div>
                                                <Card product={items} />
                                            </div>
                                        ): null)}
                                    </div>
                                )
                            }))
                        }
                    </div>
                    <h4 id="drinks">Drinks</h4>
                    <div className="row">
                        {
                            (products && products.map((items) => {
                                return (
                                    <div >
                                        {(items.category === 3 ? (
                                            <div>
                                                <Card product={items} />
                                            </div>
                                        ): null)}
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Promo;
