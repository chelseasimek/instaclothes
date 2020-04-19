import React from 'react';
import { useSelector } from 'react-redux';
import { Clickable, Button } from "reakit";
import { swapPage } from '../../utils';
import { useDispatch } from "react-redux";
import { updateCurrentItem, addItemToCart } from '../../redux/actions';

export default function Cart(){
    const cartState = useSelector(state => state);
    console.log(cartState);
    return null;
}