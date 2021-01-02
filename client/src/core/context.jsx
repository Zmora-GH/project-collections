import { createContext } from 'react'

export const AuthContext = createContext({
    username: null,
    isAuth: false,
    isAdmin: false,
    userId: null,
    token: null
});

export const SomeContext = createContext({
    some: false
});
