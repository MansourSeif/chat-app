import React, { useEffect, useState } from 'react'
import './chatlist.css'
import plus from "/plus.png"
import minus from "/minus.png"
import NewUser from './New User/NewUser'
import { useUserStore } from '../../../lib/useUserStore'
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from '../../../lib/firebase'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    const [chats, setChats] = useState([])
    const { currentUser } = useUserStore()

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
            const items = res.data().chats

            const promises = items.map(async (item) => {
                const userDocRef = doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);

                const user = userDocSnap.data()
                return { ...item, user }
            })
            const chatData = await Promise.all(promises)
            setChats(chatData.sort((a,b) => {b.updatedAt -a.updatedAt}))

        });
        return () => {
            unSub()
        }
    }, [currentUser.id])
    console.log(chats)



    return (
        <div className='chatlist'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? minus : plus} alt="" className='add' onClick={() => {
                    setAddMode(!addMode)
                }} />
            </div>
            {Array.isArray(chats) && chats.map(chat => (
                <div className="item" key={chat.chatId}>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>{chat.user.username}</span>
                        <p>{chat.lastMessage} </p>
                    </div>
                </div>
            ))}
            {addMode && <NewUser />}
        </div>
    );
}

export default ChatList