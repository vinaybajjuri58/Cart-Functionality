import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const CartPage = lazy(() => import("./Pages/CartPage"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage"));

export const RoutesComponent = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<ProductsPage />} />
      </Routes>
    </Suspense>
  );
};
