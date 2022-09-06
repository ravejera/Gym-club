import './Footer.css';
import Image from '../../img/logo3.png';


const Footer = () => {

    const top = () => {
        window.scrollTo(0,0)
    }
    return (
        <div className="footer">
            <div className="underline"></div>
            <div className="footer-article">
                <div className="icons">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="footer-logo">
                    <img src={Image} alt="" />
                </div>
                <button onClick={top} className='top-btn'><i className='fa fa-arrow-up'></i></button>
            </div>
        </div>
    );
}
 
export default Footer;