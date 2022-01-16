import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useForm } from "react-hook-form"
import useAuth from '../../../hooks/useAuth';
import './Book.css'
import { Alert } from 'react-bootstrap';
const Book = () => {
    const [service, setService] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const {bookingId} = useParams();
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                setBookingSuccess(true)
                reset()
            }
        })
        console.log(data);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${bookingId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]);

    return (
        <div> 
            <div className="booking-form-area">
                
            <div className="booking-form">
                <h2 className='text-center'>Book</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} placeholder='name'/>
                    <input {...register("email")} value={user.email} placeholder='email'/>
                    <input {...register("service name")} value={service.name} placeholder='service name'/>                 
                    <input type="submit" />
                </form>
                <Alert variant='success' className='mt-3'>
                    order Booked Successfully.
                </Alert>
            </div>
            </div>
        </div>
    );
};

export default Book;