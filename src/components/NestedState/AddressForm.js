import React, { useContext, useState } from "react";
import { UserContext, useUserContext } from "../../context/UserContext";


function AddressForm() {

  const {user,updateStreet,updateCity,updateZip} = useUserContext()
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        street:
        <input
          type="text"
          value={user.address.street}
          onChange={(e) =>
            updateStreet(e.target.value)
          }
        />
      </label>
      <label>
        city:
        <input
          type="text"
          value={user.address.city}
          onChange={(e) =>
            updateCity(e.target.value)
          }
        />
      </label>
      <label>
        zip:
        <input
          type="text"
          value={user.address.zip}
          onChange={(e) =>
            updateZip(e.target.value)
          }
        />
      </label>
    </form>
  );
}

export default AddressForm;
