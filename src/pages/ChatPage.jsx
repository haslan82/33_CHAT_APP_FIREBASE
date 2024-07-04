import React from 'react'
import { auth } from '../firebase'

console.log(auth)


const ChatPage = ({room, setRoom}) => {
  return (
    <div className='chat-page'>
      <header>
        <p>{auth.currentUser.displayName} </p>
        <p>{room} </p>
        <button onClick={()=> setRoom(null)} >Farklı Oda</button>
      </header>
      <main>mesajlar</main>
      <form >
        <input placeholder='mesajınızı yazınız' required type="text" />
        <button>Gönder</button>
      </form>
    </div>
  )
}

export default ChatPage
