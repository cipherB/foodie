import React from 'react'

const Base = ({title, subtitle}) => {
    return (
        <div className="container-fluid Base1">
            <div className="container-fluid Base2" >
                <h1 className="base-title" >{title} </h1>
                <h4 className="base-subtitle" >{subtitle} </h4>
            </div>
        </div>
    )
};

export default Base;
