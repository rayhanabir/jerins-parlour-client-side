import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import women from '../../../Image/women.png'
const TopBanner = () => {
    return (
        <div className='bg-light'>
            <Container>   
              <Row className='d-flex align-items-center'>
                  <Col>
                    <h1>BEAUTI SALOON <br />
                     FOR EVERY WOMEN</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate esse numquam tempore unde libero ea officiis illum pariatur placeat!</p>
                     <Button variant='danger'>Get an Appointment</Button>
                  </Col>
                  <Col>
                    <img width={'100%'} src={women} alt="" />
                  </Col>
              </Row>
            </Container>  
        </div>
    );
};

export default TopBanner;