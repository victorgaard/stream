import type { Member } from "../../data/members";
import { cn } from "../../utils/cn";
import { getRandomColor, isColorDark } from "../../utils/colors";

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

type ProfileCardRolesProps = {
  roles: Member["roles"];
  colors: Member["colors"];
};

export const ProfileCardRoles: React.FC<ProfileCardRolesProps> = ({
  roles,
  colors,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-1 pt-3">
      {roles.map((role) => (
        <div
          key={role}
          className={cn(
            "font-gg-semibold flex h-6 items-center gap-1 rounded-[6px] border border-[hsl(0,0%,0%,0.15)] p-1 text-xs leading-0 opacity-70",
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
  );
};
