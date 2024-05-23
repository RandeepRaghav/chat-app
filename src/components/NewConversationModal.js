import React from 'react';
import './NewConversationModal.css';

function NewConversationModal({ contacts, onClose, onStartConversation }) {
  return (
    <div className="modal">
      <h2>Start a new conversation</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => { onStartConversation(contact.id); onClose(); }}>
            {contact.name}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default NewConversationModal;
