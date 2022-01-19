import React, { useState } from 'react';
import './AddService.css';

const AddService = () => {
    const [serviceData, setServiceData] = useState({})
    const handelOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newServiceData = {...serviceData}
        newServiceData[field] = value;
        setServiceData(newServiceData);
        
    }
    const handleServiceSubmit = e =>{
        e.preventDefault()
        const service = serviceData;
        fetch('http://localhost:5000/services', {
            method:"POST",
            headers:{
                "Content-type": 'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('service added successfully.')
            }
        })

    }
    return (
        <div>
            <div className="add_service">
                    <h2 id='add_service_title'>Add Your Service
                  </h2>
              <div className="add_service_content">
                  
                  <div className="input_field">
                      <form onSubmit={handleServiceSubmit}>
                        <input type="text" name='name' onBlur={handelOnBlur} placeholder='service-title'/>
                        <input type="number" name="price" onBlur={handelOnBlur} placeholder='price'/>
                        <textarea name="description" onBlur={handelOnBlur} id="" cols="10" rows="10" placeholder='service details'></textarea>
                        <button type='submit' className='d-block m-auto btn btn-danger w-25'>Submit</button>
                      </form>
                  </div>
                  
              </div>
          </div> 
        </div>
    );
};

export default AddService;