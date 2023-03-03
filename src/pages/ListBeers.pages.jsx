import Header from "../components/Header";
import axios from "axios"
import { useEffect, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom"
import ListBeersCom from '../components/ListBeers'

export default function ListBeers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(result => {
                setBeers(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div>
                <Header />
            </div>
            <ul>
                {beers.map((beer) => {
                    return (
                        <Link to={`/beer/${beer._id}`} key={beer._id}>
                            <ListBeersCom beer={beer} />
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}