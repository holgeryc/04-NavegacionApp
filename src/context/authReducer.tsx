import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logOut' };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-name-yet'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                favoriteIcon: undefined,
                username: undefined
            }
        default:
            return state;
    }
}