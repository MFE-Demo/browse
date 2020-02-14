import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 7px 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  // background-color: #99aab5;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom: 0.5px solid black;
  ${mediumScreen} {
    flex-direction: column;
  }
`;

const Filters = ({ name, setNameFilter, resetAll }) => (
  <FilterRow>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
    <Button style={{ height: "100%" }} onClick={resetAll}>
      Clear
    </Button>
  </FilterRow>
);

export default Filters;
