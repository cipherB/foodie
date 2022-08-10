import React from 'react'

const FancyButton = () => {
    return (
        <div className="fancy">
            <div className='fancy-text' >
                <h1 className="fancy-text-header" >
                    The Perfect Meal.
                </h1>
                <p className='fancy-text-paragraph' >
                    You can place your order or visit our nearest restaurant
                    to have a taste of our delicious meals that is sure to soothe your tastebuds.
                </p>
            </div>
            <button className="fancy-button">
                <a href="/menu">Menu</a>
                <div className="fancy-button__horizontal"></div>
                <div className="fancy-button__vertical"></div>
            </button>
        </div>
    )
};

export default FancyButton;
