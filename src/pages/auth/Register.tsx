import React, {useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faAt, faKey, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from '../../auth/auth-context';
import {useForm} from "../../utility/hooks";
import {useMutation, gql} from "@apollo/client";
import {useNavigate} from "react-router-dom";

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput!
    ) {
        register(
            registerInput: $registerInput
        ) {
            login
        }
    }
`

function Register() {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState<any>([]);

    function registerUserCallback() {
        registerUser().then();
    }

    const {onChange, onSubmit, values} = useForm(registerUserCallback, {
        login: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [registerUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerInput: userData}}) {
            console.log('update1'); // <-- execution exceeds the code
            context.login(userData);
            console.log('update2'); // <-- doesn't
            navigate('/');
        },
        onError({graphQLErrors}) {
            setErrors(graphQLErrors);
        },
        variables: { registerInput: values }
    });

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
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="input-group mb-5">
                        <span className="input-group-text text-muted">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input type="password" className="form-control" placeholder="Confirm password"/>
                    </div>

                    <button className="w-100 btn btn-primary fw-semibold" type="submit" onClick={onSubmit}>
                        <FontAwesomeIcon icon={faRightToBracket} className="me-2"/>
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register;