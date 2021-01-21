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

export const colormods = {
    light: {
        name: "light",
        back: "light",
        text: "dark",
        asClasses: " bg-light text-dark ",
        table: ""
    },
    dark: {
        name: "dark",
        back: "dark",
        text: "light",
        asClasses: " bg-dark text-light ",
        table: "dark"
    }
}

export const ColorContext = createContext({
    colormode: colormods.light,
    togleColormode: ()=>{},
});
