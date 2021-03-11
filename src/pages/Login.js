import React, { useState, useContext } from "react"
import { Redirect } from 'react-router-dom'
import firebase from "./../config/firebase"
import { AuthContext } from '../AuthService'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // contextのuser情報を取得
    const user = useContext(AuthContext)

    // userに値が入っていたら / へリダイレクトする
    if (user) {
        return <Redirect to="/" />
    }

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label hrmlfor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label hrmlfor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>    
        </div>
    )
}

export default Login;