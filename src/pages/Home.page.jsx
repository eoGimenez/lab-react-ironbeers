import { Link } from "react-router-dom"
import imageBeers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import "../App.css"


export default function NewBeerPages() {
    return (
        <div>
            <Link to="/beers">
                <div className="homeDiv">
                    <img src={imageBeers} className="w-100 h-50" alt="All Beers" />
                    <div>
                        <h2>All Beers</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                    </div>
                </div>
            </Link>
            <Link to="/random">
                <div className="homeDiv">
                    <img src={randomBeer} className="w-100 h-50" alt="Random Beer" />
                    <div>
                        <h2>Random Beer</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </Link>
            <Link to="/new">
                <div className="homeDiv">
                    <img src={newBeer} className="w-100 h-50" alt="New Beer" />
                    <div>
                        <h2>New Beer</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
