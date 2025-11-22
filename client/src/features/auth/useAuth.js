import { useSelector } from "react-redux"
import { jwtDecode } from "jwt-decode"
const useAuth = () => {
    const token = useSelector((state) => state.auth.token || "")
    let obj 
    if (token != "") {
        obj = jwtDecode(token)
        const { roles, active, phone, password, userName, email, fullname } = obj
    }
    return [obj]
}

export default useAuth


