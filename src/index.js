import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";
//import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<StarRating
      color={"red"}
      defaultRating={3}
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
/>*/}
  </React.StrictMode>
);
