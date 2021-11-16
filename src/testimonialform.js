import Testimonial from "./testimonial"
import react, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialForm = () => {
    const [testimonial, setTestimonial] = useState({
        sentence: '',
        img: ''
    })

    const [state, setState] = useState([])

    const addData = (NewData) => {
        setState((prevData) => {
            return [...prevData, NewData]
        })
    }

    const HandleChange = (e) => {
        const { name, value } = e.target
        if (name === 'sentence') {

            setTestimonial((prevTestimonial) => {
                return {
                    ...prevTestimonial, [name]: value
                }
            })
        }
        else if (name === 'img') {
            const val = URL.createObjectURL(e.target.files[0])
            setTestimonial((prevTestimonial) => {
                return {
                    ...prevTestimonial, ['img']: val
                }
            })
        }

    }


    const HandleSubmit = (e) => {
        console.log(testimonial)
        addData(testimonial)
        setTestimonial({
            sentence: '',
            img: ''
        })
        e.preventDefault()
    }



    console.log('final data', state)
    return (
        <div>
            <div>
                <form className="form-div">
                    <p><input type="file" id="img" name="img" accept="image/*" onChange={HandleChange}></input></p>
                    <p><textarea placeholder="Enter testimonial" name="sentence" onChange={HandleChange}></textarea></p>
                    <p className="submit-btn"><button onClick={HandleSubmit}>Submit</button></p>
                </form>
            </div>
            <div>
                <Carousel
                    showArrows={true}
                >
                    {
                        state.map((item, index) => {
                            return (
                                <Testimonial
                                    key={1}
                                    id={index}
                                    say={item.sentence}
                                    image={item.img}
                                />
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default TestimonialForm