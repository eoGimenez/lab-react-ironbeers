import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css"

export default function BeerDetail () {

    const { beerId } = useParams();

    const [beer, setbeer] = useState ({});

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(result => {
            setbeer(result.data);
        })
        .catch(err => console.log(err))
    })

    return (
        <>
        <div>
            <Header/>
        </div>
        <div>
            <img src={beer.image_url} alt="beer.name" className="beerDetail"/>
            <h2>{beer.name}</h2>
            <p>{beer.attenuation_level}</p>
            <h3>{beer.tagline}</h3>
            <p>{beer.first_brewed}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
        </>
    )
}