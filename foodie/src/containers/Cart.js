import React, { useEffect, useState } from 'react';
import Base from '../components/Base';
import Card from '../components/Card';
import { loadCart } from '../containers/helper/CartHelper';

const Cart = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload])

    const cart = JSON.parse(localStorage.getItem('cart'));
    var sum = 0;

    const loadAllProducts = (products) => {
        return(
            <div>
                {products.map((product, index) => (
                    <Card 
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                        reload={reload}
                        setReload={setReload}
                    />
                ))}
            </div>
        )
    }

    return (
        <div>
            <Base title="Cart page" />
            <div className="row text-center">
                <div>
                    <button className="bg-info p-3 menu_button_hide" ><a href="/menu" >Menu</a></button>
                    {products.length > 0 ? (loadAllProducts(products)) : (
                    <h4 className="mx-3" >No products</h4>)}
                </div>
            </div>
            <div className="bg-dark text-light my-5 p-3">
                    {
                        cart.map((prices) => {
                            sum += prices.price;
                        })
                    }
                    <p style={{marginRight: "10%", maxWidth:"5em", fontSize:"1.3em"}} >SumTotal: {sum} </p>
                </div>
        </div>
    )
};

export default Cart;
