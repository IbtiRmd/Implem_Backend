import React from "react";
import "../Main.css";
import { useSelector } from "react-redux";
import { useState, createContext } from "react";
import UserNameForm from "../../components/userNameForm/UserNameForm";

const UserContext = createContext()

function User() {
  const { user, token } = useSelector((state) => ({
    user: state.userReducer.user,
    token: state.userReducer.token,
  }));
  console.log(user);
  const [editingName, setEditingName] = useState(false);

  const toggleEditingName = () => {
    setEditingName((prevState) => !prevState);
  };


 

  return token ? (
    <UserContext.Provider value={editingName}>
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${user.firstName} ${user.lastName}`} !
          </h1>
          <button className="edit-button" onClick={toggleEditingName}>
            Edit Name
          </button>
      

        {editingName && (
          <UserNameForm toggleEditingName={toggleEditingName} />
        )}
  </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
    </UserContext.Provider>
  )
   : (
   <div>login...</div>
  );
}

export default User;