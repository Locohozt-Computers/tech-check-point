import React from 'react'
import { InitialStateTypes, SIGNIN } from './AuthProvider'

const authReducer = (state: InitialStateTypes, action: any) => {
    switch(action.type) {
        case SIGNIN: 
            return {
                ...state
            }
        default:
            return state
    }
}

export default authReducer
