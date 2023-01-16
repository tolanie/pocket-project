import React from 'react'

export default function ChatSublist({name, message, avatar}) {
  return (
    <div className="chats">
    <div className="c-1">
      <img src={avatar} alt="" />
    </div>
    <div className="c-name">
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  </div>
  )
}
