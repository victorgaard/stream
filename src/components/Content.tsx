const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="border-slate-5 flex h-12 w-[304px] items-center border-b px-4">
        <p className="text-base">Stream</p>
      </div>
      <div className="border-slate-6 bg-slate-2 h-12 flex-1 border-b pr-2 pl-[21px]"></div>
    </div>
  );
};

export const Content = () => {
  return (
    <section className="border-slate-4 flex-1 rounded-tl-xl border">
      <Navbar />
    </section>
  );
};
