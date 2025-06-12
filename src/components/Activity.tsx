import type { Activity } from "../data/members";
import { cn } from "../utils/cn";
import { MusicNoteIcon } from "./icons/MusicNoteIcon";
import { VideoGameController } from "./icons/VideoGameController";

const ICON_MAP: Record<Activity["type"], React.ElementType> = {
  listening: MusicNoteIcon,
  playing: VideoGameController,
};

export const ActivityPhrase: React.FC<{ activity: Activity }> = ({
  activity,
}) => {
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

export const ActivityIcon: React.FC<ActivityIconProps> = ({
  type,
  className,
}) => {
  if (!type) return null;

  const Icon = ICON_MAP[type];

  return <Icon className={cn("text-success mr-0.5 size-3", className)} />;
};

export const MemberActivity: React.FC<{ activity: Activity | undefined }> = ({
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
