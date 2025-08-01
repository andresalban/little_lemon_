import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg"

const Header =() =>{
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little lemon</h2>
                    <h3>Chicago</h3>
                    <p>we are a family owned Mediterranean restuarnt, focused on traditional recipes servred with a modern twist.</p>
                    <Link to="/booking"> <button aria-label="On Click">Reserve Table</button> </Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg}/>
                </div>
            </section>
        </header>
    )
}

export default Header;