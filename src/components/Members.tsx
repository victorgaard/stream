import { type Member } from "../data/members";
import { useMembers } from "../hooks/useMembers";
import { cn } from "../utils/cn";
import { MemberActivity } from "./Activity";
import { ProfileCard } from "./profile-card";
import { AvatarWithStatus } from "./ui/AvatarWithStatus";

const MemberWrapper: React.FC<Member> = ({ ...member }) => {
  const trigger = (
    <button
      className={cn(
        "hover:bg-slate-3 text-slate-10/90 data-[state=open]:bg-slate-8 data-[state=open]:text-slate-12 flex h-10 cursor-pointer items-center gap-3 rounded-lg px-4 text-base",
        {
          "opacity-40 hover:opacity-100 data-[state=open]:opacity-100":
            member.status === "offline",
        },
      )}
    >
      <AvatarWithStatus
        size="sm"
        name={member.name}
        src={member.avatar}
        status={member.status}
      />
      <div className="text-left">
        <p className="leading-tight">{member.name}</p>
        <MemberActivity activity={member.activity} />
      </div>
    </button>
  );

  return <ProfileCard trigger={trigger} {...member} />;
};

export const Members: React.FC = () => {
  const { onlineMembers, offlineMembers } = useMembers();

  return (
    <aside className="border-slate-6 bg-slate-2 hidden w-[264px] flex-col gap-0.5 border-l px-2 pt-[19px] sm:flex">
      <p className="text-slate-9 px-2 pb-0.5">
        Online — {onlineMembers.length}
      </p>
      {onlineMembers.map((member) => (
        <MemberWrapper key={member.id} {...member} />
      ))}
      <p className="text-slate-9 px-2 pt-6 pb-0.5">
        Offline — {offlineMembers.length}
      </p>
      {offlineMembers.map((member) => (
        <MemberWrapper key={member.id} {...member} />
      ))}
    </aside>
  );
};
