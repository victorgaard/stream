import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { HashtagIcon } from "./icons/HashtagIcon";
import { Tooltip } from "./ui/Tooltip";

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
  return (
    <div className="flex w-[304px] flex-col gap-1 p-2">
      <div className="text-slate-9 flex h-6 items-center gap-1 px-2 pointer-events-none select-none">
        <p>📌 Pinned</p> <ChevronDownIcon className="size-3" />
      </div>
      <div className="bg-slate-3 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 select-none">
        <HashtagIcon className="text-slate-11 size-5" />
        <p className="text-base">design-engineer-assignment</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="border-slate-5 flex h-12 w-[304px] items-center border-b px-4">
        <p className="flex items-center gap-2.5 text-base">
          <Tooltip
            content="Verified community server"
            side="right"
            sideOffset={6}
            delayDuration={200}
            className="text-sm"
          >
            <img src="./verified.svg" width={20} height={20} />
          </Tooltip>
          Stream
        </p>
      </div>
      <div className="border-slate-6 bg-slate-2 flex h-12 flex-1 items-center gap-2 border-b pr-2 pl-6.5">
        <HashtagIcon className="text-slate-9 size-5" />
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
