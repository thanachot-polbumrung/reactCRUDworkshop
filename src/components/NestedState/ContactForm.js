import React, { use, useContext, useState } from "react";
import { UserContext, useUserContext } from "../../context/UserContext";

function ContactForm() {
  const context = useUserContext();
  const { user,  updateEmail, updatePhone } = context;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) =>
            updatePhone(e.target.value)
          }
        />
      </label>
    </form>
  );
}

export default ContactForm;
