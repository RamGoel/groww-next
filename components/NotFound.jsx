import React from 'react'
import '@styles/not_found.css'
const NotFound = ({type}) => {
    return (
        <div className='not_found_body'>
            <>
            <h1>404</h1>
            <p>{`${type} Not Found`}</p>
            </>
        </div>
    )
}

export default NotFound