import axios from "axios";
import { LOGIN_USER_URL, USER_PROFILE_URL } from "../api/api";
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../types/user";
import { toast } from "react-toastify";

export const loginUser = (body, goToUser, dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  axios
    .post(LOGIN_USER_URL, body)
    .then((res) => {
      const token = res.data.body.token;
      axios
        .post(
          USER_PROFILE_URL,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          localStorage.setItem("token", res.data.body.token); //enregistre sur ce pc que jutilise , une variable qui sappelle token et qui contient res.data.body.token
          toast(res.data.message);
          goToUser();

          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: { token: token, user: response.data.body },
          });
          console.log(response.data.body);
        });
    })
    .catch((err) => {
      toast(err.message);
      dispatch({ type: LOGIN_USER_FAILED });
    });
};

export const loginUserToken = (token, dispatch) => {
  axios
    .post(
      USER_PROFILE_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { token: token, user: response.data.body },
      });
    })
    .catch(() => {
      logoutUser(dispatch);
    });
};

export const logoutUser = (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  localStorage.removeItem("token");
};