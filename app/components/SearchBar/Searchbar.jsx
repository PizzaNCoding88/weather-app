import React from "react";
import SearchBarStyle from "./Searchbar.module.css";
import Image from "next/image";
import SearchIcon from "../../../public/assets/search-icon.png";
import { useState } from "react";

const SearchBar = (props) => {
  const { submitParent, style } = props;
  const [inputText, setInputText] = useState();

  function handleChange(e) {
    let location = e.target.value;
    setInputText(location);
  }

  return (
    <>
      <div className={SearchBarStyle.formContainer}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitParent(inputText);
          }}
          className={SearchBarStyle.form}
        >
          <input
            placeholder="Enter your city..."
            onChange={handleChange}
            className={`${SearchBarStyle.inputbar} ${
              style === "onlysearch"
                ? SearchBarStyle.onlysearch
                : SearchBarStyle.withweather
            }`}
          ></input>
          <button type="submit" className={SearchBarStyle.searchButton}>
            <Image
              alt="search icon"
              src={SearchIcon}
              className={SearchBarStyle.searchIcon}
            />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;