import jwtDecode from "jwt-decode";
import React, {useReducer, createContext} from "react";
import {AuthInterface} from "./auth.interface";

const initialState = {
    user: null,
}

if(localStorage.getItem('token')) {
    const decodedToken = jwtDecode(localStorage.getItem('token') as string) as any;

    if(decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
    } else {
        initialState.user = decodedToken;
    }
}

const AuthContext = createContext<AuthInterface>({
    user: null,
    login: (userData: any) => {},
    logout: () => {}
})

function authReducer(state: any, action: any){
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
                return state
    }
}

function AuthProvider(props: any) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData: { token: string; }) => {
        localStorage.setItem('token', userData.token);
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    function logout() {
        localStorage.removeItem('token');
        dispatch({type: 'LOGOUT'});
    }

    return (
        <AuthContext.Provider value={{user: state.user, login, logout}} {...props}/>
    )
}

export { AuthContext, AuthProvider };