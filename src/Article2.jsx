import ImageT from './img/transparent.png'
import NumberCounter from 'number-counter'

const Article2 = () => {
    return (
        <div className="numbers">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay="4" preFix="+"/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={960} start={700} delay="4" preFix="+"/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} start={0} delay="4" preFix="+"/>
                    </span>
                    <span>fitness programs</span>
                </div>
                <div className="buttons">
                    <button className="btn b1">Get Started</button>
                    <button className="btn b2">Learn More</button>
                </div>
                <img src={ImageT} alt="" className='image-trasparent'/>
        </div>
    );
}
 
export default Article2;