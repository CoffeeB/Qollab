import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { PaystackButton } from 'react-paystack'

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState(false);
    const modalBodyRef = useRef(null);

    const paymentDetails = {
        email: userProfile?.email,
        amount: paymentAmount,
        metadata: {
            name: userProfile?.username,
            phone: "090909090190",
        },
        publicKey: "pk_test_05808df60c6de069a3bf25f007b37a7ad45a91cc",
        text: "Pay Now",
        onSuccess: () => setPaymentStatus(true),
        //   alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => setPaymentStatus("cancelled"),
        // alert("Wait! You need this oil, don't go!!!!"),
    };

    return (
        <div>
            <PaystackButton type="button" className="btn btn-primary btn-sm w-100 mb-2" {...paymentDetails} />
        </div>
    )
}
