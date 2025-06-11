import { members, type Activity, type Member } from "../data/members";
import { cn } from "../utils/cn";
import { MusicNoteIcon } from "./icons/MusicNoteIcon";
import { VideoGameController } from "./icons/VideoGameController";
import { AvatarWithStatus } from "./ui/AvatarWithStatus";

const { onlineMembers, offlineMembers } = members.reduce(
  (acc, member) => {
    if (member.status === "offline") {
      acc.offlineMembers.push(member);
    } else {
      acc.onlineMembers.push(member);
    }
    return acc;
  },
  { onlineMembers: [], offlineMembers: [] } as {
    onlineMembers: typeof members;
    offlineMembers: typeof members;
  },
);

const ICON_MAP: Record<Activity["type"], React.ElementType> = {
  listening: MusicNoteIcon,
  playing: VideoGameController,
};

const Activity: React.FC<{ activity: Activity | undefined }> = ({
  activity,
}) => {
  if (!activity) return null;

  const Icon = ICON_MAP[activity.type];

  return (
    <p className="flex items-center gap-[2.5px] text-xs leading-tight">
      <Icon className="text-success mr-0.5 size-3" />
      <span className="capitalize">{activity.type}</span>{" "}
      {activity.type === "listening" && "to"}{" "}
      <span className="font-gg-bold">{activity.metadata.title}</span>
    </p>
  );
};

const MemberButton: React.FC<Member> = ({ name, avatar, status, activity }) => {
  return (
    <button
      className={cn(
        "hover:bg-slate-3 text-slate-10/90 flex h-10 cursor-pointer items-center gap-3 rounded-lg px-4 text-base",
        {
          "opacity-40 hover:opacity-100": status === "offline",
        },
      )}
    >
      <AvatarWithStatus size="sm" name={name} src={avatar} status={status} />
      <div className="text-left">
        <p className="leading-tight">{name}</p>
        <Activity activity={activity} />
      </div>
    </button>
  );
};

export const Members: React.FC = () => {
  return (
    <aside className="border-slate-6 bg-slate-2 hidden w-[264px] flex-col gap-0.5 border-l px-2 pt-[19px] sm:flex">
      <p className="text-slate-9 px-2 pb-0.5">
        Online — {onlineMembers.length}
      </p>
      {onlineMembers.map((member) => (
        <MemberButton key={member.id} {...member} />
      ))}
      <p className="text-slate-9 px-2 pt-6 pb-0.5">
        Offline — {offlineMembers.length}
      </p>
      {offlineMembers.map((member) => (
        <MemberButton key={member.id} {...member} />
      ))}
    </aside>
  );
};
