import React from "react";
import PropTypes from "prop-types";
import HelloWorld from "./HelloWorld";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import gStore from "./reducer/configureStore";

const App = () => {
    return (
      <Provider store={gStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={('Home')} />
            <Route path="/hello" element={<HelloWorld greeting="Friends" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
}

export default App
