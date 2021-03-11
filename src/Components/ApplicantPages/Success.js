import React from 'react'
import history from './../../history'

function Success() {
    return (
        <div>
            <h1>Successfully Registered</h1>
            <button onClick={() => history.push('/')} > Click to return to Job portal home </button>
        </div>
    )
}

export default Success
