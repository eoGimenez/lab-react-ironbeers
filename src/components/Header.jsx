import { Link } from "react-router-dom"
import homeImg from "../assets/home.png"

export default function Header () {
    return (
        <div className="">
        <Link to="/"><img src={homeImg} className="" alt="home-link"/></Link>
        </div>
    )
}