import React, {useState} from 'react';
import './Login.scss'
import {Link, useHistory} from "react-router-dom";
import {auth} from "../../firebase";


const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }
    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            }).catch(e => alert(e.message))
    }
    return (
        <div className={'login'}>
            <Link to={'/'}>
                <img className={'login__logo'}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png"
                     alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    <button onClick={login} type={"submit"} className={'login__signInButton'}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className={'login__registerButton'}>Create your Amazon Account</button>
            </div>
        </div>

    );
};

export default Login;
