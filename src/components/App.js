import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const Contacts = [
    { 
      id: "1",
      name: "letu",
      email:"lety@gmail.com"
    },
    { 
      id: "2",
      name: "chali",
      email:"chali@gmail.com"
    },
  ];
  return (
    
    <div className = "ui container">
      <Header />
      <AddContact />
      <ContactList Contacts ={Contacts} />
    
    </div>
  );
}

export default App;
