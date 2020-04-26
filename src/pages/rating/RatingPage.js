import React from 'react';

import {
    Button,
    useRadioState,
    Radio,
    RadioGroup,
    useCheckboxState,
    Checkbox,
    useDialogState,
    Dialog,
    DialogDisclosure,
    DialogBackdrop,
} from "reakit";
import { swapPage } from '../../utils';

export default function Rating(){
  const ratingRadio = useRadioState({ state: '' });
  const feedbackCheckbox = useCheckboxState({ state: [] });
  const dialog = useDialogState();

    return (
        <React.Fragment>
          <h1> RATING </h1>
          <RadioGroup { ...ratingRadio } aria-label="star-rating">
            <label>
              <Radio { ...ratingRadio } value="one" /> 1
            </label>
            <label>
              <Radio { ...ratingRadio } value="two" /> 2
            </label>
            <label>
              <Radio { ...ratingRadio } value="three" /> 3
            </label>
            <label>
              <Radio { ...ratingRadio } value="four" /> 4
            </label>
            <label>
              <Radio { ...ratingRadio } value="five" /> 5
            </label>
          </RadioGroup>
        <h2>Please provide feedback</h2>
        <fieldset>
          <label>
            <Checkbox {...feedbackCheckbox} value="friendly" />
            Friendly
          </label>
          <label>
            <Checkbox {...feedbackCheckbox} value="fast" />
            Fast
          </label>
          <label>
            <Checkbox {...feedbackCheckbox} value="patient" />
            Patient
          </label>
          <label>
            <Checkbox {...feedbackCheckbox} value="helpful-tie" />
            Helpful
          </label>
        </fieldset>
        <>
          <DialogDisclosure {...dialog}>Send rating</DialogDisclosure>
          <DialogBackdrop {...dialog}>
              <Dialog {...dialog} tabIndex={0} aria-label="send-rating">
                  <h2>Rating Sent!</h2>
                  <p>Thank you for rating your shopper!</p>
                  <Button onClick={()=>{swapPage('search')}}>Return to Search</Button>
              </Dialog>
          </DialogBackdrop>
        </>
        </React.Fragment>
    )
}