import React from 'react'
import "../peer.css"
import Navbar from './Navbar'
import ChatApp from './ChatApp'



export default function Peer() {
  return (
    <div>
    <Navbar />
     {/* <div className="container">
      <div className="msg-header">
        <div className="container1">
        <i class="bi bi-person-circle "  style={{ fontSize: '2rem' ,color: 'black' }}></i>
          <div className="active">
            <p className='m-3'>Achyuth</p>
          </div>
        </div>
      </div>
      <div className="chat-page">
        <div className="msg-inbox">
          <div className="chats">
            <div className="msg-page">
              <div className="received-chats">
                <div className="received-chats-img">
                <i class="bi bi-person-circle "  style={{ fontSize: '2rem' ,color: 'black' }}></i>
                </div>
                <div className="received-msg">
                  <div className="received-msg-inbox">
                    <p>
                      Hi !! This is a message from Riya. Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Non quas nemo eum,
                      earum sunt, nobis similique quisquam eveniet pariatur
                      commodi modi voluptatibus iusto omnis harum illum iste
                      distinctio expedita illo!
                    </p>
                    <span className="time">18:06 PM | July 24</span>
                  </div>
                </div>
              </div>
              <div className="outgoing-chats">
                <div className="outgoing-chats-img">
                <i class="bi bi-person-circle "  style={{ fontSize: '2rem' ,color: 'black' }}></i>
                </div>
                <div className="outgoing-msg">
                  <div className="outgoing-chats-msg">
                    <p className="multi-msg">
                      Hi Riya, Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Illo nobis deleniti earum magni
                      recusandae assumenda.
                    </p>
                    <p className="multi-msg">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <span className="time">18:30 PM | July 24</span>
                  </div>
                </div>
              </div>
              <div className="received-chats">
                <div className="received-chats-img">
                <i class="bi bi-person-circle "  style={{ fontSize: '2rem' ,color: 'black' }}></i>
                </div>
                <div className="received-msg">
                  <div className="received-msg-inbox">
                    <p className="single-msg">
                      Hi!! This is a message from John Lewis. Lorem ipsum, dolor
                      sit amet consectetur adipisicing elit. Iste distinctio
                      expedita illo!
                    </p>
                    <span className="time">18:31 PM | July 24</span>
                  </div>
                </div>
              </div>
              <div className="outgoing-chats mx-2">
                <div className="outgoing-chats-img ">
                <i class="bi bi-person-circle "  style={{ fontSize: '2rem' ,color: 'black' }}></i>
                </div>
                <div className="outgoing-msg">
                  <div className="outgoing-chats-msg">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit, sequi.
                    </p>
                    <span className="time">18:34 PM | July 24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="msg-bottom">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Write message..."
              />
              <span className="input-group-text send-icon">
                <i className="bi bi-send"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
  </div> */}
    <ChatApp />
    </div>
  )
}
