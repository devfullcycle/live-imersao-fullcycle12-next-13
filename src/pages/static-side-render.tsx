import { GetStaticProps } from "next";
import { Product } from "../util/models";
import { useState } from "react";

export type StaticSideRenderProps = {
  products: Product[];
};

const StaticSideRenderPage = (props: StaticSideRenderProps) => {
  const { products } = props;

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Static Side Render</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StaticSideRenderPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
