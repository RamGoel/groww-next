import React from 'react'

const NoImage = () => {
  return (
    <div style={{
        height:300,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
        <p style={{
            fontSize:'13px',
            opacity:0.3
        }}>Image Not Available</p>
    </div>
  )
}

export default NoImage