import React from 'react';
import './Review.css'
const Review = () => {

    const handelOnBlur = e =>{
        
    }
    const handleReviewSubmit = e =>{
        e.preventDefault();

    }
    return (
        <>
            <div className="review">
                    <h2 id='review_title'>Review</h2>
              <div className="review_content">
                  
                  <div className="input_field">
                      <form onSubmit={handleReviewSubmit}>
                        <input type="text" name='name' onBlur={handelOnBlur} placeholder='service-title'/>
                        <input type="number" name="price" onBlur={handelOnBlur} placeholder='price'/>
                        <textarea name="description" onBlur={handelOnBlur} id="" cols="10" rows="10" placeholder='service details'></textarea>
                        <button type='submit' className='d-block m-auto btn btn-danger w-25'>Submit</button>
                      </form>
                  </div>
                  
              </div>
          </div>
        </>
    );
};

export default Review;