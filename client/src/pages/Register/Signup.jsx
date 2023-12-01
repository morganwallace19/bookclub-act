import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="register-outer">
            <div className="register-inner">
             <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="register-box">
                        <label htmlFor="name">
                            <strong>Name: </strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="register-input"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="register-box">
                        <label htmlFor="email">
                            <strong>Email: </strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="register-input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="register-box">
                        <label htmlFor="password">
                            <strong>Password: </strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="register-input"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="buttons">
                    <button type="submit" className="btn-submit">
                        Register
                    </button>
                    </div>
                </form>
                <p>Already Have an Account? Login</p>
                <div className="buttons">
                <Link to="/login"><button className="btn-login">Login</button>
                </Link>
                </div>
                </div>
            </div>
    );
}

export default Signup;