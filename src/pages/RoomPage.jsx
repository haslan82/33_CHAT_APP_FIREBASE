import React from 'react'

const RoomPage = () => {
  return (
    <form className='room-page'>
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz ?</p>
      <input placeholder='Ör: Haftaiçi' type="text" />
      <button type='submit'>Odaya Gir</button>
      <button type='button'>Çıkış Yap</button>
    </form>
  )
}

export default RoomPage
