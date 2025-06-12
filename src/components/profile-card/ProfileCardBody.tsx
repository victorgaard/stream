import type { Member } from "../../data/members";
import { cn } from "../../utils/cn";
import { isColorDark } from "../../utils/colors";

type ProfileCardBodyProps = React.PropsWithChildren & {
  colors: Member["colors"];
  isNitro: Member["isNitro"];
};

export const ProfileCardBody: React.FC<ProfileCardBodyProps> = ({
  children,
  colors,
  isNitro,
}) => {
  return (
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
      {children}
    </div>
  );
};
