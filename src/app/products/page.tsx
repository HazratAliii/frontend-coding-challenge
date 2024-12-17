import { Products } from "@/views/products";
import { Suspense } from "react";

const ProductsRoot = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Products />
    </Suspense>
  );
};

export default ProductsRoot;
