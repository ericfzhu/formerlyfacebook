import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "bg-main-600 flex min-h-screen flex-col items-center justify-center p-24"
      )}
    >
      <Image
        className="-mb-16"
        src="/hat.png"
        alt=""
        height="500"
        width="500"
      />
      <div className="text-accent-500 text-6xl">Murasaki</div>
    </main>
  );
}
