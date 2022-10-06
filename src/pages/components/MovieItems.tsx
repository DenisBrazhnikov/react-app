import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function MovieItems({movies}: any) {
    const listItems = movies.map((movie: any) =>
        <li key={movie.id} className="col-2 mb-4">
            <div className="rounded shadow-sm bg-light">
                <Link to={'/movies/' + movie.id}>
                    <img
                        alt={movie.original_title}
                        className="img-fluid rounded-top"
                        src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}/>
                </Link>

                <div className="my-2 px-2">
                    <strong className="me-2">{movie.original_title}</strong>
                </div>

                <div className="mt-2">
                    <button className="btn btn-primary btn-sm w-100 rounded-bottom text-center">
                        <span className="me-2">Add to wishlist</span>
                        <FontAwesomeIcon icon={faBookmark}/>
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