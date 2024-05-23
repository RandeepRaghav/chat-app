# Chat App
This is a frontend chat application built using React.js. The application allows a dummy user to manage conversations, send and receive messages, and search through contacts.

## Features
- **Load Dummy Data**: Loads conversations and contacts from a local JSON file.
- **Search**: Allows users to search conversations by contact name.
- **Conversations List**: Displays all conversations with contact names and the last message.
- **Create New Conversation**: Opens a modal to start a new conversation with a contact.
- **Chat Window**: Displays the selected conversation and allows sending messages.
- **Error Handling**: Displays appropriate alerts for errors and success.
- **React Router**: Uses React Router for navigation.
- **React Hooks**: Uses React hooks for state management.
- **Data Persistence (Bonus)**: Keeps conversations and messages intact after page refresh.


## Installation
To run this application locally, follow these steps:

- Clone this repository to your local machine.
- Navigate to the project directory.
- Install dependencies by running npm install.
- Start the development server with npm start.
- Open your browser and navigate to http://localhost:3000 to view the app.

## Usage
Once the application is running, you will see a list of existing conversations on the sidebar. Clicking on a conversation will display the chat history in the main chat window. You can also start a new conversation by clicking the "New Conversation" button on the sidebar and selecting a contact.

## Folder Structure
- **public/:** Contains the public assets and HTML template.
- **src/:** Contains the source code for the application.
- **components/:** Contains React components used in the application.
- **pages/:** Contains React components representing different pages/routes of the application.
- **data/:** Contains dummy data used for testing.
- **App.js:** Main component that sets up the application routes.
- **index.js:** Entry point of the application.
- **index.css:** Global styles for the application.

### 1. ChatWindow
- **Purpose:** The ChatWindow component displays the chat history for a selected conversation and allows the user to send messages.
- **Functionality:**
  - Displays messages in a conversation thread.
  - Provides an input field for typing and sending new messages.
  - Sends messages to the conversation thread when the user clicks the "Send" button.

### 2. Conversation
- **Purpose:** The Conversation component represents a single conversation in the sidebar.
- **Functionality:**
  - Displays the name of the contact associated with the conversation.
  - Shows the latest message in the conversation.

### 3. NewConversationModal
- **Purpose:** The NewConversationModal component allows the user to start a new conversation by selecting a contact from a modal.
- **Functionality:**
  - Displays a list of contacts.
  - Allows the user to select a contact to start a conversation with.
  - Closes the modal when the user selects a contact or clicks the "Close" button.

### 4. SearchBar
- **Purpose:** The SearchBar component provides a search input for filtering contacts in the sidebar.
- **Functionality:**
  - Allows the user to search for contacts by typing in the input field.
  - Filters the list of contacts based on the search term entered by the user.

### 5. Sidebar
- **Purpose:** The Sidebar component displays a list of conversations and provides options for starting new conversations.
- **Functionality:**
  - Displays a list of conversations based on the user's contacts.
  = Allows the user to start a new conversation by clicking the "New Conversation" button.
  - Filters conversations based on the search term entered in the SearchBar component.

### 6. Home (Page)
- **Purpose:** The Home page component serves as the main entry point of the application, rendering the Sidebar and ChatWindow components.
- **Functionality:**
  - Manages state for conversations and selected conversation.
  - Passes props to Sidebar and ChatWindow components.
  - Handles starting new conversations and selecting existing conversations.

### 7. App
- **Purpose:** The App component sets up the application routes using React Router.
- **Functionality:**
  - Defines routes for different pages of the application.
  - Renders the Home page component.

### 8. Index Files (index.js, index.css)
- **Purpose:** The index files serve as entry points for rendering the application and providing global styles.
- **Functionality:**
  - Renders the root component of the application (App) into the HTML root element.
  - Includes global CSS styles for the application.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
