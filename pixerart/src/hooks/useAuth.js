import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth =() =>{
    const token = useSelector(selectCurrentToken)
    let isAdmin = false
    let isClient = false
    let status ="Utilisateur"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isAdmin = roles.includes('Admin')
        isClient = roles.includes('Client')

        if(isAdmin) status ="Admin"
        if(isClient) status ="Client"

        return { username, roles, status, isAdmin, isClient}
    }

    return { username: '', roles: [], isAdmin, isClient, status}

}
export default useAuth