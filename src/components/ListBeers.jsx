
import "../App.css"

export default function ListBeers({beer: {image_url, name, tagline, contributed_by}}) {

    return (
        <li  className="listBeer">
        <img src={image_url} alt={name} className="imageBeers" />
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{contributed_by}</p>
    </li>
    )
}