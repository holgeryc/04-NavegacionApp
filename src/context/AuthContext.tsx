import React, { createContext, useReducer } from "react";
import App from "../../App";
import { authReducer } from "./authReducer";


//Defubur cini kyce y que informacion contendra
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// lo usaremos para decirle a Reac como luce y que expone el contexto
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    changeFavIcon: (iconName: string) => void
    logOut: () => void,
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}
