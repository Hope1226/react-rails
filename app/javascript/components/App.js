import React from "react";
import PropTypes from "prop-types";
import HelloWorld from "./HelloWorld";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={('Home')} />
          <Route path="/hello" element={<HelloWorld greeting="Friends" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
