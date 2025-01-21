import React from "react";
import { useUserContext } from "../../context/UserContext";

function ProfileForm() {
  const { user, updateName, updateAge } = useUserContext();

  return (
    <div>
      <h2>Profile</h2>
      <label>
        Name:
        <input
          type="text"
          value={user.name}
          onChange={(e) => updateName(e.target.value)}
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          value={user.age}
          onChange={(e) => updateAge(e.target.value)}
        />
      </label>
    </div>
  );
}

export default ProfileForm;
