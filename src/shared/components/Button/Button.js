import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <div>
            <button style={{fontSize: props.size}}>{props.name}</button>
        </div>
    )
}

export default Button
