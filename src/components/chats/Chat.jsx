import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {  
  const [open , setOpen] = useState(false)
  const [text,setText] = useState("")
  const endRef = useRef(null)

  const handleEmoji = (e) => {
    setText((prev)=> prev + e.emoji)
    setOpen(false)
  }
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  } , [])
 
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe </span>
            <p>Lorem ipsum dolor sit amet .</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="https://www.truetrophies.com/customimages/064220.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quaerat sint praesentium eum accusantium magnam inventore enim aperiam nam doloribus tempore provident, delectus doloremque ipsa dignissimos blanditiis non distinctio.</p>
            <span>1 min ago </span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" value={text} placeholder='Type a message ...' onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
            <EmojiPicker open = {open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='send-btn'>Send</button>
      </div>
    </div>
  )
}

export default Chat