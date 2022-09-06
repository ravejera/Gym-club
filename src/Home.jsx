import { motion } from 'framer-motion';

const Home = () => {

    const transition = {type: 'string', duration: 3}
    return (
       
         <div className="best-ad">
            <motion.div
             initial={{left: '240px'}}
             whileInView={{left: '8px'}}
             transition={transition}
            ></motion.div>
            <span>the classic fitness center in town</span>
         </div>
    );
}
 
export default Home;