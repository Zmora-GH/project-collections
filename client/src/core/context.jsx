import { createContext } from 'react'

function noop() {}

export const AuthContext = createContext({
    isAuth: true,
    isAdmin: true
});

export const SomeContext = createContext({
    some: false
});
