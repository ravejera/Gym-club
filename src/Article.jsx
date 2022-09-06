import Article2 from "./Article2";
import ArticleR from "./ArticleR";

const Article = () => {
    return (
        <div className="article">
            <div>
                <span className="styled">fine </span>
                <span>body</span>       
            </div>
            <div>
                <span>be <span className="styled">yourself</span></span>
            </div>
            <div>
                <span>We are here to help you build a fit body you wont regret with classic fitness club</span>
            </div>
            <Article2 />
            {/* article on the right side */}
            <ArticleR />
        </div>
    );
}
 
export default Article;