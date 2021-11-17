import react from 'react'
import './style.css'

const Testimonial = (props) => {
    return (
        <div>
            <div className="main-div">
                <div className="photo">{props.image && <img src={URL.createObjectURL(props.image)} ></img>}</div>
                <div className="message">
                    <p>{props.say}</p>
                </div>
            </div>
      
        </div>
    )
}

export default Testimonial