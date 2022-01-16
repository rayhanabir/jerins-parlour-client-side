import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {name, price, description, _id} = props.service;
    return (
        <div>
            <div className="service_card">
                <h3>{name}</h3>
                <h4 className='text-danger'>${price}</h4>
                <p>{description}</p>
               <Link ><button className='p-2 w-50 btn btn-danger'>Book</button></Link>
            </div>
        </div>
    );
};

export default Service;