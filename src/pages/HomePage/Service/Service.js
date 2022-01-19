import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {name, price, description, _id} = props.service;
    const history = useHistory()
    const handleBookingClick = () =>{
        history.push(`/book/${_id}`)
    }
    return (
        <div>
            <div className="service_card shadow mb-2">
                <h3>{name}</h3>
                <h4 className='text-danger'>${price}</h4>
                <p>{description}</p>
               <button onClick={handleBookingClick} className='p-2 w-50 btn btn-danger'>Book</button>
            </div>
        </div>
    );
};

export default Service;