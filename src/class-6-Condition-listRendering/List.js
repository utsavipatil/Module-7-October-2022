import React from 'react'
import ListItem from './ListItem'

const products = [
    {
        id : 1,
        productName : "Apple iPhone 12 (64GB) - Blue",
        price : "47,999",
        productImage : "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id : 2,
        productName : "iPhone 14 Plus 256GB Blue",
        price : "99,900",
        productImage : "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id : 3,
        productName : "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
        price : "1,799",
        productImage : "https://m.media-amazon.com/images/I/61vtLhO6fDL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id : 4,
        productName : "Apple EarPods with Lightning Connector",
        price : "1,649",
        productImage : "https://m.media-amazon.com/images/I/31CaPefY0QL._AC_UY327_FMwebp_QL65_.jpg"
    }
];

const productListContainer = {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent:'center'
}

function List() {
  return (
    <div style={productListContainer}>
    List I
    
    {
        products.map(product => {
            return <ListItem 
                key = {product.id}
                id = {product.id}
                productName = {product.productName}
                price = {product.price}
                productImage = {product.productImage}
            />
        })
    }

    </div>
  )
}

export default List