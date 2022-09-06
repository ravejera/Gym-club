import './Why.css'
import Image1 from '../../img/body1.jpeg'
import Image2 from '../../img/body2.jpeg'
import Image3 from '../../img/body3.jpeg'
import Image4 from '../../img/body4.jpeg'
import Nike from '../../img/nike.png'
import Addidas from '../../img/addidas.png'
import Nb from '../../img/nb.png'


const Why = () => {
    return (
        <div className="main-arti" id='why'>
            <div className="images">
                <img src={Image2} alt="" className='image image2'/>
                <img src={Image1} alt="" className='image image1'/>
                <img src={Image3} alt="" className='image image3'/>
                <img src={Image4} alt="" className='image image4'/>
            </div>
            <div className="arti-section">
                <h2>some reasons</h2>
                <h1><span className='styled'>why</span> choose us?</h1>
                <p><i className='fa fa-check-circle'></i>    over +140 expert coachs</p>
                <p><i className='fa fa-check-circle'></i>    trains smarter and faster zt afordable price </p>
                <p><i className='fa fa-check-circle'></i>    1 free program for new member</p>
                <p><i className='fa fa-check-circle'></i>    reliable patners</p>
                <span>our partners</span>
                <div className="partners">
                    <img src={Nb} alt="" />
                    <img src={Nike} alt="" />
                    <img src={Addidas} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Why;