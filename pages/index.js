import { Barchart } from "@/components/Barchart";
import { Header } from "@/components/Header";
import { RecentSaved } from "@/components/RecentSaved";
import { TopCards } from "@/components/TopCards";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <Barchart />
        <RecentSaved />
      </div>
    </main>
  );
}
