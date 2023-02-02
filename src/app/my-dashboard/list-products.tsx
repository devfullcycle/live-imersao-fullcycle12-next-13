import { Product } from "../../util/models";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:8000/products"); //static side render
  //const response = await fetch("http://localhost:8000/products", {cache: 'no-store'}); //server side render
  //const response = await fetch("http://localhost:8000/products", {next: {revalidate: 10}}); //incremental static regeneration
  const data = await response.json();
  return data;
}
//Server Components
export const ListProducts = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>List Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
//Client Components