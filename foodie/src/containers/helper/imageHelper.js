import React from 'react'

const ImageHelper = ({picture, classname='rounded img-help'}) => {
    const imageUrl = picture; 


    return (
        <div className={classname} >
            <img 
                src={ imageUrl }
                className="img-promo"
                alt="promo"
            /> 
        </div>
    )
};

export default ImageHelper;
