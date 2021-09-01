import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Main />
      </div>
      <Aside />
    </div>
  );
}
