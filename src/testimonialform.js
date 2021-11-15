import Testimonial from "./testimonial"
import react, { useState } from 'react'
const TestimonialForm = () =>{
    const [testimonial , setTetstimonial] = useState('')
    return ( 
    <div>
    <div>
        <form className="form-div">
            <p><input type="file" id="img" name="img" accept="image/*"></input></p>
            <p><textarea placeholder="Enter testimonial" name="testimonial"></textarea></p>
            <p className="submit-btn"><button>Submit</button></p>
        </form>
        </div>
        <Testimonial/>
    </div>
    )
}

export default TestimonialForm