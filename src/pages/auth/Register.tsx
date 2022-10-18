import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faAt, faKey, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "../../utility/hooks";
import {useMutation, gql} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {RegisterInterface} from "../../auth/auth.interface";

function Register() {
    let navigate = useNavigate();

    function registerUserCallback() {
        register().then();
    }

    const {onChange, onSubmit, values} = useForm(registerUserCallback, {
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [register] = useMutation(
        gql`
            mutation RegisterMutation(
                $registerInput: RegisterInput!
            ) {
                register(registerInput: $registerInput) {
                    login
                }
            }
        `, {
            variables: {
                registerInput: values as RegisterInterface
            },
            onCompleted: (data) => {
                navigate('/login');
            }
        }
    );

    return (
        <>
            <div className="col-4 m-auto mt-5">
                <br/>
                <br/>
                <br/>
                <br/>
                <form className="border border-light bg-light shadow-sm rounded p-4" onSubmit={onSubmit}>
                    <div className="h3 mb-5 fw-normal text-center">
                        Register
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input type="text" name="login" onChange={onChange} className="form-control" placeholder="Neo"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faAt} />
                        </span>
                        <input type="email" name="email" onChange={onChange} className="form-control" placeholder="mr@andreson.com"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input type="password" name="password" onChange={onChange} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="input-group mb-5">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input type="password" name="confirmPassword" onChange={onChange} className="form-control" placeholder="Confirm password"/>
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