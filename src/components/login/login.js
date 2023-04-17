import { Outlet, Link } from "react-router-dom";
import React, {useState} from "react"
import "./login.css"
// import axios from "axios"
// import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    // const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         history.push("/")
    //     })
    // }

    return (
        <div className="login">
            <h1>Login</h1>
            <label><b>Username</b></label>
            <input type="email" name="email" placeholder="Enter Email Here"></input>
            <label for="psw"><b>Password</b></label>
            <input type="password" name="" placeholder="Enter Password Here"></input>
            {/* <div className="button" onClick={login}>Login</div> */}
            <div className="button" ><Link to="/">Login</Link></div>
            <div>or</div>
            {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
            <div className="button" ><Link to="/register">Register</Link></div>
        </div>
    )
}

export default Login