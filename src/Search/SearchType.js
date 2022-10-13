import React, { Fragment } from "react";
import { Link, Routes, Route } from "react-router-dom";
import SearchBuy from "./SearchBuy/SearchBuy";
import SearchRent from "./SearchRent/SearchRent";

const SearchType = () => {
  return (
    <Fragment>
      <header>
        <h2>Properties to call home</h2>
      </header>
      <div>
        <div>
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
        </div>
        <Routes>
          <Route path="/buy" element={<SearchBuy />} />
          <Route path="/rent" element={<SearchRent />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default SearchType;
