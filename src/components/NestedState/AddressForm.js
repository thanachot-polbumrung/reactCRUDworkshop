import React from "react";
import { useUserContext } from "../../context/UserContext";

function AddressForm() {
  const { user, updateStreet, updateCity, updateZip } = useUserContext();

  return (
    <div>
      <label>
        street:
        <input
          type="text"
          value={user.address.street}
          onChange={(e) => updateStreet(e.target.value)}
        />
      </label>
      <label>
        city:
        <input
          type="text"
          value={user.address.city}
          onChange={(e) => updateCity(e.target.value)}
        />
      </label>
      <label>
        zip:
        <input
          type="text"
          value={user.address.zip}
          onChange={(e) => updateZip(e.target.value)}
        />
      </label>
    </div>
  );
}

export default AddressForm;
