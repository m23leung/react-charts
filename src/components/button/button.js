import React from 'react'
import './button.css';

function button({label}) {
    return (
        <div data-testid="button" className="button-style">
            {label}
        </div>
    )
}

export default button
