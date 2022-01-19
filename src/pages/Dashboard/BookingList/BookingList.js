import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const BookingList = () => {
    const {user} = useAuth()
    const [bookinglist, setBookinglist] = useState([])
    useEffect(()=>{
        const url = `http://localhost:5000/booking?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            setBookinglist(data)
            console.log(data)
        })
    },[])
    return (
        <div>
           <h2>booking list</h2> 
           <div className="booking_card d-flex">
               {
                   bookinglist.map(booklist =><div className='shadow m-3 w-25 p-4' key={booklist._id}>
                        <h2>{booklist.name}</h2>
                        <h4>{booklist.serviceName}</h4>
                   </div>)
               }
           </div>
        </div>
    );
};

export default BookingList;