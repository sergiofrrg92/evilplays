import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import cards from "../utils/cards"

function App() {
  return (
    <>
        <Header/>
        <Main 
          cards={cards}
        />
        <Footer/>
        
    </>
  );
}

export default App;