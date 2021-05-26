import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../containers/helper/CartHelper';

const Card = ({
  product,
  isAuthenticated,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = f => f,
  // function(f) {return f}
}) => {

  const [redirect, setRedirect] = useState(false)

  const cardTitle = product ? product.name : "Bro nothing is showing";
//   const cardDescription = product ? product.description : "Bro desc sef isn't here";
  const cardPrice = product ? product.price : "How much?";

  const addToCart = () => {
    // if (isAuthenticated() {
    //   addItemToCart(product, ()=>{setRedirect(true)})
    //   console.log("Added to cart")
    // } else {
    //   console.log("Login Please!") //later create a redirect to signup page
    // }
    isAuthenticated ? addItemToCart(product, ()=>{setRedirect(true)}) && console.log("Added to cart")
    : console.log("Login Please!") //later create a redirect to signup page
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  };

  const showAddToCart = addToCart => {
    return(
      addtoCart && (
        <button
          onClick={addToCart}
          className="menu_button_show"
        >
          Add to Cart
        </button>
      )
    )
  }

  const authButton = () => {
    return(
        <button
          className="menu_button_hide"
        >
          <a href='/login' >Login</a>
        </button>
      )
  }

  const showRemoveFromCart = removeFromCart => {
    return(
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product.id)
            setReload(!reload)
            console.log("Product remove from cart")
          }}
          className="menu_button_rem"
        >
          Remove from cart
        </button>
      )
    )
  }

  return (
    // <div className="card text-white bg-dark border border-info ">
    //   <div className="card-header lead">{cardTitle} </div>
    //   <div className="card-body">
    //     {getRedirect(redirect)}
    //     <p className="lead bg-success font-weight-normal text-wrap">
    //       {cardDescription}
    //     </p>
    //     <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice} </p>
    //     <div className="row">
    //       <div className="col-12">
    //         {showAddToCart(addToCart)}
    //       </div>
    //       <div className="col-12">
    //         {showRemoveFromCart(removeFromCart)}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="menu">
        <img src={product.image} alt="deserts" className="menu_img" />
        <div className="menu_det">
            {getRedirect(redirect)}
            <p className="menu_name" >{cardTitle} </p>
            <p className="menu_price" >price: {cardPrice} <span className="menu_price_curr" >$</span> </p>
            {
                isAuthenticated ? (
                    <>
                        <div className="menu_button_sh">
                            {showAddToCart(addToCart)}
                        </div>
                        <div className="menu_button_re">
                            {showRemoveFromCart(removeFromCart)}
                        </div>
                    </>
                ) : (
                    <div className="menu_button_hi">
                        {authButton()}
                    </div>
                )
            }
        </div>
    </div>
  );
};


const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.token
});

export default connect(mapStateToProps, null)(Card);
