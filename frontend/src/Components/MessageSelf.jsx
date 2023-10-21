import React from 'react'

function MessageSelf() {
    var props2 = {name : "You", message: "This is the Sample Message"};
  return (
    <div className='self-message-container'>
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00AM</p>
      </div>
    </div>
  )
}

export default MessageSelf
