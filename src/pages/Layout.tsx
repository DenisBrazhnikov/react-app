import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faFilm} from "@fortawesome/free-solid-svg-icons";

function Layout() {
    return (
        <>
            <header className="p-3 mb-4 bg-dark">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link to="/" className="nav-link px-3 ps-0 link-light">
                                    <FontAwesomeIcon icon={faHome} className="me-1"/> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/movies" className="nav-link px-3 link-light">
                                    <FontAwesomeIcon icon={faFilm} className="me-1"/> Movies
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li><Link to="/login"
                                      className="nav-link px-3 link-light fw-semibold border border-primary rounded">Login</Link>
                            </li>
                            <li><Link to="/register" className="nav-link px-3 link-light">Register</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="container">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;