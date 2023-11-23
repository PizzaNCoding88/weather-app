import React from "react";
import Image from "next/image";
import SearchIcon from "../../../public/assets/search-icon.png";
import { useState, useRef } from "react";
import SearchBarStyleOnly from "./Searchbaronly.module.css";
import SearchBarStyleIncluded from "./Searchbarincluded.module.css";

const SearchBar = (props) => {
  const { submitParent, style } = props;
  const [inputText, setInputText] = useState();
  const inputValue = useRef();

  function handleChange(e) {
    let location = e.target.value;
    setInputText(location);
  }

  return (
    <>
      <div
        className={`${
          style == "onlysearch"
            ? SearchBarStyleOnly.formContainer
            : SearchBarStyleIncluded.formContainer
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitParent(inputText);
            e.target.reset();
          }}
          className={`${
            style == "onlysearch"
              ? SearchBarStyleOnly.form
              : SearchBarStyleIncluded.form
          }`}
        >
          <input
            placeholder={
              style == "onlysearch" ? "Enter your city..." : "Change city..."
            }
            onChange={handleChange}
            className={`${
              style == "onlysearch"
                ? SearchBarStyleOnly.inputbar
                : SearchBarStyleIncluded.inputbar
            }`}
          ></input>
          <button
            type="submit"
            className={`${
              style == "onlysearch"
                ? SearchBarStyleOnly.searchButton
                : SearchBarStyleIncluded.searchButton
            }`}
          >
            <Image
              alt="search icon"
              src={SearchIcon}
              className={`${
                style == "onlysearch"
                  ? SearchBarStyleOnly.searchIcon
                  : SearchBarStyleIncluded.searchIcon
              }`}
            />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
