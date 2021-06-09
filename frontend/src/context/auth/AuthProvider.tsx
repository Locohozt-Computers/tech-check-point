import React, { createContext, useReducer } from 'react'
import { ChangePasswordType, SigninUserType, SignupUserType } from 'types/authTypes'
import { createHttp } from 'utils/api/createHttp'
import authReducer from './Authreducer'

export type InitialStateTypes<T> = {
    user: T
}

const initialState = {
    user: null
}

export const SIGNIN = 'SIGNIN'
export const SIGNUP = 'SIGNIN'

export const AuthContext = createContext({
    user: null,
    signInUserContext: (user: SigninUserType) => {},
    signUpUserContext: (user: Partial<SignupUserType>) => {},
    forgotPasswordContext: (password: string) => {},
    changePasswordContext: (password: ChangePasswordType) => {},

})

const AuthProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const signInUserContext = async (user: SigninUserType) => {
        try {
            const data = await createHttp('/login', user)
            dispatch({type: SIGNIN, payload: data})
        } catch (error) {
            throw error
        }
    }

    const signUpUserContext = async (user: Partial<SignupUserType>) => {
        try {
            const data = await createHttp('/register', user)
            dispatch({type: SIGNUP, payload: data})
        } catch (error) {
            throw error
        }
    }

    const forgotPasswordContext = async (password: string) => {
        try {
            const data = await createHttp('/forgotpassword', password)
            dispatch({type: SIGNUP, payload: data})
        } catch (error) {
            throw error
        }
    }

    const changePasswordContext = async (password: ChangePasswordType) => {
        try {
            const data = await createHttp('/changepassword', password)
            dispatch({type: SIGNUP, payload: data})
        } catch (error) {
            throw error
        }
    }

    const values = {
        user: state?.user,
        signInUserContext,
        signUpUserContext,
        forgotPasswordContext,
        changePasswordContext
    }
    return (
        <AuthContext.Provider value={values}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
