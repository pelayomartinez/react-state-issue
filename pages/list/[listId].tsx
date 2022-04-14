import { NextPageContext } from "next";
import { useState } from "react";
import ProductList from "../../components/product-list";

interface Field {
  name: string;
  content: string;
}

export interface Product {
  id: number;
  name: string;
  fields: Field[];
}

interface ListProps {
  products: Product[];
}

const List = (props: ListProps) => {
  
  const [products, setProducts] = useState<Product[]>(props.products);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

// Loading Data

List.getInitialProps = async (
  context: NextPageContext,
) => {
  const { listId } = context.query;

  const SAMPLE_PRODUCTS = [
    {id: 1, name: 'First Item', fields: [{name: 'Description', content: 'Test Description'}]},
    {id: 2, name: 'Second Item', fields: [{name: 'Description', content: 'Test Description'}]},
    {id: 3, name: 'Third Item', fields: [{name: 'Description', content: 'Test Description'}]},
    {id: 4, name: 'Fourth Item', fields: [{name: 'Description', content: 'Test Description'}]},
    {id: 5, name: 'Fifth Item', fields: [{name: 'Description', content: 'Test Description'}]},
  ]

  return { products: SAMPLE_PRODUCTS };
};

export default List;
