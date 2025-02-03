import {Route, Redirect} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return (
        <Route {...rest} render={() =>
            user ? children : <Redirect to="/login" />
        } />
    )
}

export default PrivateRoute