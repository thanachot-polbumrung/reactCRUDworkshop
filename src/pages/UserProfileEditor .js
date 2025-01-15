import React from "react";
import ProfileForm from "../components/NestedState/ProfileForm";
import ContactForm from "../components/NestedState/ContactForm";
import AddressForm from "../components/NestedState/AddressForm";
import UserProvider from "../context/UserContext";



function UserProfileEditor() {
  return (
    <div>
      <UserProvider>
        <ProfileForm />
        <ContactForm />
        <AddressForm />
        <button type="submit">Update Profile</button>
        <button>reset</button>
      </UserProvider>
    </div>
  );
}

export default UserProfileEditor;
