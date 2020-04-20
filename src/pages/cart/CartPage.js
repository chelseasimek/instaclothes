import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Box } from "reakit";
import { swapPage } from '../../utils';

export default function Cart(){
    const cartState = useSelector(state => state.cart);
    const newest = cartState[cartState.length -1];
    const headerStr = `${newest && newest.title ? newest.title : ''} added to your cart!`;

    let renderResults = cartState.map((item, i) => {
        return (
            <React.Fragment  key= {item.title + i}>
                <Box tabIndex={i+4} onClick={()=>{}}>    
                    <img alt={item.imageAlt()} src='' />
                    <h3> {item.title} </h3>
                    <h4> {item.store} </h4>
                    <h4> {item.price} </h4>
                </Box>
                <Button tabIndex={i+4}>Delete</Button>
            </React.Fragment>

        )
    });
    return (
        <React.Fragment>
            <h1 tabIndex={0}>Cart</h1>
            <h2 tabIndex={1}>{headerStr}</h2>
            <Button tabIndex={2} onClick={()=>{ swapPage('search') }}>Keep Shopping</Button>
            <Button tabIndex={3} onClick={()=>{ swapPage('checkout') }}>Checkout</Button>
            {renderResults}
        </React.Fragment>
    )
}