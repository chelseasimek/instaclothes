import history from './history';
import { useState, useCallback } from 'react'

export function swapPage(route) {
    // let url =  `${window.location.origin}/${route}` ;
    history.push(route);
}  