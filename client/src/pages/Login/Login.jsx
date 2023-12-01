import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
        navigate('/')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-outer">
            <div className="login-inner">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="login-box">
                        <label htmlFor="email">
                            <strong>Email: </strong>
                        </label>
                        <input type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="login-input"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-box">
                        <label htmlFor="password">
                            <strong>Password: </strong>
                        </label>
                        <input type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="login-input"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="buttons">
                    <button type="submit" className="btn-submit">
                        Login
                    </button>
                    </div>
                    </form>
                    <p>Don't have an account? Register</p>
                    <div className="buttons">
                    <Link to="/signup"><button className="btn-register">Register</button>
                    </Link>
                    </div>

            </div>
        </div>
    );
}

export default Login;