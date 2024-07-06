import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,

} from "firebase/firestore";
import Message from "../components/Message";


//! console.log(auth)

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState();
  const lastMsg = useRef();

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // mesajın ekleniceği kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // kolleksiyona döküman ekle

    await addDoc(messagesCol, {
      room,
      text: e.target[0].value,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

// son mesaja kaydır
//! console.log(lastMsg)
lastMsg.current.scrollIntoView({behavior:"smooth"});

    // formu sıfırla ( inputu sıfırladık)

    e.target.reset();
  };

  // mevcut odada gönderilen mesajların anlık olarak al
  useEffect(() => {
    // abone olunucak kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // sorgu ayarlarını yap

const q = query (
  messagesCol, 
  where("room", "==", room), 
  orderBy("createdAt", "asc")
);

    // onSnapshot ile anlık olarak kollesksiyondaki değişimleri izler kolleksiyon her değiştiğinde veridğimiz fonk ile kolleksiyondaki güncel belgeleri al

    onSnapshot(q, (snapshot) => {
      //! console.log(snapshot.docs[0].data());
      let tempMsg = [];

      // dökümanların içerisndeki veriye eriş ve geçici diziye aktar
      snapshot.docs.forEach((doc) => tempMsg.push(doc.data()));

      // state'i güncelle
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName} </p>
        <p>{room} </p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <main>
        {!messages ? (
          <p>Sohbete ilk mesajı gönderin</p>
        ):( messages.map((data, i) => (
          <Message data={data} key={i}/>)
        ))}
        <div ref={lastMsg}/>
      </main>

      <form onSubmit={handleSubmit}>
        <input placeholder="mesajınızı yazınız" required type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
