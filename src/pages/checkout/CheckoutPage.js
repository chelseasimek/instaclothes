import React from 'react';
import { useSelector } from 'react-redux';
import {
    Button,
    Box,
    useRadioState,
    Radio,
    RadioGroup,
    Separator,
} from "reakit";
import { swapPage } from '../../utils';

export default function Checkout() {
    const cartState = useSelector(state => state.cart);
    const sizeRaido = useRadioState({ state: '' });
    const deliveryFee = 4.99;
    let renderResults = cartState.map((item, i) => {
        return (
            <React.Fragment  key= {item.title + i}>
                <Box tabIndex={i+4} onClick={()=>{}}>
                    <img alt={item.imageAlt()} src='' />
                    <h3> {item.title} </h3>
                    <h4> {item.store} </h4>
                    <h4> {item.price} </h4>
                </Box>
            </React.Fragment>

        )
    });

    let totalPrice = cartState.reduce((acc, val) => (acc + parseInt(val.price.replace(/\$/g,""))), deliveryFee);

    let deliveryDetails =
        <React.Fragment>
            <h2>Delivery Fee</h2>
            <h4>${deliveryFee}</h4>
        </React.Fragment>

    let orderTotal =
        <React.Fragment>
            <h2>Order Total</h2>
            <h4>${totalPrice}</h4>
        </React.Fragment>

    let freeBackupSize =
        <React.Fragment>
            <h2>Free Backup Size</h2>
            <fieldset>
            <RadioGroup { ...sizeRaido } aria-label="free-size">
                <label>
                    <Radio { ...sizeRaido } value="xs" /> X-Small
                </label>
                <label>
                    <Radio { ...sizeRaido } value="s" /> Small
                </label>
                <label>
                    <Radio { ...sizeRaido } value="m" /> Medium
                </label>
                <label>
                    <Radio { ...sizeRaido } value="l" /> Large
                </label>
                <label>
                    <Radio { ...sizeRaido } value="xl" /> X-Large
                </label>
            </RadioGroup>
            </fieldset>
        </React.Fragment>
    return (
        <React.Fragment>
            <h1 tabIndex={0}>Checkout</h1>
            {renderResults}
            {deliveryDetails}
            {orderTotal}
            <Separator/>
            {freeBackupSize}
            <Button onClick={()=>{ swapPage('confirmation') }}>Deliver it!</Button>
        </React.Fragment>
    )
}