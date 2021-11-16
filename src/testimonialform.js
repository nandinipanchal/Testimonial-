import Testimonial from "./testimonial"
import react, { useState ,useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios'


const TestimonialForm = () => {
    const [testimonial, setTestimonial] = useState({
        thought: '',
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
        if (name === 'thought') {

            setTestimonial((prevTestimonial) => {
                return {
                    ...prevTestimonial, [name]: value
                }
            })
        }
        else if (name === 'img') {
            const val = e.target.files[0]
            setTestimonial((prevTestimonial) => {
                return {
                    ...prevTestimonial, ['img']: val
                }
            })
        }

    }


    const HandleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file',state)
        axios.post('http://localhost:5000/api/v1/upload',formData)
        .then((res)=>{
            console.log(res)
        })
        addData(testimonial)
        setTestimonial({
            thought: '',
            img: ''
        })
       
        console.log('submit ')
        e.preventDefault()
    }



    console.log('final data', state)
    return (
        <div>
            <div>
                <form className="form-div">
                    <p><input type="file" id="img" name="img" accept="image/*" onChange={HandleChange}></input></p>
                    <p><textarea placeholder="Enter testimonial" name="thought" onChange={HandleChange}></textarea></p>
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
                                    say={item.thought}
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