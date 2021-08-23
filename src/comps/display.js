import React from 'react'

const Display =({Label, ans})=> {
    return (
        <div className = "display">
        <div className = "question">{Label}</div>
        <div className = "answer">{ans}</div>
        </div>
    )
}

export default Display
