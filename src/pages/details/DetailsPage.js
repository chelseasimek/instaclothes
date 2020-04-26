import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from "reakit";
import { swapPage } from '../../utils';
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/actions';

export default function Details() {
    const itemState = useSelector(state => state.item);
    const item = itemState.item;
    const dispatch = useDispatch();
    console.log(itemState);

    let _addToCart = (result) => {
      dispatch(addItemToCart(result));
      swapPage('cart');
    }
    return (
        <React.Fragment>
            <h2>ITEM DETAILS</h2>
            <img alt={item.imageAlt()} src='' />
            <h3> {item.title} </h3>
            <h4> {item.store} </h4>
            <h4> Size: {item.size} </h4>
            <h4> {item.price} </h4>
            <h4> In Stock: { Math.floor(Math.random() * 150) }</h4>
            <h5>Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button onClick={()=>{_addToCart(item)}}>Reserve Item</Button>
            <Button onClick={()=>{swapPage('results')}}>Return to Results</Button>
        </React.Fragment>
    );
}