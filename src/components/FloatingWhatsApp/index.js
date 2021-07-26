import React, { useState } from 'react'
import { WhatsappSVG, ChatSVG, CloseSVG, SendSVG } from './icons'

const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)
// Just to change the ugly arabic font


const  FloatingWhatsApp = ({
  phoneNumber = '1234567890',
  accountName = 'Support Team',
  avatar = '',
  statusMessage = 'Typically replies within 2 hours',
  chatMessage = 'Hello there! 🤝 \nHow can we help?',
  darkMode = false,
  styles,
  className = ''
}) =>{
  const [isOpen, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = () => setOpen((prev) => !prev)
  const handleChange = (event) =>
    setMessage(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!message) return

    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`
    )
    setMessage('')
  }
  console.log({isOpen})
  return (
    <div className={`floatingWhatsapp ${darkMode ? 'dark ' : ''}` + className}>
      <div className="whatsappButton" onClick={handleClick} style={styles}>
        <WhatsappSVG />
      </div>
      <div className={`whatsappChatBox ${isOpen ? 'open' : 'close'}`}>
        <header className="chatHeader">
          <div className="avatar">
            {avatar ? (
              <img src={avatar} width="45" height="45" alt="whatsapp-avatar" />
            ) : (
              <ChatSVG />
            )}
          </div>
          <div className="status">
            <span className="statusTitle">{accountName}</span>
            <span className="statusSubtitle">{statusMessage}</span>
          </div>
          <div className="close" onClick={handleClick}>
            <CloseSVG />
          </div>
        </header>
        <div className="chatBody">
          <div className="message">
            <span className="triangle" />
            <span className="accountName">{accountName}</span>
            <p className="messageBody">{chatMessage}</p>
            <span className="messageTime">{time}</span>
          </div>
        </div>
        <footer className="chatFooter">
          <form onSubmit={handleSubmit}>
            <input
              className={`input`}
              placeholder="Type a message.."
              onChange={handleChange}
              value={message}
              dir="auto"
            />
            <button
              type="submit"
              className="buttonSend"
              disabled={message === ''}
            >
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
    </div>
  )
}


export default FloatingWhatsApp