import React from "react";
import { useUserContext } from "../../context/UserContext";

function ContactForm() {
  const { user, updateEmail, updatePhone } = useUserContext();

  return (
    <div>
      <label>
        email:
        <input
          type="text"
          value={user.contact.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
      </label>
      <label>
        phone:
        <input
          type="text"
          value={user.contact.phone}
          onChange={(e) => updatePhone(e.target.value)}
        />
      </label>
    </div>
  );
}

export default ContactForm;
