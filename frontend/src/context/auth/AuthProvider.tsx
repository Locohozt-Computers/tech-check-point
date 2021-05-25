import React, { createContext, PropsWithChildren, ReactNode, useReducer } from 'react'
import { createHttp } from 'utils/api/createHttp'
import authReducer from './Authreducer'

type UserType = {
    name: string;
    username: string;
    email: string;
    password: string;
}

export type InitialStateTypes = {
    user: UserType | any
}

const initialState = {
    user: null
}

export const SIGNIN = 'SIGNIN'
export const SIGNUP = 'SIGNIN'

export const AuthContext = createContext({
    user: null,
    signInUserContext: (user: any) => {},
    signUpUserContext: (user: any) => {},

})

const AuthProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const signInUserContext = async (user: Partial<UserType>) => {
        try {
            const data = await createHttp('/', user)
            dispatch({type: SIGNIN, payload: data})
        } catch (error) {
            throw error
        }
    }

    const signUpUserContext = async (user: Partial<UserType>) => {
        try {
            const data = await createHttp('/', user)
            dispatch({type: SIGNUP, payload: data})
        } catch (error) {
            throw error
        }
    }

    const values = {
        user: state?.user,
        signInUserContext,
        signUpUserContext
    }
    return (
        <AuthContext.Provider value={values}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
