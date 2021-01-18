import { createContext } from 'react'

export const AuthContext = createContext({
    username: null,
    isAuth: false,
    isAdmin: false,
    userId: null,
    token: null,
    colormode: "light",
    lang: "en"
});

export const SomeContext = createContext({
    some: false
});
