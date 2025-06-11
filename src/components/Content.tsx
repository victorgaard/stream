import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { HashtagIcon } from "./icons/HashtagIcon";
import { Members } from "./Members";
import { Messages } from "./Messages";
import { Tooltip } from "./ui/Tooltip";

const Channels = () => {
  return (
    <div className="hidden w-[304px] flex-col gap-1 p-2 lg:flex">
      <div className="text-slate-9 pointer-events-none flex h-6 items-center gap-1 px-2 select-none">
        <p>📌 Pinned</p> <ChevronDownIcon className="size-3" />
      </div>
      <div className="bg-slate-3 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 select-none">
        <HashtagIcon className="text-slate-11 size-5" />
        <p className="text-base">design-engineer-assignment</p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center">
      <div className="border-slate-5 hidden h-12 w-[304px] items-center justify-between border-b px-4 lg:flex">
        <p className="font-gg-bold flex items-center gap-2.5 text-base">
          <Tooltip
            content="Verified community server"
            side="right"
            sideOffset={6}
            delayDuration={400}
            className="text-sm"
          >
            <img src="./verified.svg" width={20} height={20} />
          </Tooltip>
          Stream
        </p>
        <ChevronDownIcon className="text-slate-9 size-5" />
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
    <section className="border-slate-4 flex flex-1 flex-col overflow-clip rounded-tl-xl border">
      <Header />
      <div className="flex h-full">
        <Channels />
        <Messages />
        <Members />
      </div>
    </section>
  );
};
