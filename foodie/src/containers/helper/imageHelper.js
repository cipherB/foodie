import React from 'react'

const ImageHelper = ({picture, classname='rounded border border-danger img-help'}) => {
    const imageUrl = picture; 


    return (
        <div className={classname} >
            <img src={ imageUrl }
                alt="promo"
            /> 
        </div>
    )
};

export default ImageHelper;
