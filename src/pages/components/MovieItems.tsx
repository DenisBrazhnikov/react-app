import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";

export default function MovieItems({movies}: any) {
    const listItems = movies.map((movie: any) =>
        <li key={movie.id} className="col-3 mb-3">
            <div className="p-3 rounded shadow-sm bg-light">
                <h4>{movie.name}</h4>

                <div className="text-muted mb-2">
                    <small>{movie.date} | R | 2h 56m</small>
                </div>

                <img
                    alt={movie.name}
                    className="img-fluid rounded mb-2"
                    src="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>

                <div>
                    <span className="badge text-bg-dark me-2">Action</span>
                    <span className="badge text-bg-dark">Sci-Fi</span>
                </div>

                <div className="mt-4">
                    <button className="btn btn-primary btn-sm w-100 rounded text-center">
                        <span className="me-2">Add to wishlist</span>
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
            </div>
        </li>
    )

    return (
        <ul className="row list-unstyled">
            {listItems}
        </ul>
    )
}