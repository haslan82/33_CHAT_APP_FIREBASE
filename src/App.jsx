/* import './App.css'
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from "./firebase";



function App() {
const handleClick = ()=> {
  signInWithPopup(auth, provider);
};
console.log(auth);

  return (
    <div className=''>
      <h2>FIREBASE AUTH</h2>
   
      <h4>{auth?.currentUser?.displayName} </h4>
      <h4>{auth?.currentUser?.email} </h4>
      <button onClick={handleClick}>Google ile Gir</button>
    </div>
  )
}

export default App */

/* import LoginPage from "./pages/LoginPage";



function App(){
  return
  
 <LoginPage />;


}

export default App; */

import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RoomPage from './pages/RoomPage';




function App() {
const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

// kullanıcının yetkisi yoksa
if(!isAuth){
  return <LoginPage setIsAuth={setIsAuth} />;
}

//kullanıcının yetkisi varsa
  return (
    <div className='container'>
      <RoomPage />
    </div>
  )

}

export default App