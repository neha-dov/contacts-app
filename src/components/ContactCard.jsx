const ContactCard = ({ contact }) => {
        const { name, email, phone, website, company } = contact;

        return (
                <div className="contact-card">
                        <h3>{name}</h3>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong> {phone}</p>
                        <p><strong>Website:</strong> {website}</p>
                        <p><strong>Company:</strong> {company.name}</p>
                </div>
        );
};

export default ContactCard;