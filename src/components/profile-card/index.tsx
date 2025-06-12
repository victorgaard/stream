import type { Member } from "../../data/members";
import { cn } from "../../utils/cn";
import { Popover, type PopoverProps } from "../ui/Popover";
import { ProfileCardActivity } from "./ProfileCardActivity";
import { ProfileCardAvatar } from "./ProfileCardAvatar";
import { ProfileCardBody } from "./ProfileCardBody";
import { ProfileCardFooter } from "./ProfileCardFooter";
import { ProfileCardHeader } from "./ProfileCardHeader";
import { ProfileCardInfo } from "./ProfileCardInfo";
import { ProfileCardRoles } from "./ProfileCardRoles";

type ProfileCardProps = Member &
  Omit<PopoverProps, "id"> & {
    trigger: React.ReactNode;
  };

export const ProfileCard: React.FC<ProfileCardProps> = ({
  trigger,
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
  ...popoverProps
}) => {
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
      trigger={trigger}
      {...popoverProps}
    >
      <ProfileCardHeader background={background} colors={colors} />
      <ProfileCardAvatar
        colors={colors}
        status={status}
        name={name}
        avatar={avatar}
      />
      <ProfileCardBody colors={colors} isNitro={isNitro}>
        <ProfileCardInfo name={name} username={username} bio={bio} />
        <ProfileCardActivity activity={activity} colors={colors} />
        <ProfileCardRoles roles={roles} colors={colors} />
        <ProfileCardFooter id={id} colors={colors} name={name} />
      </ProfileCardBody>
    </Popover>
  );
};
