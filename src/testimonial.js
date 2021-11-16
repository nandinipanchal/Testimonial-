import react from 'react'
import { Carousel } from 'react-responsive-carousel'
import './style.css'

const Testimonial = (props) => {
    return (
        <div>
            <div className="main-div">
                <div className="photo"><img src={props.img}></img></div>
                <div className="message">
                    <p>{props.say}</p>
                </div>
            </div>
      
        </div>
    )
}

export default Testimonial