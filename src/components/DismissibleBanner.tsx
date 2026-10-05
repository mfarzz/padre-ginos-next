"use client";

import { useState, type ReactNode } from "react";

export default function DismissibleBanner({
  children,
}: {
  children: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="bg-crust">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <div className="min-w-0 flex-1">{children}</div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-brand hover:bg-black/5"
          aria-label="Tutup pizza of the day"
        >
          Tutup
        </button>
      </div>
    </aside>
  );
}