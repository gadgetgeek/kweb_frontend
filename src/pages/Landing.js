import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Landing = (props) => {
    let navigate = useNavigate()
    const toSignup = () => {navigate('/signup')}
    const toLogin = () => {navigate('/login')}
    useEffect(() => {if (props.auth !== null) {navigate('/shop')}})
    return (
        <div>
            <button onClick={toSignup}>Signup</button>
            <button onClick={toLogin}>Login</button>
        </div>
    )
    
}

export default Landing