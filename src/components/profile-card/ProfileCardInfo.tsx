import type { Member } from "../../data/members";

type ProfileCardInfoProps = {
  name: Member["name"];
  username: Member["username"];
  bio: Member["bio"];
};

export const ProfileCardInfo: React.FC<ProfileCardInfoProps> = ({
  name,
  username,
  bio,
}) => {
  const splitBio = bio.split("\n");
  return (
    <>
      <p className="font-gg-bold text-xl leading-tight">{name}</p>
      <p className="text-sm leading-tight opacity-70">{username}</p>

      <div className="flex flex-col gap-0.5 pt-3">
        {splitBio.map((b) => (
          <p key={b} className="text-sm leading-tight opacity-85">
            {b}
          </p>
        ))}
      </div>
    </>
  );
};
