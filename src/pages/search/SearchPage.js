import React from 'react';

  import { useRadioState, Radio, RadioGroup } from "reakit/Radio";

export default function Search(){

 const colorRadio = useRadioState({ state: 'red' });
  return (
    <React.Fragment>
      <h1> SEARCH </h1>
      <label for="search-id">Search</label>
      <input type="text" id="search-id" name="search-id"></input>
      <RadioGroup { ...colorRadio } aria-label="shirt-colors">
        <label>
          <Radio { ...colorRadio } value="red" /> red
        </label>
        <label>
          <Radio { ...colorRadio } value="orange" /> orange
        </label>
        <label>
          <Radio { ...colorRadio } value="yellow" /> yellow
        </label>
        <label>
          <Radio { ...colorRadio } value="green" /> green
        </label>
        <label>
          <Radio { ...colorRadio } value="blue" /> blue
        </label>
        <label>
          <Radio { ...colorRadio } value="purple" /> purple
        </label>
      </RadioGroup>
    </React.Fragment>
  )
}