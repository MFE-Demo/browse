import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";
import "./Filter.css";
import { findByLabelText } from "@testing-library/react";

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 7px 10px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #99aab5;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  // border-bottom: 0.5px solid black;
  box-shadow: 0 5px 6px -6px black;
  ${mediumScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  setNameFilter,
  resetAll,
  searchType,
  setSearchType
}) => (
  <FilterRow>
    <section
      style={{
        width: "35%",
        maxWidth: "355px",
        textAlign: "center",
        display: "flex",
        justifyContent: "flexStart",
        marginBottom: "5px",
        fontSize: "15px"
      }}
    >
      <p
        className={
          searchType === "movie"
            ? "search-selector selected"
            : "search-selector"
        }
        onClick={() => setSearchType("movie")}
      >
        Movies
      </p>
      |
      <p
        className={
          searchType === "series"
            ? "search-selector selected"
            : "search-selector"
        }
        onClick={() => setSearchType("series")}
      >
        Series
      </p>
    </section>
    <section style={{ display: "flex" }}>
      <TextInput label="Search:" value={name} onChange={setNameFilter} />
      <Button style={{ height: "100%" }} onClick={resetAll}>
        Clear
      </Button>
    </section>
  </FilterRow>
);

export default Filters;
