import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <main className="bg-slate-1 text-slate-11 grid min-h-dvh text-sm antialiased">
      <div className="flex flex-col">
        <Header />
        <div className="flex h-full">
         <Sidebar />
          <section className="border-slate-4 flex-1 rounded-tl-xl border p-4">
            Body
          </section>
        </div>
      </div>
    </main>
  );
};
