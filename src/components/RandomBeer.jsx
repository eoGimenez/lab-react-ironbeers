import "../App.css"


export default function RandomBeer({ beer }) {
    console.log(beer)
    return (
        <div>
            <img src={beer.image_url} alt="beer.name" className="beerDetail" />
            <h2>{beer.name}</h2>
            <p>{beer.attenuation_level}</p>
            <h3>{beer.tagline}</h3>
            <p>{beer.first_brewed}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}