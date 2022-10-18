interface UserInterface {
    id: number,
    login: string,
    iat: number,
    exp: number
}

interface AuthInterface {
    user: UserInterface|null;
    login: CallableFunction,
    logout: CallableFunction
}

export type {AuthInterface}