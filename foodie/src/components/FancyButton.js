import React from 'react'

const FancyButton = () => {
    return (
        <div className="fancy">
            <h1 className="fancy-text" >Have a Taste</h1>
            <button className="fancy-button">
                <a href="/menu">Menu</a>
                <div className="fancy-button__horizontal"></div>
                <div className="fancy-button__vertical"></div>
            </button>
        </div>
    )
};

export default FancyButton;
