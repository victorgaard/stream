import type { Member, Metadata } from "../../data/members";
import { cn } from "../../utils/cn";
import { isColorDark } from "../../utils/colors";
import { ActivityIcon } from "../Activity";

const PlayingActivity: React.FC<{ metadata: Metadata }> = ({ metadata }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>Playing on {metadata.provider}</p>
      <div className="flex items-center gap-3">
        <img
          src={metadata.picture}
          alt={metadata.title}
          width={60}
          height={60}
          className="size-[60px] rounded-lg object-cover"
        />
        <div className="flex w-full flex-col gap-1">
          <p className="font-gg-bold text-sm">{metadata.title}</p>
          <div className="font-gg-bold text-success flex items-center gap-0.5 text-sm">
            <ActivityIcon type="playing" />
            <pre className="text-xs">{metadata.current}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListeningActivity: React.FC<{ metadata: Metadata }> = ({ metadata }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>Listening to {metadata.provider}</p>
      <div className="flex items-center gap-2">
        <img
          src={metadata.picture}
          alt={metadata.description}
          width={60}
          height={60}
          className="size-[60px] rounded-lg object-cover"
        />
        <div className="w-full">
          <p className="font-gg-bold text-sm">{metadata.description}</p>
          <p>{metadata.title}</p>
          <div className="flex items-center gap-2 pt-1">
            <pre>{metadata.current}</pre>
            <div className="flex flex-1 items-center">
              <div className="h-0.5 flex-1/4 rounded bg-[hsla(0,0%,0%,0.5)]" />
              <div className="h-0.5 flex-1 rounded bg-[hsla(0,0%,0%,0.25)]" />
            </div>
            <pre>{metadata.length}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

type ProfileCardActivityProps = {
  activity: Member["activity"];
  colors: Member["colors"];
};

export const ProfileCardActivity: React.FC<ProfileCardActivityProps> = ({
  activity,
  colors,
}) => {
  if (!activity) return null;

  return (
    <div className="pt-3">
      <div
        className={cn(
          "flex flex-col gap-0.5 rounded-lg border border-[hsl(0,0%,0%,0.075)] bg-[hsla(0,0%,100%,0.25)] p-2 text-xs",
          {
            "border-[hsla(0,0%,100%,0.075)] bg-[hsla(0,0%,0%,0.15)]":
              isColorDark(colors.primary),
          },
        )}
      >
        <div className="text-xs">
          {activity.type === "listening" ? (
            <ListeningActivity metadata={activity.metadata} />
          ) : (
            <PlayingActivity metadata={activity.metadata} />
          )}
        </div>
      </div>
    </div>
  );
};
