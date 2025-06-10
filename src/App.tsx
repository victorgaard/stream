function App() {
  return (
    <main className="font-gg bg-slate-1 text-slate-12 grid min-h-dvh text-sm antialiased">
      <div className="flex flex-col">
        <header className="flex h-8 shrink-0 items-center justify-center">
          Stream
        </header>
        <div className="flex h-full">
          <nav className="flex w-[72px] flex-col items-center">
            <div className="bg-slate-2 hover:bg-discord flex size-10 flex-col items-center justify-center rounded-xl transition-colors">
              H
            </div>
          </nav>
          <section className="border-slate-5 flex-1 rounded-tl-xl border p-6">
            Body
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
