import React from "react";
import { useUserContext } from "../../context/UserContext";

function ButtonForm() {
  const { resetForm } = useUserContext();
  return (
    <div>
      <button type="submit">Update Profile</button>
      <button onClick={resetForm}>reset</button>
    </div>
  );
}

export default ButtonForm;
