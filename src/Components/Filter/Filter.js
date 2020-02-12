import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
  display: flex;
  background-color: lightgreen;
  ${mediumScreen} {
    flex-direction: column;
    
  }
`;

const Filters = ({ name, setNameFilter, resetAll }) => (
  <FilterRow>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
    <Button onClick={resetAll}>Clear</Button>
  </FilterRow>
);

export default Filters;
