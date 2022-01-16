import React from 'react';
import './Feedback.css'

const Feedback = () => {
    return (
        <>
          <div className="feedback_area">
                    <h2 id='feedback_title'>Let us Handle your <br />
                    project, professionally.
                  </h2>
              <div className="feedback_content">
                  
                  <div className="input_field">
                      <input type="text" placeholder='First name'/>
                      <input type="text" placeholder='Last name'/>
                      <input type="email" placeholder='Email'/>
                      <input type="text" placeholder='Phone number'/>
                      <textarea name="" id="" cols="10" rows="10" placeholder='Your Feedback'></textarea>
                      <button className='d-block m-auto btn btn-danger w-25'>Send Message</button>
                  </div>
                  
              </div>
          </div> 
        </>
    );
};

export default Feedback;
