import './programs.css'

const Programs = () => {
    return (
        <div className="programs" id='programs'>
            <div className="headerr">
                <span className='styled'><div>explore</div> <div>our</div></span>
                <span>programs</span>
                <span className='styled'><div>to shape</div> <div>you</div></span>
            </div>
            <div className="containers">
                <div className="cont">
                    <div className="inside-cont">
                    <i class="fa fa-dumbbell"></i>
                        <h4>strength training</h4>
                        <p>
                            In this program, you are trained to improve
                            your strength through many exersises
                        </p>
                        <div className='div'>
                            <p>join now </p>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <div className="inside-cont">
                        <i class="fa fa-running"></i>
                        <h4>cardio training</h4>
                        <p>
                            In this program, you are trained to do sequential
                            moves in range of 20 untill 30 minutes
                        </p>
                        <div className='div'>
                            <p>join now </p>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <div className="inside-cont">
                        <i class="fa fa-fire"></i>
                        <h4>fat burning</h4>
                        <p>
                            This program is suitanle for you who
                            wants to get rid of fat and lose their weight in a short period
                        </p>
                        <div className='div'>
                            <p>join now </p>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <div className="inside-cont">
                    <i class="fa fa-heartbeat"></i>
                        <h4>health fitness</h4>
                        <p>
                            this program is designed for those
                            who exersises only for their body fitness not body building
                            </p>
                        <div className='div'>
                            <p>join now </p>
                            <i className='fa fa-arrow-right'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Programs;