import { HashtagIcon } from "./icons/HashtagIcon";

const Members = () => {
  return (
    <aside className="border-slate-6 bg-slate-2 w-64 border-l pt-5 pl-4">
      members
    </aside>
  );
};

const Messages = () => {
  return <div className="bg-slate-2 flex-1 pt-5 pl-4">messages</div>;
};

const Channels = () => {
  return <div className="w-[304px] pt-5 pl-4">hey</div>;
};

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="border-slate-5 flex h-12 w-[304px] items-center border-b px-4">
        <p className="flex items-center gap-2.5 text-base">
          <img src="./verified.svg" width={20} height={20} />
          Stream
        </p>
      </div>
      <div className="border-slate-6 bg-slate-2 flex h-12 gap-2 flex-1 items-center border-b pr-2 pl-6.5">
        <HashtagIcon className="size-5 text-slate-9" />
        <p className="text-base">design-engineer-assignment</p>
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <section className="border-slate-4 flex flex-1 flex-col rounded-tl-xl border">
      <Navbar />
      <div className="flex h-full">
        <Channels />
        <Messages />
        <Members />
      </div>
    </section>
  );
};
