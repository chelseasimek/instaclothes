import React from 'react';
import { useSelector } from 'react-redux';
import { Clickable, Button } from "reakit";
import { swapPage } from '../../utils';
import { useDispatch } from "react-redux";
import { updateCurrentItem } from '../../redux/actions';

export default function Results(){
    const searchState = useSelector(state => state.search);
    let stores = [ 'Target', 'Norstrom', 'Marshalls', 'Aerie', 'Bloomingdales', 'The Gap' ]
    let resultsArr = [];

    for (let i = 0; i <= 10; i++) {
        resultsArr.push({
            title: `${searchState.color} ${searchState.occasions[Math.floor(Math.random() * searchState.occasions.length)]} Shirt`,
            store: stores[Math.floor(Math.random() * stores.length)],
            price: `$ ${(Math.floor(Math.random() * 10000) + 1)/100}`,
            imageAlt: function () { return `Image of a ${this.title}` }
        })
    }

    let _getDetails = (result) => {
        console.log(result);
        // useDispatch(updateCurrentItem())
        // swapPage('details');
    }

    let _addToCart = () => {
        swapPage('cart')
    }

    let renderResults = resultsArr.map((result, i) => {
        return (
            <React.Fragment  key= {result.title + i}>
                <Clickable tabIndex={i+1} onClick={()=>{_getDetails(result)}}>    
                    <img alt={result.imageAlt()} src='' />
                    <h3> {result.title} </h3>
                    <h4> {result.store} </h4>
                    <h4> {result.price} </h4>
                </Clickable>
                <Button tabIndex={i+1} onClick={()=>{_addToCart(result)}} >Reserve Item</Button>
            </React.Fragment>

        )
    })
    return (
        <React.Fragment>
            <h2>Results</h2>
            { renderResults }
        </React.Fragment>
    );
}