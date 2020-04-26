import React from 'react';

import {
  useRadioState,
  Radio,
  RadioGroup,
  useCheckboxState,
  Checkbox,
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormSubmitButton as FormSubmitButton,
  } from "reakit";

import { useDispatch } from "react-redux";
import { updateSearchValues } from '../../redux/actions';
import { swapPage } from '../../utils';

export default function Search() {
  const dispatch = useDispatch();
  const colorRadio = useRadioState({ state: 'red' });
  const sizeCheckbox = useCheckboxState({ state: ['xs', 's', 'm', 'l', 'xl'] });
  const occasionCheckbox = useCheckboxState({ state: [ 'formal', 'casual', 'cocktail', 'back-tie', 'sport', 'business' ] });
  const form = useFormState({
   values: { search: "" },
   onSubmit: (values) => {
     values = {
       input: values.search,
       color: colorRadio.state,
       size: sizeCheckbox.state,
       occasion: occasionCheckbox.state
     }
     dispatch(updateSearchValues(values));
     swapPage('results');
   },
 });

  return (
    <React.Fragment>
      <h1> SEARCH </h1>
      <Form {...form}>
        <FormLabel {...form} name="search">
          Search
        </FormLabel>
        <FormInput {...form} name="search" placeholder="Shirt" />
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
            <Checkbox {...occasionCheckbox} value="formal" />
            Formal
          </label>
          <label>
            <Checkbox {...occasionCheckbox} value="casual" />
            Casual
          </label>
          <label>
            <Checkbox {...occasionCheckbox} value="cocktail" />
            Cocktail
          </label>
          <label>
            <Checkbox {...occasionCheckbox} value="back-tie" />
            Black Tie
          </label>
          <label>
            <Checkbox {...occasionCheckbox} value="sport" />
            Sport
          </label>
          <label>
            <Checkbox {...occasionCheckbox} value="business" />
            Business
          </label>
        </fieldset>
        <FormSubmitButton {...form}>Go</FormSubmitButton>
      </Form>
    </React.Fragment>
  )
}