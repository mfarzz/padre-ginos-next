import { Suspense } from "react";
import MenuExplorer from "@/components/MenuExplorer";
import { getPizzas } from "@/lib/data";

function MenuFallback() {
  return (
    <div className="py-16 text-center">
      Memuat favorit...
    </div>
  );
}

export default async function MenuPage() {
  const pizzas = await getPizzas();

  return (
    <section>
      <h1 className="mb-6 text-3xl font-black">Menu</h1>

      <Suspense fallback={<MenuFallback />}>
        <MenuExplorer pizzas={pizzas} />
      </Suspense>
    </section>
  );
}