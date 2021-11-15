import react from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'

const Testimonial = () => {
    return (
        <div>
            <div>
            <form className="form-div">
                <p><input type="file" id="img" name="img" accept="image/*"></input></p>
                
                <p><textarea placeholder="Enter testimonial" name="testimonial"></textarea></p>
                <p className="submit-btn"><button>Submit</button></p>
            </form>
            </div>
        <Carousel
            showArrows={true}

        >
            <div className="main-div">
                <div className="photo"><img src='https://res.cloudinary.com/practicaldev/image/fetch/s--Y6YIEgoh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/n7ccgsmop6f4l4ycu4uv.png'></img></div>
                <div className="message">
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Meta and a community of individual developers and companies.</p>

                </div>
            </div>
            <div className="main-div">
                <div className="photo"><img src='https://res.cloudinary.com/practicaldev/image/fetch/s--Y6YIEgoh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/n7ccgsmop6f4l4ycu4uv.png'></img></div>
                <div className="message">
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Meta and a community of individual developers and companies.</p>

                </div>
            </div>
            <div className="main-div">
                <div className="photo"><img src='https://res.cloudinary.com/practicaldev/image/fetch/s--Y6YIEgoh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/n7ccgsmop6f4l4ycu4uv.png'></img></div>
                <div className="message">
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Meta and a community of individual developers and companies.</p>

                </div>
            </div>
            <div className="main-div">
                <div className="photo"><img src='https://res.cloudinary.com/practicaldev/image/fetch/s--Y6YIEgoh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/n7ccgsmop6f4l4ycu4uv.png'></img></div>
                <div className="message">
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Meta and a community of individual developers and companies.</p>

                </div>
            </div>
        </Carousel>
        </div>
    )
}

export default Testimonial