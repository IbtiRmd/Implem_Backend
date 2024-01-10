
import "./pages/Main.css"

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

function App() {
  useEffect(() => {setupAxiosUrl()}, []);
  const setupAxiosUrl = () => {
    axios.interceptors.request.use(
      (config) => {
        config.baseURL = "http://localhost:3001/api/v1/user";
        return config;
      },
      (err) => Promise.reject(err)
    );
  };
  return (
    <Provider store={store}>
       <ToastContainer />
      <Navigation />
    </Provider>
  );
}
export default App;