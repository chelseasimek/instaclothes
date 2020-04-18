import React from 'react';

  import { 
    useRadioState,
    Radio,
    RadioGroup,
    useCheckboxState,
    Checkbox
   } from "reakit";

export default function Search(){

 const colorRadio = useRadioState({ state: 'red' });
 const sizeCheckbox = useCheckboxState({ state: [] });


  return (
    <React.Fragment>
      <h1> SEARCH </h1>
      <label for="search-id">Search</label>
      <input type="text" id="search-id" name="search-id"></input>
      <h2>Colors</h2>
      <fieldset>   
        <RadioGroup { ...colorRadio } aria-label="shirt-colors">
          <label>
            <Radio { ...colorRadio } value="red" /> Red
          </label>
          <label>
            <Radio { ...colorRadio } value="orange" /> Orange
          </label>
          <label>
            <Radio { ...colorRadio } value="yellow" /> Yellow
          </label>
          <label>
            <Radio { ...colorRadio } value="green" /> Green
          </label>
          <label>
            <Radio { ...colorRadio } value="blue" /> Blue
          </label>
          <label>
            <Radio { ...colorRadio } value="purple" /> Purple
          </label>
        </RadioGroup>
      </fieldset>   

      <h2>Size</h2>
      <fieldset>   
        <label>   
          <Checkbox {...sizeCheckbox} value="xs" />
          X-Small
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="s" />
          Small
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="m" />
          Medium
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="l" />
          Large
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="xl" />
          X-Large
        </label>
      </fieldset>    

      <h2>Occasion</h2>
      <fieldset>   
        <label>
          <Checkbox {...sizeCheckbox} value="formal" />
          Formal
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="casual" />
          Casual
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="coctail" />
          Cocktail
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="back-tie" />
          Black Tie
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="sport" />
          Sport
        </label>
        <label>
          <Checkbox {...sizeCheckbox} value="business" />
          Business
        </label>
      </fieldset>    
    </React.Fragment>
  )
}