import { members } from "../data/members";
import { cn } from "../utils/cn";
import { AvatarWithStatus } from "./ui/AvatarWithStatus";

export const Members = () => {
  return (
    <aside className="border-slate-6 bg-slate-2 hidden w-[264px] gap-0.5 flex-col border-l px-2 pt-[19px] sm:flex">
      <p className="text-slate-9 px-2 pb-0.5">Online — 1</p>
      {members.map((member) => (
        <button
          key={member.id}
          className={cn("hover:bg-slate-3 text-base text-slate-10/90 flex h-10 cursor-pointer items-center gap-2.5 rounded-lg px-4", {
            "opacity-40": member.status === 'offline'
          })}
        >
          <AvatarWithStatus size="sm" name={member.name} src={member.avatar} status={member.status} />
          {member.name}
        </button>
      ))}
    </aside>
  );
};
