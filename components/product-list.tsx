import { Product } from '../pages/list/[listId]';
import PossiblyEditableProduct from './possibly-editable-product';

interface ProductListProps {
  products: Product[];
}

const ProductList = (props: ProductListProps) => {


  return (
    <div>
      {props.products.map((prod, index) => {
        return <PossiblyEditableProduct product={prod} key={index} />
      })}
    </div>
  )
  
}

export default ProductList;