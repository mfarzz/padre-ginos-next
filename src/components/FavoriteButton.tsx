"use client";

import { useOptimistic, useState, useTransition } from "react";
import { toggleFavoriteAction } from "@/app/actions";

type FavoriteButtonProps = {
  pizzaId: string;
  pizzaName: string;
  isFavorite: boolean;
  onFavoriteChange: (id: string, isFavorite: boolean) => void;
};

export default function FavoriteButton({
  pizzaId,
  pizzaName,
  isFavorite,
  onFavoriteChange,
}: FavoriteButtonProps) {
  const [optimisticFavorite, setOptimisticFavorite] =
    useOptimistic(isFavorite);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    const nextValue = !optimisticFavorite;

    setError(null);

    startTransition(async () => {
      setOptimisticFavorite(nextValue);

      const result = await toggleFavoriteAction(pizzaId);

      if (!result.ok) {
        setError(result.error);
        return;
      }

      onFavoriteChange(pizzaId, nextValue);
    });
  }

  return (
    <div className="flex shrink-0 flex-col items-end">
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
        aria-pressed={optimisticFavorite}
        aria-busy={isPending}
        aria-label={`${optimisticFavorite ? "Hapus" : "Tambah"} ${pizzaName} ${
          optimisticFavorite ? "dari" : "ke"
        } favorit`}
        className={`text-2xl leading-none text-brand transition-opacity ${
          isPending ? "opacity-50" : ""
        }`}
      >
        {optimisticFavorite ? "♥" : "♡"}
      </button>

      {error && (
        <p role="alert" className="mt-1 max-w-32 text-right text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}