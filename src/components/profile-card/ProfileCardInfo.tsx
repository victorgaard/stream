import type { Member } from "../../data/members";
import { useDate } from "../../hooks/useDate";
import { Tooltip } from "../ui/Tooltip";

type NitroProps = {
  isNitro: Member["isNitro"];
  subscriberSince: Member["subscriberSince"];
};

const Nitro: React.FC<NitroProps> = ({ isNitro, subscriberSince }) => {
  const { isoToDDMMYYYY } = useDate();

  if (!isNitro || !subscriberSince) return null;

  const subSince = isoToDDMMYYYY(subscriberSince);

  return (
    <Tooltip
      content={`Nitro Gold subscriber since ${subSince}`}
      side="right"
      sideOffset={4}
    >
      <img
        src="./nitro.png"
        alt="Nitro"
        width={20}
        height={20}
        className="size-5"
      />
    </Tooltip>
  );
};

type ProfileCardInfoProps = {
  name: Member["name"];
  username: Member["username"];
  bio: Member["bio"];
  isNitro: Member["isNitro"];
  subscriberSince: Member["subscriberSince"];
};

export const ProfileCardInfo: React.FC<ProfileCardInfoProps> = ({
  name,
  username,
  bio,
  isNitro,
  subscriberSince,
}) => {
  const splitBio = bio.split("\n");
  return (
    <>
      <p className="font-gg-bold text-xl leading-tight">{name}</p>
      <div className="flex items-center gap-1.5">
        <p className="text-sm leading-tight opacity-70">{username}</p>
        <Nitro isNitro={isNitro} subscriberSince={subscriberSince} />
      </div>

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
