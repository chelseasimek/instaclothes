import React from 'react';

import { 
    Button,
    Box,
    useDialogState,
    Dialog,
    DialogDisclosure,
    DialogBackdrop,
} from "reakit";
import { swapPage } from '../../utils';

export default function Confirmation(){
    const dialog = useDialogState();

    let _cancelOrder = () => {
        dialog.hide();
        swapPage('search');
    }

    let _viewOrder = () => {
        swapPage('checkout');
    }
    return (
        <React.Fragment>
            <Box tabIndex={0}>
                <h1>Confirmation</h1>
                <h2>Your Order is on the way!</h2>
                <p>Your driver is enroute with your order from the store.</p>
                <p>Your estimated wait time is now 30 minutes.</p>
            </Box>
            <Button onClick={_viewOrder}>View Order</Button>
            <>
                <DialogDisclosure {...dialog}>Cancle Order</DialogDisclosure>
                <DialogBackdrop {...dialog}>
                    <Dialog {...dialog} tabIndex={0} aria-label="Cancel Order">
                        <h2>Cancel Order</h2>
                        <p>Cancelling before your shopper has left for the store will not incure any fees</p>
                        <Button onClick={_cancelOrder}>Cancel Order</Button>
                    </Dialog>
                </DialogBackdrop>
            </>
        </React.Fragment>
    )
}