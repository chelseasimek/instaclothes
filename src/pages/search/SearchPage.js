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
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton,
   } from "reakit";

export default function Search(){

 const colorRadio = useRadioState({ state: 'red' });
 const sizeCheckbox = useCheckboxState({ state: [] });
 const form = useFormState({
  values: { name: "" },
  onValidate: (values) => {
    if (!values.name) {
      const errors = {
        name: "",
      };
      throw errors;
    }
  },
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
});

  return (
    <React.Fragment>
      <h1> SEARCH </h1>
      <Form {...form}>
      <FormLabel {...form} name="Search">
        Search
      </FormLabel>
      <FormInput {...form} name="search" placeholder="Blur Shirt" />
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
        <FormSubmitButton {...form}>Submit</FormSubmitButton>
      </Form>
    </React.Fragment>
  )
}