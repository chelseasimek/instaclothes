import React from 'react';
import { useSelector } from 'react-redux'

export default function Results(){
    const searchState = useSelector(state => state.search);
    let stores = [ 'Target', 'Norstrom', 'Marshalls', 'Aerie', 'Bloomingdales', 'The Gap' ]
    let resultsArr = [];

    for (let i = 0; i <= 10; i++) {
        resultsArr.push({
            title: `${searchState.color} ${searchState.occasions[Math.floor(Math.random() * searchState.occasions.length)]} Shirt`,
            store: stores[Math.floor(Math.random() * stores.length)],
            price: `$ ${(Math.floor(Math.random() * 10000) + 1)/100}`,
            imageAlt: () => { return `Image of a ${this.title}` }
        })
    }

    return null;
}