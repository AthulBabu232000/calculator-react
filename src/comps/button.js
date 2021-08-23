import React from 'react'

const Button = ({label, getLabel})=> {
    return (
        <button className = "button" label = {label} onClick = {(e) => getLabel(e)}>
            {label}
        </button>
    )
}

export default Button
