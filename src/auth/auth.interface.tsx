interface UserInterface {
    id: number,
    login: string,
    iat: number,
    exp: number
}

interface LoginInterface {
    login: string,
    password: string
}

interface RegisterInterface {
    login: string,
    email: string,
    password: string,
    confirmPassword: string
}

interface AuthInterface {
    user: UserInterface|null;
    login: CallableFunction,
    logout: CallableFunction
}

export type {AuthInterface, LoginInterface, RegisterInterface}