import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from "styled-components"


const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages').orderBy("time")
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])
    console.log(messages);

    const user = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })

        setValue("")
    }

    return (
        <>
            <RedH1>Room</RedH1>
            <ul>
                {messages ?
                messages.map((message) => {
                    return <Li>{message.user} : {message.content}</Li>
                }) : 
                <CircularProgress /> 
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

const RedH1=styled.h1`
    color: red;
`
const Li = styled.li`
    font-size: 20px;
`
const Input = styled.input`
    width: 100px;
    height: 20px;
`


export default Room