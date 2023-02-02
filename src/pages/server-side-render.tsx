import { GetServerSideProps, GetStaticProps } from "next";
import { Product } from "../util/models";

export type ServerSideRenderProps = {
  products: Product[];
};

const ServerSideRenderPage = (props: ServerSideRenderProps) => {
  const { products } = props;
  return (
    <div>
      <h1>Server Side Props</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerSideRenderPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

// http://mercadolivre.com.br/product-xpto------

// SPA
// http://mercadolivre.com.br/product-xpto------


// Node.js(Next - Express) - Nginx Proxy 