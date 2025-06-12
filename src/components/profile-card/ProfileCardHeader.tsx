import type { Member } from "../../data/members";

type ProfileCardHeaderProps = {
  background: Member["background"];
  colors: Member["colors"];
};

export const ProfileCardHeader: React.FC<ProfileCardHeaderProps> = ({
  background,
  colors,
}) => {
  return (
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
  );
};
