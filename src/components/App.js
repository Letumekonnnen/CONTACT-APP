import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  
  return (
    
    <div className = "ui container">
      <Header />
      <AddContact />
      <ContactList Contacts ={Contacts} />
    
    </div>
  );
}

export default App;
