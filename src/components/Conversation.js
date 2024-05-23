import React from 'react';
import './Conversation.css';

function Conversation({ conversation, contact, onSelectConversation }) {
  return (
    <li className="conversation" onClick={() => onSelectConversation(conversation)}>
      <div>{contact.name}</div>
      <div>{conversation.messages[conversation.messages.length - 1]?.text}</div>
    </li>
  );
}

export default Conversation;
