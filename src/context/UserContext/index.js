import React, { createContext, useContext, useReducer, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const userReducer = (user, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...user, name: action.payload };
      case "UPDATE_AGE":
        return { ...user, age: action.payload };
        case "UPDATE_EMAIL":
        return { ...user, email: action.payload };
        case "UPDATE_PHONE":
        return { ...user, phone: action.payload };
        case "UPDATE_STREET":
        return { ...user, street: action.payload };
        case "UPDATE_CITY":
        return { ...user, city: action.payload };
        case "UPDATE_ZIP":
        return { ...user, zip: action.payload };
    default:
      return user;
  }
  
};

const initialUser = {
  name: "Alice",
  age: 25,
  contact: {
    email: "alice@example.com",
    phone: "080-123-4567",
  },
  address: {
    street: "123 Main St",
    city: "Bangkok",
    zip: "10000",
  },
};

function UserProvider({ children }) {
    
  const [user, dispatch] = useReducer(userReducer, initialUser);

  const updateName = (name) => {
    dispatch({type:"UPDATE_NAME",payload:name})
  };
  
  const updateAge = (age) => {
    dispatch({type:"UPDATE_AGE",payload:age})
  };
  
  const updateEmail= (email) => {
    dispatch({type:"UPDATE_EMAIL",payload:email})
  };
  
  const updatePhone = (phone) => {
    dispatch({type:"UPDATE_PHONE",payload:phone})
  };
  
  const updateStreet = (street) => {
    dispatch({type:"UPDATE_STREET",payload:street})
  };
  
  const updateCity = (city) => {
    dispatch({type:"UPDATE_CITY",payload:city})
  };
  
  const updateZip = (zip) => {
    dispatch({type:"UPDATE_ZIP",payload:zip})
  };
  return (
    <UserContext.Provider
      value={{
        user,
        updateName,
        updateAge,
        updateEmail,
        updatePhone,
        updateStreet,
        updateCity,
        updateZip,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
