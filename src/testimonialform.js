import Testimonial from "./testimonial"
import react, { useState ,useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios'


const TestimonialForm = () => {
    const [testimonial, setTestimonial] = useState({
        thought: '',
        file: ''
    })

    const [state, setState] = useState([])

    useEffect(()=>{
        getTestimonial()
    },[])

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
        else if (name === 'file') {
            const val = (e.target.files[0])
        
            setTestimonial((prevTestimonial) => {
                return {
                    ...prevTestimonial, ['file']: val
                }
            })
        }

    }


    const HandleSubmit = (e) => {

        addData(testimonial)
        setTestimonial({
            thought: '',
            file: ''
        })
        const { thought, file} = testimonial
        
        var formdata = new FormData()
        formdata.append('thought',thought)
        formdata.append('file',file, file.name)
        axios.post('http://localhost:5000/api/v1/upload',formdata)
        .then((res)=>{
            console.log(res)
        })
        console.log('submit ')
        e.preventDefault()
    }

    const getTestimonial = () =>{
        axios.get('http://localhost:5000/api/v1/')
        .then(res=>{
            console.log(res.data.test)
            let testimonials =[]
            testimonials = res.data.test
            console.log(testimonials)
            testimonials.map(item=>{
                var data={
                    thought:'',
                    img:''
                }
                data.thought=item.thought
                data.img=item.img
                addData(data)
            })
           
        })
    }
   

   
    return (
        <div>
            <div>
                <form className="form-div" encType="multipart/form-data">
                    <p><input type="file" id="img" name="file"  onChange={HandleChange}></input></p>
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
                                    image={item.file}
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