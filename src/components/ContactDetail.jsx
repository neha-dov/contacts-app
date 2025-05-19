export default function ContactDetail({ user, onBack }) {
        return (
          <div className="contact-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <button onClick={onBack} style={{ marginBottom: '1rem', color: '#006400' }}>
              ← Back
            </button>
            <img
              src={`/avatars/user-${user.id}.jpg`}
              alt={user.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/avatars/default.jpg';
              }}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company?.name}</p>
          </div>
        );
      }
      