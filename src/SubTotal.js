import React from 'react';
import './SubTotal.css';
import Currencyformat from 'react-currency-format';


function SubTotal() {
    return (
        <div className='subtotal'>
            <Currencyformat
            renderText={(value) =>(
                <>
                <p>
                    Subtotal (0 items):
            <strong>0</strong>
                </p>
            <small className='subtotal__gift'>
                <input type='checkbox' /> This is a gift
            </small>
            </>
            )}
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
