import React from "react";
import { BrowserRouter } from "react-router-dom";
import SearchType from "./Search/SearchType";

const App = () => {
  return (
    <BrowserRouter>
      <div className="test">
        <SearchType />
      </div>
    </BrowserRouter>
  );
};

export default App;
