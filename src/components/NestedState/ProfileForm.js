import React, { useContext, useState } from "react";
import { UserContext,useUserContext } from "../../context/UserContext";


function ProfileForm() {

  const {user,updateName,updateAge} = useUserContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    // updateUser({ name, age });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile</h2>
      <label>
        Name:
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            updateName(e.target.value)

          }
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          value={user.age}
          onChange={(e) =>
            updateAge(e.target.value)
          }
        />
      </label>
    </form>
  );
}

export default ProfileForm;
