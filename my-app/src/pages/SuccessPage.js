import './SuccessPage.css'
import {React, useState} from 'react';

function SuccessPage() {
    return (
        <div id = "Success">
            <div id = 'cont'>
                <div id = "biggy">Successfully Sent!</div>
                <div id = "smally">An email response will be sent within 1-2 business days. Make sure to check the spam folder for a response. Thank you for contacting us!</div>
            </div>
        </div>
    );
}

export default SuccessPage;