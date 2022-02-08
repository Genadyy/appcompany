import React from "react";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Blocks from "./Blocks/Blocks";
import Footer from "./Footer/Footer";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Title />
      <Blocks />
      <Footer />
    </div>
  );
}

export default Main;
