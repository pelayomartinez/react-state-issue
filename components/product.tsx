import { Product } from "../pages/list/[listId]";


interface ProductProps {
  product: Product;
  onEdit: () => void;
}

const ProductItem = (props: ProductProps) => {
  
  const {product, onEdit} = props
  
  return (
    <div>
      <h1>{product.name}</h1>
      {product.fields.map((field, index) => {
        return (
          <div key={index}>
            <h2>{field.name}</h2>
            <p>{field.content}</p>
          </div>
        )
      })}
      <button onClick={onEdit}>Edit Item</button>
    </div>
  )
}

export default ProductItem;