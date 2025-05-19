import { useEffect, useState } from 'react';
import ContactCard from '../components/ContactCard';


const ContactsPage = () => {
        const [contacts, setContacts] = useState([]);

        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setContacts(data))
                .catch(err => console.error('Error fetching users:', err));

        }, []);

        return (
                <div className = "contacts-grid">
                        {contacts.map(contact => (
                                <ContactCard key={contact.id} contact={contact} />
                        ))}
                        </div>
        );
};

export default ContactsPage;