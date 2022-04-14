import { useState } from "react";
import { Product } from "../pages/list/[listId]";
import EditableProductItem from "./editable-product";
import ProductItem from "./product";

interface PossiblyEditableProductProps {
  product: Product;
}

const PossiblyEditableProduct = ({ product }: PossiblyEditableProductProps) => {
  const [itemBeingEdited, setItemBeingEdited] = useState(false);

  return itemBeingEdited ? (
    <EditableProductItem
      product={product}
      onCancel={() => setItemBeingEdited(false)}
    />
  ) : (
    <ProductItem
      product={product}
      onEdit={() => setItemBeingEdited(true)}
    />
  );
};

export default PossiblyEditableProduct;
