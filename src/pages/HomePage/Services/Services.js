import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    //load data from db
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    

    return (
        <div>
            <Container>
                <h1 className='my-5 text-center'>Our Awesome <span className='text-danger'>Services</span></h1>
                <Row className='all_services'>
                   {
                       services.map(service => <Service key={service._id} service={service}></Service>)
                   } 
                </Row>
                
            </Container>
        </div>
    );
};

export default Services;


{/* <Col>
                        <div className='service_card'>
                            <h4>Anti Age Face Treatment</h4>
                            <h5 className='text-danger'>$66</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis tenetur aspernatur placeat vel nostrum ipsa quo architecto quae minus!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='service_card shadow p-3 mb-5 bg-body rounded'>
                            <h4>Hair Color & Styling</h4>
                            <h5 className='text-danger'>$99</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis tenetur aspernatur placeat vel nostrum ipsa quo architecto quae minus!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='service_card'>
                            <h4>Skin Care Treatment</h4>
                            <h5 className='text-danger'>$266</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis tenetur aspernatur placeat vel nostrum ipsa quo architecto quae minus!</p>
                        </div>
                    </Col> */}