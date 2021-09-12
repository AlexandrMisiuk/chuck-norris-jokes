import React, { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";

export default function App() {
  const [isFavouritesShow, setIsFavouritesShow] = useState(false);

  return (
    <div className="container">
      <div className="wrapper">
        <Header
          isFavouritesShow={isFavouritesShow}
          setIsFavouritesShow={setIsFavouritesShow}
        />
        <Main />
      </div>
      <Aside
        isFavouritesShow={isFavouritesShow}
        setIsFavouritesShow={setIsFavouritesShow}
      />
    </div>
  );
}
