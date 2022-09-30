import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faAt, faKey, faRightToBracket} from "@fortawesome/free-solid-svg-icons";

function Register() {
    return (
        <>
            <div className="col-4 m-auto mt-5">
                <br/>
                <br/>
                <br/>
                <br/>
                <form className="border border-light bg-light shadow-sm rounded p-4">
                    <div className="h3 mb-5 fw-normal text-center">
                        Register
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input type="email" className="form-control" placeholder="Neo"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faAt} />
                        </span>
                        <input type="email" className="form-control" placeholder="mr@andreson.com"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="input-group mb-5">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input type="password" className="form-control" placeholder="Confirm password"/>
                    </div>

                    <button className="w-100 btn btn-primary fw-semibold" type="submit">
                        <FontAwesomeIcon icon={faRightToBracket} className="me-2"/>
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register;