import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_BTqfq0dYbC5ZziywdTF2zF3k00CJXb6fs8';

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            alipay
            bitcoin
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;