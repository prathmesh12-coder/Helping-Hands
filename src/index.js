import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/main.scss";
import "animate.css/animate.min.css";
import "./css/animated-counter-prograssbar.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";
import reducers from "./reducers";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(reducers, middleware);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-hyaxtlglzw4m6puw.us.auth0.com"
    clientId="pc1YWSfU1RXlVaSP55US4BLED8mIE0C0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
  
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  </Auth0Provider>
);
