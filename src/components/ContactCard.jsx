// const ContactCard = ({ contact }) => {
//         const { name, email, phone, website, company } = contact;

//         return (
//                 <div className="contact-card">
//                         <h3>{name}</h3>
//                         <p><strong>Email:</strong> {email}</p>
//                         <p><strong>Phone:</strong> {phone}</p>
//                         <p><strong>Website:</strong> {website}</p>
//                         <p><strong>Company:</strong> {company.name}</p>
//                 </div>
//         );
// };

// export default ContactCard;
export default function ContactCard({ user, onClick }) {
        return (
          <div className="contact-card" onClick={onClick}>
            <img
              src={`/avatars/user-${user.id}.jpg`}
              alt={user.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/avatars/default.jpg';
              }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        );
      }
      