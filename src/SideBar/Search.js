import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Search({ placeholder }) {
  return (
    <div className="search">
      <SearchIcon /> <input placeholder={placeholder} type="text" />
    </div>
  );
}

export default Search;
