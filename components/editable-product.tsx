import React, { useEffect, useState } from "react";
import { Product } from "../pages/list/[listId]";


interface EditableProductProps {
  product: Product;
  onCancel: () => void;
}

const EditableProductItem = (props: EditableProductProps) => {
  
  // Keep local state so that we may edit the product
  const [product, setProduct] = useState<Product>({...props.product});

  // When a field is updated, we update that in our local state
  const onUpdateField = (index: number, content: string) => {
    const productUpdate = {...product};
    productUpdate.fields[index].content = content;
    setProduct(productUpdate);
  }
  
  return (
    <div>
      <h1>{product.name}</h1>
      {product.fields.map((field, index) => {
        return (
          <div key={index}>
            <h2>{field.name}</h2>
            <input value={field.content} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onUpdateField(index, e.target.value)} />
          </div>
        )
      })}
      <button onClick={props.onCancel}>Cancel Editing</button>
    </div>
  )
}

export default EditableProductItem;