import { testimonialsData } from "../../testimonialsData";
import Image from '../../img/background.jpeg'
import './Testimonials.css'
import { useState } from "react";


const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="testimonials" id="testimonials">
            {/* <div className="testimonialssss">
                <span></span>
            </div> */}
            <div className="right-testi">
               <span className="styled">what they</span>
               <span>say about us</span>
               <span>{testimonialsData[selected].review}</span>
               <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span> {' '}
                    - {testimonialsData[selected].status}
               </span>
            </div>
            <div className="left-testi">
                <div className="left-t">
                    <img src={testimonialsData[selected].image} alt="" />
                    <div></div>
                    <img src={Image} alt="" className="back-img"/>
                </div>
                <div className="btns">
                    <button onClick={() => (
                        selected === 0
                        ?setSelected(tLength-1)
                        :setSelected((prev) => (prev-1))
                    )}><i className="fa fa-arrow-left"></i></button>
                    <button onClick={() => (
                        selected === (tLength-1)
                        ?setSelected(0)
                        :setSelected((next) =>(next+1))
                    )}><i className="fa fa-arrow-right"></i></button>
                </div> 
            </div>
        </div>
    );
}
 
export default Testimonials;