import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { HashtagIcon } from "./icons/HashtagIcon";
import { PlusCircleIcon } from "./icons/PlusCircleIcon";
import { Avatar } from "./ui/Avatar";
import { Tooltip } from "./ui/Tooltip";

const Members = () => {
  return (
    <aside className="border-slate-6 bg-slate-2 hidden w-64 border-l pt-5 pl-4 sm:block">
      members
    </aside>
  );
};

const Messages = () => {
  const date = Intl.DateTimeFormat("pt-BR", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  }).format(new Date().setDate(9));

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

  return (
    <div className="bg-slate-2 flex flex-1 flex-col justify-end">
      <div className="hover:bg-slate-3 flex flex-col gap-4 px-4 py-1.5">
        <div className="flex gap-4">
          <Avatar
            name="Victor"
            src="./members/victor.jpeg"
            className="cursor-pointer transition-all active:scale-95"
          />
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="flex h-6 cursor-pointer text-base underline-offset-2 hover:underline">
                Victor
              </p>
              <p className="text-slate-10 flex h-6 items-center pt-[3px] text-xs">
                {date}, {time}
              </p>
            </div>
            <div className="font-gg-normal text-slate-12 flex flex-col gap-3.5 text-base">
              <p>Hi there Stream team 👋</p>
              <p>
                For this assignment, I picked a Discord feature to showcase, the
                profile card. Discord is a product I use daily and I love so
                many things about it. The profile card in particular is a great
                way for users to express themselves.
              </p>
              <p>
                You can find the profile card by clicking in my name, avatar, or
                from the members list.
              </p>
              <p>I hope you like it :)</p>
              <p>
                Code at:{" "}
                <a
                  href="https://github.com/victorgaard/stream"
                  target="_blank"
                  className="text-anchor hover:underline"
                >
                  https://github.com/victorgaard/stream
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="bg-slate-3 border-slate-6 focus-within:border-slate-8 flex min-h-[52px] items-center gap-1.5 rounded-lg border transition-colors">
          <button className="text-slate-9 hover:text-slate-10 cursor-pointer self-stretch px-4 transition-colors">
            <PlusCircleIcon className="size-5" />
          </button>
          <input
            className="placeholder:font-gg-normal placeholder:text-slate-9 font-gg flex-1 text-base outline-0"
            placeholder="Message #design-engineer-assignment"
          />
        </div>
      </div>
    </div>
  );
};

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
