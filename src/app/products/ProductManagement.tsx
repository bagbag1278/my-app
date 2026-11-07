"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowDown,
  FiArrowUpRight,
  FiBox,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiHelpCircle,
  FiLayers,
  FiLogOut,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiSettings,
  FiSliders,
  FiTag,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

type ProductStatus = "Active" | "Draft" | "Archived";
type Category = "Outerwear" | "Tops" | "Accessories" | "Bottoms";

type Product = {
  id: string;
  name: string;
  sku: string;
  category: Category;
  price: number;
  stock: number;
  status: ProductStatus;
  color: string;
  description?: string;
};

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Aurora Puffer Jacket",
    sku: "AUR-OW-001",
    category: "Outerwear",
    price: 289,
    stock: 48,
    status: "Active",
    color: "from-violet-500/50 to-fuchsia-400/20",
  },
  {
    id: "2",
    name: "After Hours Hoodie",
    sku: "AUR-TP-014",
    category: "Tops",
    price: 98,
    stock: 126,
    status: "Active",
    color: "from-slate-400/40 to-slate-700/40",
  },
  {
    id: "3",
    name: "Prism Crossbody",
    sku: "AUR-AC-006",
    category: "Accessories",
    price: 74,
    stock: 9,
    status: "Active",
    color: "from-pink-400/50 to-orange-300/20",
  },
  {
    id: "4",
    name: "Orbit Cargo Pant",
    sku: "AUR-BT-022",
    category: "Bottoms",
    price: 132,
    stock: 0,
    status: "Draft",
    color: "from-emerald-300/40 to-cyan-500/20",
  },
];

const navigation = [
  { label: "Overview", icon: FiGrid, href: "#overview" },
  { label: "Products", icon: FiBox, href: "/products", active: true },
  { label: "Collections", icon: FiLayers, href: "#collections" },
  { label: "Discounts", icon: FiTag, href: "#discounts" },
];

