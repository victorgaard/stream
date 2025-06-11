import { HelpIcon } from "./icons/HelpIcon";
import { InboxIcon } from "./icons/InboxIcon";
import { Tooltip } from "./ui/Tooltip";

export const Header: React.FC = () => {
  return (
    <header className="flex h-8 shrink-0 items-center justify-between px-4.5">
      <div className="w-16" />
      <div className="flex items-center gap-2">
        <img
          src="./stream.png"
          width={20}
          height={20}
          className="size-5 rounded"
          alt="Stream logo"
        />
        Stream
      </div>
      <div className="flex items-center gap-6">
        <Tooltip content="Inbox" sideOffset={6}>
          <InboxIcon className="text-slate-9" />
        </Tooltip>
        <Tooltip content="Help" align="end" sideOffset={6}>
          <HelpIcon className="text-slate-9 size-5" />
        </Tooltip>
      </div>
    </header>
  );
};
