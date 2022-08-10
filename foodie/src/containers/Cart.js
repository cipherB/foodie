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
            <div className='container' >
                <div className='row' >
                    {products.map((product, index) => (
                        <div  className="menu_bod col">
                            <Card 
                                key={index}
                                product={product}
                                removeFromCart={true}
                                addtoCart={false}
                                reload={reload}
                                setReload={setReload}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div style={{overflowX:"hidden", position:'relative'}} >
            <Base title="Cart" />
            <div className="row text-center" style={{paddingBottom:"140px"}} >
                <div>
                    <button className="bg-info p-3 menu_button_hide" ><a href="/menu" >Menu</a></button>
                    {(products !== null) || (products.length > 0) ? (loadAllProducts(products)) : (
                    <h4 className="mx-3" >No products</h4>)}
                </div>
            </div>
            <div className="bg-dark text-light mt-5 p-3 " style={{position:"absolute",bottom:0, width:"100%"}} >
                    {
                        cart.map((prices) => {
                            sum += prices.price;
                        })
                    }
                    <p style={{marginRight: "10%", width:"5em", fontSize:"1.3em"}} >SumTotal: {sum} </p>
                </div>
        </div>
    )
};

export default Cart;
