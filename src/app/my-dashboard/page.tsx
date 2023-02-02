import { Suspense } from "react";
import { ListProducts } from "./list-products";

const MyDashboardPage = () => {
  return (
    <div>
        <h1>My Dashboard Page1111</h1>
        <Suspense fallback={<div>loading products....</div>}>
        {/* @ts-expect-error Server Component */}
        <ListProducts/>
        </Suspense>
    </div>
  );
};	

export default MyDashboardPage;