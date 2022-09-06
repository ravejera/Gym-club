import './plans.css'


const Plans = () => {
    return (
        <div className="plans" id='plans'>
            <div className="plans-head">
                <span className='styled'>ready to start</span>
                <span> your journey </span>
                <span className='styled'>with us</span>
            </div>
            <div className="plan">
                <div className="basic">
                    <i className='fa fa-heart'></i> 
                    <span>basic plan</span>
                    <span>$ 25</span>
                    <span>2 hours of excercises</span>
                    <span>free consaltation to coaches</span>
                    <span>access to the community</span>
                    <a href="#create">see more benefits</a>
                    <button>join now</button>
                </div>
                <div className="premium">
                    <i className='fa fa-crown'></i>
                    <span>premium plan</span>
                    <span>$ 30</span>
                    <span>5 hours of excercises</span>
                    <span>free consultation of coaches</span>
                    <span>access to minibar</span>                
                    <a href="#create">see more benefits</a>
                    <button>join now</button>
                </div>
                <div className="pro">
                    <i className='fa fa-dumbbell'></i>
                    <span>pro plan</span>
                    <span>$ 45</span>
                    <span>8 hours of excercises</span>
                    <span>consultation of private coaches</span>
                    <span>free fitness merchandises</span>                   
                    <a href="#create">see more benefits</a>
                    <button>join now</button>
                </div>
            </div>
        </div>
    );
}
 
export default Plans;