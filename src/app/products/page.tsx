import type { Metadata } from "next";
import ProductManagement from "./ProductManagement";

export const metadata: Metadata = {
  title: "Products — AURA",
  description: "Manage the AURA product catalog.",
};

export default function ProductsPage() {
  return <ProductManagement />;
}
