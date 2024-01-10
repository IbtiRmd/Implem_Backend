import React, { useEffect, useState } from "react";
import "./UserNameForm.css"; //Importation des modules nécessaires, notamment useState pour la gestion des états
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_PROFILE_URL } from "../../redux/api/api";
import { loginUserToken } from "../../redux/actions/user";
import { toast } from "react-toastify";
import { createContext, useContext } from "react";


function UserNameForm({ toggleEditingName }) {
  
  //const isCollapsed = useContext(UserContext);

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => ({
    user: state.userReducer.user,
    token: state.userReducer.token,
  }));
  // On récupère le user qu'on a dans Redux

  const [userName, setUserName] = useState(""); // On déclarer un userName avec une valeur vide
  useEffect(() => {
    setUserName(user.userName); // On met la valeur du userName à jour avec le userName réel de l'utilisateur
  }, [user]);

  
  const handleUserNameChange = (e) => 
  {
    setUserName(e.target.value);
  };

  const updadeUser = (e) => {
    toggleEditingName();
    e.preventDefault();
    const body = { userName: userName };
    console.log(body);

    axios
      .put(USER_PROFILE_URL, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        loginUserToken(token, dispatch);
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => updadeUser(e)}>
        <label>
          User Name:
          <input type="text" value={userName} onChange={handleUserNameChange} />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={user.firstName}
            readOnly
            className="grayButton"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={user.lastName}
            readOnly
            className="grayButton"
          />
        </label>

        <div className="button-container">
          <button type="submit">Save</button>
          <button type="button">Cancel</button>

          
         
        </div>
      </form>
    </div>
  );
}

export default UserNameForm;