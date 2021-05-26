import React from 'react'

const Banner = ({title}) => {
    return (
        <div className="banner" >
            <i className="fa fa-utensils" id="icon"></i>
            <h1> {title} </h1>
        </div>
    )
};

export default Banner;
