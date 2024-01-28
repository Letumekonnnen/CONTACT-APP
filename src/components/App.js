import React, {useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [Contacts, setContacts] = useState([]);
   const addContactHandler = (Contact)=>{
    console.log (Contact);
    setContacts([...Contacts,  Contact ]);
   }

  
  return (
    
    <div className = "ui container">
      <Header />
      <AddContact addContactHandler ={addContactHandler}/>
      <ContactList Contacts ={Contacts} />
    
    </div>
  );
}

export default App;
