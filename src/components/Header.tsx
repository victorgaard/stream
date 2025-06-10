import { HelpIcon } from "./icons/HelpIcon";
import { InboxIcon } from "./icons/InboxIcon";

export const Header = () => {
  return (
    <header className="flex h-8 shrink-0 items-center justify-between px-4.5">
      <div />
      <div className="flex items-center gap-2">
        <img
          src="./stream.png"
          width={16}
          height={16}
          className="size-4 rounded"
        />
        Stream
      </div>
      <div className="flex items-center gap-6">
        <InboxIcon className="text-slate-9" />
        <HelpIcon className="size-5 text-slate-9" />
      </div>
    </header>
  );
};
