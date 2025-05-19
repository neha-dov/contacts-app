import { useEffect, useState } from 'react';
import ContactCard from './components/ContactCard';
import ContactDetail from './components/ContactDetail';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  return (
    <div>
      <h1>My Contacts</h1>
      {selectedContact ? (
        <ContactDetail user={selectedContact} onBack={() => setSelectedContact(null)} />
      ) : (
        <div className="contacts-grid">
          {contacts.map((user) => (
            <ContactCard
              key={user.id}
              user={user}
              onClick={() => setSelectedContact(user)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
