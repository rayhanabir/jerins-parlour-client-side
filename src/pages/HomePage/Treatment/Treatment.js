import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facial from '../../../Image/facial.png'

const Treatment = () => {
    return (
        <div>
           <Container className="my-5 ">
                <Row className='d-flex align-items-center'>
                    <Col>
                        <img width={'100%'} src={facial} alt="" />
                    </Col> 
                    <Col>
                        <div className="facial_container ms-4">
                            <h2>Let us Handle <br />
                             your Screen <span className='text-danger'>Professionaly</span>.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, nemo mollitia, voluptatibus architecto, incidunt quia quos sapiente cumque enim illo quibusdam officiis animi asperiores! </p>
                            <div className='d-flex'>
                                <div className="customer me-5">
                                    <h4 className='text-danger'>500+</h4>
                                    <p><small>Happy Customer</small></p>
                                </div>
                                <div className="total_service">
                                    <h4 className='text-danger'>16+</h4>
                                    <p><small>Total services</small></p>
                                </div>
                            </div>
                        </div>
                    </Col>   
                </Row>   
            </Container> 
        </div>
    );
};

export default Treatment;