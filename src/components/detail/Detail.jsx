import React from 'react'
import './detail.css'
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet .</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://a.ltrbxd.com/resized/sm/upload/wp/bs/m0/17/john-wick-1200-1200-675-675-crop-000000.jpg?k=8443c456ec" alt="" />
              <span>photo_1.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>            
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://a.ltrbxd.com/resized/sm/upload/wp/bs/m0/17/john-wick-1200-1200-675-675-crop-000000.jpg?k=8443c456ec" alt="" />
              <span>photo_1.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>            
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://a.ltrbxd.com/resized/sm/upload/wp/bs/m0/17/john-wick-1200-1200-675-675-crop-000000.jpg?k=8443c456ec" alt="" />
              <span>photo_1.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>            
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://a.ltrbxd.com/resized/sm/upload/wp/bs/m0/17/john-wick-1200-1200-675-675-crop-000000.jpg?k=8443c456ec" alt="" />
              <span>photo_1.png</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="btns">
          <button className='blk-btn'>Block user</button>
          <button className='log-btn' onClick={()=>auth.signOut()}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Detail