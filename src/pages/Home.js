import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import dummyData from '../data/dummyData.json';

function Home() {
  const [conversations, setConversations] = useState(dummyData.conversations);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const startConversation = (contactId) => {
    const existingConversation = conversations.find(conv => conv.contactId === contactId);
    if (existingConversation) {
      setSelectedConversation(existingConversation);
    } else {
      const newConversation = { contactId, messages: [] };
      setConversations([...conversations, newConversation]);
      setSelectedConversation(newConversation);
    }
  };

  return (
    <div className="home">
      <Sidebar
        conversations={conversations}
        contacts={dummyData.contacts}
        onSelectConversation={setSelectedConversation}
        onStartConversation={startConversation}
      />
      <ChatWindow conversation={selectedConversation} />
    </div>
  );
}

export default Home;
