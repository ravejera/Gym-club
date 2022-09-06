import { BsFillHeartFill } from "react-icons/bs";

const ArticleR = () => {
    
    return (
        <div className="right-side-article">
            <div className="bpm">
                <div className="bpm-items">
                    <BsFillHeartFill className="heart-bee"/>
                    <span className="heart">Heart Rate</span>
                    <span className="bpm-no">116 bpm </span>
                </div>
            </div>
            <div className="calories">
                <div className="rate">
                    <div className="a"></div>
                    <div className="b"></div>
                    <div className="c"></div>
                    <div className="d"></div>
                    <div className="e"></div>
                </div>
                <div className="rate-words">
                    <span>calories barn</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    );
}
 
export default ArticleR;