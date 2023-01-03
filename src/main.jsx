import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Searchbox from "./Component/Searchbox/Search";
import Container from "./Component/Body/Container";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Searchbox />
      {/* <Container /> */}
      <div className="footer">
        <Footer />
        <Footer />
        <Footer />
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
