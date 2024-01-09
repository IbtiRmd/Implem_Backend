import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/user";
import argentBankLogo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../header/Header.css";

export default function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { token, user } = useSelector((state) => ({
    token: state.userReducer.token,
    user: state.userReducer.user,
  }));
  const goToUser = () => {
    navigate("/user");
  };
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Bank Tree"
          />

          <h1 className="sr-only">Argent Bank</h1>
        </a>

        <div className="userNameContainer">
          <div className="userNameContent">
            <div onClick={goToUser} className="userNameLogo">
              {user?.userName}
            </div>
            <FontAwesomeIcon icon={faCircleUser} className="userCircle" />
          </div>
          {token ? (
            <div onClick={() => logoutUser(dispatch)} className="back">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </div> //Fonction fléché pour que ca se lance que au click (uniquement quand il y a parametre)
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}