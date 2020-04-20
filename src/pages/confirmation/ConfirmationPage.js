import React from 'react';

import { 
    Button, Box
} from "reakit";

export default function Confirmation(){
    return (
        <React.Fragment>
            <Box tabIndex={0}>
                <h1>Confirmation</h1>
                <h2>Your Order is on the way!</h2>
                <p>Your driver is enroute with your order from the store.</p>
                <p>Your estimated wait time is now 30 minutes.</p>
            </Box>
            <Button>View Order</Button>
            <Button>Cancel Order</Button>
        </React.Fragment>
    )
}