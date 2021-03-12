import React from 'react'
import history from './../../history'

function Logout() {
    return (
        <div>
            <h2> Logged Out! </h2>
            <button onClick={() => history.push('/')}> Click to return to home page </button>
        </div>
    )
}

export default Logout
