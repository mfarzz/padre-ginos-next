import Image from "next/image";
import DismissibleBanner from "@/components/DismissibleBanner";
import type { Pizza } from "@/lib/types";

export default function PizzaOfTheDay({ pizza }: { pizza: Pizza }) {
  return (
    <DismissibleBanner>
      <div className="flex items-center gap-4">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={72}
          height={72}
          loading="eager"
          className="h-16 w-16 rounded-xl object-cover"
        />

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-brand">
            Pizza of the day
          </p>
          <h2 className="truncate text-lg font-black">{pizza.name}</h2>
          <p className="truncate text-sm text-ink/70">
            {pizza.description}
          </p>
        </div>
      </div>
    </DismissibleBanner>
  );
}