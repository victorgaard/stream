import { type Activity, type Member } from "../data/members";
import { useMembers } from "../hooks/useMembers";
import { cn } from "../utils/cn";
import { isColorDark } from "../utils/isColorDark";
import { MusicNoteIcon } from "./icons/MusicNoteIcon";
import { PencilIcon } from "./icons/PencilIcon";
import { VideoGameController } from "./icons/VideoGameController";
import { AvatarWithStatus } from "./ui/AvatarWithStatus";
import { Popover } from "./ui/Popover";

const ICON_MAP: Record<Activity["type"], React.ElementType> = {
  listening: MusicNoteIcon,
  playing: VideoGameController,
};

const ActivityPhrase: React.FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <>
      <span className="capitalize">{activity.type}</span>{" "}
      {activity.type === "listening" && "to"}{" "}
      <span className="font-gg-bold">{activity.metadata.title}</span>
    </>
  );
};

type ActivityIconProps = {
  type: Activity["type"] | undefined;
  className?: string;
};

const ActivityIcon: React.FC<ActivityIconProps> = ({ type, className }) => {
  if (!type) return null;

  const Icon = ICON_MAP[type];

  return <Icon className={cn("text-success mr-0.5 size-3", className)} />;
};

const MemberActivity: React.FC<{ activity: Activity | undefined }> = ({
  activity,
}) => {
  if (!activity) return null;

  return (
    <p className="flex items-center gap-[2.5px] text-xs leading-tight">
      <ActivityIcon type={activity.type} />
      <ActivityPhrase activity={activity} />
    </p>
  );
};

