import React from 'react';
import { useSelector } from 'react-redux';
import { 
    Button,
    Box,
    useCheckboxState,
    Checkbox,
    Separator
} from "reakit";
import { swapPage } from '../../utils';

export default function Checkout(){
    const cartState = useSelector(state => state.cart);
    const sizeCheckbox = useCheckboxState({ state: [] });
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

    let totalPrice = cartState.reduce((acc, val) => (acc + parseInt(val.price.replace(/\$/g,""))), 4.99);

    let deliveryDetails = 
        <React.Fragment>
            <h2>Delivery Fee</h2>
            <h4>$4.99</h4>
        </React.Fragment>

    let orderTotal = 
        <React.Fragment>
            <h2>Order Total</h2>
            <h4>{totalPrice}</h4>
        </React.Fragment>

    let freeBackupSize = 
        <React.Fragment>
            <h2>Free Backup Size</h2>
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
        </React.Fragment>
    return (
        <React.Fragment>
            <h1 tabIndex={0}>Checkout</h1>
            {renderResults}
            {deliveryDetails}
            {orderTotal}
            <Separator/>
            {freeBackupSize}
            <Button>Deliver it!</Button>
        </React.Fragment>
    )
}