import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightToBracket, faUser, faKey} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "../../utility/hooks";
import {gql, useMutation} from "@apollo/client";
import {AuthContext} from "../../auth/auth-context";
import {useNavigate} from "react-router-dom";

function Login() {
    function loginCallback() {
        login().then();
    }

    let navigate = useNavigate();

    const authContext = useContext(AuthContext);

    const {onSubmit, onChange, values} = useForm(loginCallback, {
        login: '',
        password: '',
    })

    const v = values as any;

    const [login] = useMutation(
        gql`
            mutation LoginMutation(
                $loginInput: LoginInput!
            ) {
                login(loginInput: $loginInput) {
                    user {
                        id, login, email
                    }
                    access_token
                }
            }
        `, {
            variables: {
                loginInput: {
                    login: v.login,
                    password: v.password
                }
            },
            onCompleted: (data) => {
                authContext.login({
                    user: data.login.user,
                    token: data.login.access_token
                });

                navigate('/');
            }
        }
    );

    return (
        <>
            <div className="col-3 m-auto mt-5">
                <br/>
                <br/>
                <br/>
                <br/>
                <form className="bg-light border border-light shadow-sm rounded p-4" onSubmit={onSubmit}>
                    <div className="h3 mb-5 fw-normal text-center">
                        Login
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        <input name="login" onChange={onChange} type="text" className="form-control" placeholder="Neo"/>
                    </div>
                    <div className="input-group mb-5">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faKey}/>
                        </span>
                        <input name="password" onChange={onChange} type="password" className="form-control"
                               placeholder="Password"/>
                    </div>

                    <button className="w-100 btn btn-primary fw-semibold" type="submit">
                        <FontAwesomeIcon icon={faRightToBracket} className="me-2"/>
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;