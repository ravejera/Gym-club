import { HashLink as Link } from 'react-router-hash-link';

import Logo from './img/logo3.png'

const Navbar = () => {
    return (
        <div className="head-section">
            {/* <div className="blur hero-blur"></div> */}
            <div className="left">
                <img src={Logo} alt="" className='logo'/>
                <div className="links">
                    <ul className="header-menu">
                        <li><Link smooth to='#/'>home</Link></li>
                        <li><Link smooth to='#programs'>programs</Link></li>
                        <li><Link smooth to='#why'>why us</Link> </li>
                        <li><Link smooth to='#plans'>plans</Link></li>
                        <li><Link smooth to='#testimonials'>testimonials</Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className="right">
                <button className='btn'>join now</button>
            </div>
        </div>
    );
}
 
export default Navbar;