import React, { useState } from 'react';
import SearchBar from './SearchBar';
import NewConversationModal from './NewConversationModal';
import Conversation from './Conversation';
import './Sidebar.css';

function Sidebar({ conversations, contacts, onSelectConversation, onStartConversation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredConversations = conversations.filter(conv => {
    const contact = contacts.find(c => c.id === conv.contactId);
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="sidebar">
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
      <button onClick={() => setIsModalOpen(true)}>New Conversation</button>
      <ul>
        {filteredConversations.map(conv => {
          const contact = contacts.find(c => c.id === conv.contactId);
          return (
            <Conversation
              key={conv.contactId}
              conversation={conv}
              contact={contact}
              onSelectConversation={onSelectConversation}
            />
          );
        })}
      </ul>
      {isModalOpen && (
        <NewConversationModal
          contacts={contacts}
          onClose={() => setIsModalOpen(false)}
          onStartConversation={onStartConversation}
        />
      )}
    </div>
  );
}

export default Sidebar;
