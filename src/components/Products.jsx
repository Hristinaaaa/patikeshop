import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products}) => {
  return (
    <div className="all-products">
        {products.map((product) => {

        return <OneProduct
         product={product}
         key={product.id}
         />
        })}
       
      
    </div>
  )
}

export default Products

