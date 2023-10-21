import React from 'react'

function MessageOthers() {
    var props1 = {name: "RandomUser", message: "This is a sample message"};
  return (
    <div className='other-message-container'>
      <div className="conversation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
            <p className="con-title">{props1.name}</p>
            <p className='con-lastMessage'>{props1.message}</p>
            <p className='self-timeStamp'>12:00am</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOthers
