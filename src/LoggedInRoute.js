import React, { Component, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'

const LoggedInRoute = ({component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
        render={props => 
            user ? (
                <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            } {...rest}
        />
    )
}

export default LoggedInRoute