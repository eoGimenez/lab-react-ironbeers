import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import RandomBeerCom from "../components/RandomBeer"

export default function RandomBeer() {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(result => {
                setBeer(result.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <>
        <div>
            <Header />
        </div>
        <div>
            <RandomBeerCom beer={beer}/>
        </div>
        </>
    )
}