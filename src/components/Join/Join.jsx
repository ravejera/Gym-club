import './Join.css'

const Join = () => {
    return (
        <div className="join" id='join'>
            <div className="left-j">
                <span>ready <span className='styled'>to</span> level </span>
                <span>up your <span className='styled'>body</span> with us</span>
            </div>
            <div className="right-j">
                <form action="" className='email-container'>
                    <input type="email" name='user email' placeholder='Enter your Email Adress'/>
                    <button>join now</button>
                </form>
            </div>
        </div>
    );
}
 
export default Join;