import React from 'react';

import {
    Button, Box
} from "reakit";
import { swapPage } from '../../utils';

export default function Arrival(){
    return (
        <React.Fragment>
            <Box>
                <h1>Arrival</h1>
                <h2>Your Delivery Has Arrived!</h2>
                <p>Your shopper has arrived and is ready to complete your order, they will wait upt to 5 minutes.</p>
            </Box>
            <Button>Call Shopper</Button>
            <Button onClick={()=> { swapPage('rating') }}>Complete Pick Up</Button>
        </React.Fragment>
    )
}