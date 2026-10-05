import { getFavoriteIds } from "@/lib/data";
import MenuExplorerClient from "@/components/MenuExplorerClient";
import type { Pizza } from "@/lib/types";

export default async function MenuExplorer({
  pizzas,
}: {
  pizzas: Pizza[];
}) {
  const favoriteIds = await getFavoriteIds();

  return (
    <MenuExplorerClient
      pizzas={pizzas}
      favoriteIds={favoriteIds}
    />
  );
}