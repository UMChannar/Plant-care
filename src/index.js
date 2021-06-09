import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import classes from "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./store/favourite-context";

ReactDOM.render(
  <div className={classes.change_background}>
    <FavouritesContextProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouritesContextProvider>
  </div>,
  document.getElementById("root")
);