const MemberButton: React.FC<Member> = ({
  id,
  name,
  username,
  avatar,
  status,
  background,
  bio,
  colors,
  activity,
  roles,
  isNitro,
}) => {
  const roleColors = [
    "#FF6B6B",
    "#FFD93D",
    "#6BCB77",
    "#4D96FF",
    "#843BFF",
    "#FF922B",
    "#3BC9DB",
    "#F06595",
    "#20C997",
  ];

  const getRandomColor = (colors: string[]) => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  return (
    <Popover
      side="left"
      sideOffset={isNitro ? 20 : 16}
      align="start"
      className={cn(
        "bg-slate-8 animate-in fade-in-75 slide-in-from-left-2 flex w-[300px] flex-col overflow-clip rounded-lg shadow-2xl",
        {
          "outline-4": isNitro,
        },
      )}
      style={{
        outlineColor: colors.accent,
      }}
      trigger={
        <button
          className={cn(
            "hover:bg-slate-3 text-slate-10/90 data-[state=open]:bg-slate-8 data-[state=open]:text-slate-12 flex h-10 cursor-pointer items-center gap-3 rounded-lg px-4 text-base",
            {
              "opacity-40 hover:opacity-100 data-[state=open]:opacity-100":
                status === "offline",
            },
          )}
        >
          <AvatarWithStatus
            size="sm"
            name={name}
            src={avatar}
            status={status}
          />
          <div className="text-left">
            <p className="leading-tight">{name}</p>
            <MemberActivity activity={activity} />
          </div>
        </button>
      }
    >
      <header>
        {background ? (
          <img
            src={background}
            alt="background image"
            className="h-[105px] w-full"
          />
        ) : (
          <div className="h-[105px]" style={{ background: colors.accent }} />
        )}
      </header>
      <div className="absolute top-12 flex p-4">
        <div
          className="absolute top-2.5 left-2.5 size-23 rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${colors.primary} 0%, ${colors.primary} 55%, transparent 50%`,
          }}
        />
        <AvatarWithStatus size="lg" status={status} name={name} src={avatar} />
      </div>
      <div
        className={cn("font-gg flex flex-col px-5 pt-12 pb-4", {
          "text-slate-12": isColorDark(colors.primary),
          "text-slate-1": !isColorDark(colors.primary),
        })}
        style={{
          background: isNitro
            ? `linear-gradient(to bottom right, ${colors.primary} 15%, ${colors.accent} 115%)`
            : colors.primary,
        }}
      >
        <p className="font-gg-bold text-xl leading-tight">{name}</p>
        <p className="text-sm leading-tight opacity-70">{username}</p>

        <div className="flex flex-col gap-0.5 pt-3">
          {bio.split("\n").map((b) => (
            <p key={b} className="text-sm leading-tight opacity-85">
              {b}
            </p>
          ))}
        </div>

        {activity && (
          <div className="pt-3">
            <div
              className={cn(
                "flex flex-col gap-0.5 rounded-lg border border-[hsl(0deg_0%_0%_/_0.075)] bg-[hsla(0,0%,100%,0.25)] p-2 text-xs",
                {
                  "border-[hsla(0,0%,100%,0.075)] bg-[hsla(0,0%,0%,0.1)]":
                    isColorDark(colors.primary),
                },
              )}
            >
              <div className="text-xs">
                {activity.type === "listening" ? (
                  <div className="flex flex-col gap-2">
                    <p>Listening to {activity.metadata.provider}</p>
                    <div className="flex items-center gap-2">
                      <img
                        src={activity.metadata.picture}
                        alt={activity.metadata.description}
                        width={60}
                        height={60}
                        className="size-[60px] rounded-lg object-cover"
                      />
                      <div className="w-full">
                        <p className="font-gg-bold text-sm">
                          {activity.metadata.description}
                        </p>
                        <p>{activity.metadata.title}</p>
                        <div className="flex items-center gap-2 pt-1">
                          <pre>{activity.metadata.current}</pre>
                          <div className="flex flex-1 items-center">
                            <div className="h-0.5 flex-1/4 rounded bg-[hsla(0,0%,0%,0.5)]" />
                            <div className="h-0.5 flex-1 rounded bg-[hsla(0,0%,0%,0.25)]" />
                          </div>
                          <pre>{activity.metadata.length}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <p>Playing on {activity.metadata.provider}</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={activity.metadata.picture}
                        alt={activity.metadata.title}
                        width={60}
                        height={60}
                        className="size-[60px] rounded-lg object-cover"
                      />
                      <div className="flex w-full flex-col gap-1">
                        <p className="font-gg-bold text-sm">
                          {activity.metadata.title}
                        </p>
                        <div className="font-gg-bold text-success flex items-center gap-0.5 text-sm">
                          <ActivityIcon type={activity.type} />
                          <pre className="text-xs">
                            {activity.metadata.current}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-1 pt-3">
          {roles.map((role) => (
            <div
              key={role}
              className={cn(
                "font-gg-semibold flex h-6 items-center gap-1 rounded-[6px] border border-[hsl(0deg_0%_0%_/_0.15)] p-1 text-xs leading-0 opacity-70",
                {
                  "border-[hsla(0,0%,100%,0.15)]": isColorDark(colors.primary),
                },
              )}
            >
              <div
                className="size-3 rounded-full"
                style={{ background: getRandomColor(roleColors) }}
              />
              {role}
            </div>
          ))}
        </div>

        <div className="w-full pt-3">
          {id === 1 ? (
            <button className="bg-slate-8 hover:bg-slate-7 text-slate-12 flex h-8 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg text-sm transition-colors">
              <PencilIcon className="size-4" />
              Edit profile
            </button>
          ) : (
            <div
              className={cn(
                "flex flex-col gap-0.5 rounded-lg border border-[hsl(0deg_0%_0%_/_0.075)] bg-[hsla(0,0%,100%,0.25)] p-2 text-xs",
                {
                  "border-[hsla(0,0%,100%,0.075)] bg-[hsla(0,0%,0%,0.1)]":
                    isColorDark(colors.primary),
                },
              )}
            >
              <textarea
                className="placeholder:font-gg-normal placeholder:text-slate-9 font-gg field-sizing-content flex-1 resize-none flex-wrap self-stretch py-0.5 px-1 text-sm outline-0"
                placeholder={`Message @${name}`}
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </Popover>
  );
};

export const Members: React.FC = () => {
  const { onlineMembers, offlineMembers } = useMembers();

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
