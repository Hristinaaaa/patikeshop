import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products, onAdd, onRemove}) => {
  return (
    <div className="all-products">
        {products.map((product) => {

        return <OneProduct
         product={product}
         key={product.id}
         onAdd={onAdd}
         onRemove={onRemove}
         />
        })}
       
      
    </div>
  )
}

export default Products

