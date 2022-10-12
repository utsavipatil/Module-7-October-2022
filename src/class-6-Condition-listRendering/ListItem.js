import React from 'react'

const productCardStyle={
    border : '1px solid #EEE',
    padding : '10px',
    margin : '10px',
    maxWidth : '300px',
    textAlign : 'center'
}

function ListItem({id, productName, price , productImage}) {
  return (
    <div style={productCardStyle}>
        <img src = {productImage} />
        <h1>{productName}</h1>
        <p>{price}</p>
    </div>
  )
}

export default ListItem