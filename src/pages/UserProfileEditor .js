import React from "react";
import ProfileForm from "../components/NestedState/ProfileForm";
import ContactForm from "../components/NestedState/ContactForm";
import AddressForm from "../components/NestedState/AddressForm";
import UserProvider from "../context/UserContext";
import ButtonForm from "../components/NestedState/ButtonForm";

function UserProfileEditor() {
  return (
    <UserProvider>
      <ProfileForm />
      <ContactForm />
      <AddressForm />
      <ButtonForm />
    </UserProvider>
  );
}

export default UserProfileEditor;
