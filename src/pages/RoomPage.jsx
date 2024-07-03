import React from 'react'

const RoomPage = ({setIsAuth, setRoom}) => {

  // çıkış yap
  const logout = ()=> {
// yetkiyi false çek 
setIsAuth(false);

// locali temizle
localStorage.removeItem("token");
}


// form gönderilince
const handleSubmit=(e)=>{
  e.preventDefault();
  
  const room = e.target[0].value.trim().toLowerCase();
  /* console.dir(room); */
  setRoom(room);
}

  return (
    <form onSubmit={handleSubmit} className='room-page'>
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz ?</p>
      <input placeholder='Ör: Haftaiçi' type="text" />
      <button type='submit'>Odaya Gir</button>
      <button onClick={logout} type='button'>Çıkış Yap</button>
    </form>
  )
}

export default RoomPage
