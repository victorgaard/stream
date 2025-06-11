import { cn } from "../utils/cn";
import { Tooltip } from "./ui/Tooltip";

type SidebarButtonProps = {
  name: string;
  avatar?: string;
  tooltip: string;
  isDiscord?: boolean;
  isSelected?: boolean;
};

const Avatar: React.FC<Omit<SidebarButtonProps, "tooltip">> = ({
  avatar,
  name,
  isDiscord,
  isSelected,
}) => {
  if (!avatar) return <span className="text-lg">{name[0]}</span>;

  return (
    <img
      src={avatar}
      width={22.15}
      alt={name}
      className={cn(
        "size-40",
        {
          "opacity-100": isSelected,
          "w-[22.150px] translate-y-[0.25px] opacity-90 transition-colors": isDiscord
        },
      )}
    />
  );
};

const SidebarButton: React.FC<SidebarButtonProps> = ({
  name,
  avatar,
  tooltip,
  isDiscord = false,
  isSelected = false,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <Tooltip content={tooltip} side="right" sideOffset={8} className="text-base">
        <div className="group flex items-center gap-3">
          <div
            className={cn(
              "bg-slate-12 h-3 w-1 rounded-r-lg opacity-0 transition-all group-hover:h-5 group-hover:opacity-100",
              {
                "h-10 opacity-100 group-hover:h-10": isSelected,
              },
            )}
          />
          <button
            className={cn(
              "bg-slate-4 group overflow-clip group-hover:bg-discord relative flex size-10 cursor-pointer flex-col items-center justify-center rounded-xl transition-colors",
              {
                "bg-discord": isSelected,
              },
            )}
          >
            <Avatar
              name={name}
              avatar={avatar}
              isSelected={isSelected}
              isDiscord={isDiscord}
            />
          </button>
        </div>
      </Tooltip>

      <div className="w-1" />
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <nav className="flex w-[72px] shrink-0 flex-col items-center gap-2">
      <SidebarButton
        name="Discord"
        avatar="./discord.svg"
        tooltip="Direct messages"
        isDiscord
      />
      <div className="bg-slate-4 h-[1px] w-8" />
      <SidebarButton
        name="Stream"
        avatar="./stream.png"
        tooltip="Stream"
        isSelected
      />
    </nav>
  );
};
