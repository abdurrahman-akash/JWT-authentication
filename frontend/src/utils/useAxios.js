import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

const baseURL = 'http://localhost:8000/api'

const useAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext)

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: `Bearer ${authTokens?.access}`
        }
    })
    
    // Add a request interceptor
    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

        // If the access token is not expired, we return the request as it is
        if(!isExpired) return req

        // If the access token is expired, we try to refresh it
        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        })

        // Save the new tokens
        localStorage.setItem('authToken', JSON.stringify(response.data))
        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        // Update the Authorization header
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })

    return axiosInstance;
}

export default useAxios