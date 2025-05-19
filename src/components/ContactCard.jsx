export default function ContactCard({ user, onClick }) {
        return (
          <div className="contact-card" onClick={onClick}>
            <img
              src={`/avatars/user-${user.id}.jpg`}
              alt={user.name}
              onError={(e) => {
                //e.target.onerror = null;
                e.target.src = '/avatars/default.jpg';
              }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20%',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
            <h3>{user.name}</h3>
          </div>
        );
      }
      