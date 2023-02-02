import { GetStaticProps } from "next";
import { Product } from "../util/models";

export type IncrementalStaticRegenerationProps = {
  products: Product[];
};
//Incremental Static Regeneration
const IncrementalStaticRegenerationPage = (
  props: IncrementalStaticRegenerationProps
) => {
  const { products } = props;
  return (
    <div>
      <h1>Incremental Side Regeneration</h1>
      <ul>
        <ListProducts products={products}/>
      </ul>
    </div>
  );
};

// React.js 18 - Server Components
const ListProducts = (props: { products: Product[] }) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default IncrementalStaticRegenerationPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
