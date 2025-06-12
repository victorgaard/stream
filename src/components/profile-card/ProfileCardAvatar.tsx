import type { Member } from "../../data/members";
import { AvatarWithStatus } from "../ui/AvatarWithStatus";

type ProfileCardAvatarProps = {
  colors: Member["colors"];
  status: Member["status"];
  name: Member["name"];
  avatar: Member["avatar"];
};

export const ProfileCardAvatar: React.FC<ProfileCardAvatarProps> = ({
  colors,
  status,
  name,
  avatar,
}) => {
  return (
    <div className="absolute top-12 flex p-4">
      <div
        className="absolute top-2.5 left-2.5 size-23 rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${colors.primary} 0%, ${colors.primary} 55%, transparent 50%`,
        }}
      />
      <AvatarWithStatus size="lg" status={status} name={name} src={avatar} />
    </div>
  );
};