const statusStyles: Record<ProductStatus, string> = {
  Active: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  Draft: "bg-amber-400/10 text-amber-200 ring-amber-300/20",
  Archived: "bg-white/[0.06] text-white/50 ring-white/10",
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductManagement() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query);
      const matchesCategory =
        categoryFilter === "All categories" ||
        product.category === categoryFilter;
      const matchesStatus =
        statusFilter === "All status" || product.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [categoryFilter, products, search, statusFilter]);

  const handleAddProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const sku = String(formData.get("sku") ?? "").trim();
    const category = String(formData.get("category") ?? "Outerwear") as Category;
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock"));
    const description = String(formData.get("description") ?? "").trim();

    if (!name || !sku || !Number.isFinite(price) || !Number.isFinite(stock)) {
      return;
    }

    setProducts((current) => [
      {
        id: crypto.randomUUID(),
        name,
        sku,
        category,
        price,
        stock,
        description,
        status: "Draft",
        color: "from-violet-400/40 to-fuchsia-400/20",
      },
      ...current,
    ]);
    setIsFormOpen(false);
    event.currentTarget.reset();
  };

  const activeCount = products.filter(
    (product) => product.status === "Active",
  ).length;
  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );
  const lowStockCount = products.filter(
    (product) => product.stock > 0 && product.stock < 10,
  ).length;

  return (
    <main className="min-h-screen bg-[#0b0911] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-white/[0.07] bg-[#0d0b13] px-5 py-7 lg:flex">
          <Link
            href="/"
            className="mb-12 flex items-center gap-3 px-2 text-lg font-bold tracking-[0.2em]"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 text-base tracking-normal">
              A
            </span>
            AURA<span className="-ml-3 text-fuchsia-300">.</span>
          </Link>

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Workspace
          </p>
          <nav aria-label="Dashboard" className="space-y-1">
            {navigation.map(({ label, icon: Icon, href, active }) => (
              <a
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-violet-400/10 font-medium text-violet-200 ring-1 ring-violet-300/10"
                    : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Icon className="text-base" />
                {label}
                {label === "Products" && (
                  <span className="ml-auto rounded-md bg-white/[0.07] px-2 py-0.5 text-[10px] text-white/55">
                    {products.length}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <p className="mb-3 mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Preferences
          </p>
          <nav aria-label="Preferences" className="space-y-1">
            <a
              href="#settings"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/55 transition hover:bg-white/[0.04] hover:text-white"
            >
              <FiSettings className="text-base" />
              Settings
            </a>
            <a
              href="#help"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/55 transition hover:bg-white/[0.04] hover:text-white"
            >
              <FiHelpCircle className="text-base" />
              Help center
            </a>
          </nav>

          <div className="mt-auto rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
            <div className="mb-3 flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-pink-400 text-xs font-bold">
              AU
            </div>
            <p className="text-sm font-medium">AURA Studio</p>
            <p className="mt-1 text-xs text-white/40">Free plan</p>
            <button
              type="button"
              className="mt-4 flex items-center gap-2 text-xs text-white/45 transition hover:text-white"
            >
              <FiLogOut />
              Sign out
            </button>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[72px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold tracking-[0.16em] lg:hidden"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 text-xs tracking-normal">
                A
              </span>
              AURA<span className="-ml-2 text-fuchsia-300">.</span>
            </Link>
            <p className="hidden text-xs text-white/40 sm:block">
              Store <span className="mx-2 text-white/20">/</span>{" "}
              <span className="text-white/70">Products</span>
            </p>
            <div className="ml-auto flex items-center gap-3">
              <button
                type="button"
                aria-label="Notifications"
                className="relative grid size-9 place-items-center rounded-full border border-white/10 text-white/55 transition hover:bg-white/[0.05]"
              >
                <FiAlertCircle />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-fuchsia-400" />
              </button>
              <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-pink-400 text-[10px] font-bold">
                AU
              </span>
            </div>
          </header>

          <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs text-white/40">
                  Manage your catalog
                </p>
                <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Products
                </h1>
                <p className="mt-2 text-sm text-white/45">
                  Add, organize, and keep track of your store products.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold shadow-lg shadow-violet-950/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300"
              >
                <FiPlus />
                Add product
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total products"
                value={String(products.length).padStart(2, "0")}
                detail="Across all categories"
                icon={<FiBox />}
                tone="violet"
              />
              <StatCard
                label="Active products"
                value={String(activeCount).padStart(2, "0")}
                detail="Currently visible in store"
                icon={<FiCheck />}
                tone="green"
              />
              <StatCard
                label="Inventory value"
                value={formatPrice(inventoryValue)}
                detail="Based on current stock"
                icon={<FiTrendingUp />}
                tone="pink"
              />
              <StatCard
                label="Low stock"
                value={String(lowStockCount).padStart(2, "0")}
                detail="Less than 10 items"
                icon={<FiAlertCircle />}
                tone="amber"
              />
            </div>

            <section
              aria-labelledby="product-list-heading"
              className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#100e17]"
            >
              <div className="flex flex-col gap-4 border-b border-white/[0.07] p-5 sm:p-6 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h2
                    id="product-list-heading"
                    className="text-base font-semibold"
                  >
                    All products
                  </h2>
                  <p className="mt-1 text-xs text-white/40">
                    {filteredProducts.length} of {products.length} products
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="relative min-w-0 sm:w-56">
                    <FiSearch
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/35"
                    />
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search products..."
                      aria-label="Search products"
                      className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-violet-400/50"
                    />
                  </label>
                  <FilterSelect
                    ariaLabel="Filter by category"
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    options={[
                      "All categories",
                      "Outerwear",
                      "Tops",
                      "Accessories",
                      "Bottoms",
                    ]}
                  />
                  <FilterSelect
                    ariaLabel="Filter by status"
                    value={statusFilter}
                    onChange={setStatusFilter}
                    options={["All status", "Active", "Draft", "Archived"]}
                  />
                  <button
                    type="button"
                    aria-label="More filters"
                    className="hidden h-10 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-white/55 transition hover:bg-white/[0.04] xl:flex"
                  >
                    <FiSliders />
                    Filters
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead>
                    <tr className="border-b border-white/[0.06] text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                      <th className="w-10 px-6 py-3.5">
                        <input
                          type="checkbox"
                          aria-label="Select all products"
                          className="size-3.5 accent-violet-500"
                        />
                      </th>
                      <th className="px-3 py-3.5 font-medium">Product</th>
                      <th className="px-3 py-3.5 font-medium">Status</th>
                      <th className="px-3 py-3.5 font-medium">Inventory</th>
                      <th className="px-3 py-3.5 font-medium">Category</th>
                      <th className="px-3 py-3.5 font-medium">Price</th>
                      <th className="w-12 px-5 py-3.5" aria-label="Actions" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {filteredProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="group transition hover:bg-white/[0.025]"
                      >
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            aria-label={`Select ${product.name}`}
                            className="size-3.5 accent-violet-500"
                          />
                        </td>
                        <td className="px-3 py-3.5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${product.color}`}
                            >
                              <FiBox className="text-lg text-white/80" />
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-medium text-white/90">
                                {product.name}
                              </p>
                              <p className="mt-1 text-[11px] text-white/35">
                                {product.sku}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3.5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ring-1 ${statusStyles[product.status]}`}
                          >
                            <span className="size-1 rounded-full bg-current" />
                            {product.status}
                          </span>
                        </td>
                        <td className="px-3 py-3.5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white/80">
                              {product.stock}
                            </span>
                            {product.stock > 0 && product.stock < 10 && (
                              <span className="text-[10px] text-amber-200">
                                Low
                              </span>
                            )}
                            {product.stock === 0 && (
                              <span className="text-[10px] text-rose-300">
                                Out
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-3.5 text-xs text-white/55">
                          {product.category}
                        </td>
                        <td className="px-3 py-3.5 text-sm text-white/80">
                          {formatPrice(product.price)}
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <button
                            type="button"
                            aria-label={`More actions for ${product.name}`}
                            className="grid size-8 place-items-center rounded-lg text-white/35 transition hover:bg-white/[0.06] hover:text-white"
                          >
                            <FiMoreHorizontal />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredProducts.length === 0 && (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-6 py-16 text-center text-sm text-white/45"
                        >
                          No products match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-xs text-white/40">
                  Showing{" "}
                  <span className="text-white/70">
                    {filteredProducts.length ? 1 : 0}–
                    {filteredProducts.length}
                  </span>{" "}
                  of <span className="text-white/70">{products.length}</span>{" "}
                  products
                </p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Previous page"
                    disabled
                    className="grid size-8 place-items-center rounded-lg border border-white/[0.07] text-white/25 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    type="button"
                    aria-current="page"
                    className="grid size-8 place-items-center rounded-lg bg-violet-400/15 text-xs font-medium text-violet-200"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    aria-label="Next page"
                    disabled
                    className="grid size-8 place-items-center rounded-lg border border-white/[0.07] text-white/25 disabled:cursor-not-allowed"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </section>

            <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-white/30">
              <FiArrowDown className="text-[10px]" />
              Product data is sample content. Connect your API to persist changes.
              <FiArrowUpRight className="ml-1 text-[10px]" />
            </div>
          </div>
        </section>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsFormOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-product-heading"
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/10 bg-[#12101a] p-5 shadow-2xl sm:rounded-2xl sm:p-7"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-fuchsia-300">PRODUCT CATALOG</p>
                <h2
                  id="add-product-heading"
                  className="mt-2 text-xl font-semibold"
                >
                  Add a product
                </h2>
                <p className="mt-1 text-xs text-white/45">
                  Enter the basic details. You can edit these later.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setIsFormOpen(false)}
                className="grid size-9 place-items-center rounded-lg text-white/50 transition hover:bg-white/[0.06] hover:text-white"
              >
                <FiX />
              </button>
            </div>

            <form
              onSubmit={handleAddProduct}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs font-medium text-white/70">
                  Product name <span className="text-fuchsia-300">*</span>
                </span>
                <input
                  required
                  name="name"
                  placeholder="e.g. Aurora Puffer Jacket"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  SKU <span className="text-fuchsia-300">*</span>
                </span>
                <input
                  required
                  name="sku"
                  placeholder="AUR-OW-001"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Category
                </span>
                <div className="relative">
                  <select
                    name="category"
                    defaultValue="Outerwear"
                    className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-[#17141f] px-3 pr-9 text-sm text-white outline-none focus:border-violet-400/60"
                  >
                    <option>Outerwear</option>
                    <option>Tops</option>
                    <option>Accessories</option>
                    <option>Bottoms</option>
                  </select>
                  <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40" />
                </div>
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Price (USD) <span className="text-fuchsia-300">*</span>
                </span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/40">
                    $
                  </span>
                  <input
                    required
                    min="0"
                    step="0.01"
                    name="price"
                    type="number"
                    placeholder="0.00"
                    className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-7 pr-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                  />
                </div>
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Initial stock <span className="text-fuchsia-300">*</span>
                </span>
                <input
                  required
                  min="0"
                  step="1"
                  name="stock"
                  type="number"
                  placeholder="0"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs font-medium text-white/70">
                  Description
                </span>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Describe the product..."
                  className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>

              <div className="flex flex-col-reverse gap-2 border-t border-white/[0.08] pt-4 sm:col-span-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="h-10 rounded-lg border border-white/10 px-4 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold transition hover:brightness-110"
                >
                  <FiPlus />
                  Add product
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

function StatCard({
  label,
  value,
  detail,
  icon,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
  tone: "violet" | "green" | "pink" | "amber";
}) {
  const toneStyles = {
    violet: "bg-violet-400/10 text-violet-200",
    green: "bg-emerald-400/10 text-emerald-200",
    pink: "bg-pink-400/10 text-pink-200",
    amber: "bg-amber-400/10 text-amber-100",
  };

  return (
    <article className="rounded-2xl border border-white/[0.08] bg-[#100e17] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/45">{label}</p>
        <span
          className={`grid size-8 place-items-center rounded-lg ${toneStyles[tone]}`}
        >
          {icon}
        </span>
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-[11px] text-white/35">{detail}</p>
    </article>
  );
}

function FilterSelect({
  ariaLabel,
  value,
  onChange,
  options,
}: {
  ariaLabel: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full appearance-none rounded-lg border border-white/10 bg-[#100e17] py-0 pl-3 pr-8 text-xs text-white/65 outline-none transition hover:bg-white/[0.04] focus:border-violet-400/50 sm:w-auto sm:min-w-32"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/40" />
    </div>
  );
}
