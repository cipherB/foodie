import React from 'react'

const Base = ({title, subtitle}) => {
    return (
        <div className=" base">
            <div className="base-contain">
                <h1 className="base-title" >{title} </h1>
                <p className="base-subtitle" >{subtitle} </p>
            </div>
        </div>
    )
};

export default Base;
