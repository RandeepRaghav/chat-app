import React, { useState } from 'react';
import './ChatWindow.css';

function ChatWindow({ conversation }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() !== '') {
      // Simulate sending a message
      conversation.messages.push({ sender: 'me', text: message, timestamp: new Date().toISOString() });
      setMessage('');
    }
  };

  return (
    <div className="chat-window">
      {conversation ? (
        <>
          <ul>
            {conversation.messages.map((msg, index) => (
              <li key={index}>
                <b>{msg.sender}</b>: {msg.text} <i>({new Date(msg.timestamp).toLocaleTimeString()})</i>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send</button>
        </>
      ) : (
        <div>Select a conversation</div>
      )}
    </div>
  );
}

export default ChatWindow;
