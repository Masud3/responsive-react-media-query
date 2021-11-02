import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, price, description, img } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;