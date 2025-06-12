import type { Member } from "../../data/members";
import { cn } from "../../utils/cn";
import { isColorDark } from "../../utils/colors";
import { PencilIcon } from "../icons/PencilIcon";

type ProfileCardFooterProps = {
  id: Member["id"];
  colors: Member["colors"];
  name: Member["name"];
};

export const ProfileCardFooter: React.FC<ProfileCardFooterProps> = ({
  id,
  colors,
  name
}) => {
  return (
    <div className="w-full pt-3">
      {id === 1 ? (
        <button className="bg-slate-8 hover:bg-slate-7 text-slate-12 flex h-8 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg text-sm transition-colors">
          <PencilIcon className="size-4" />
          Edit profile
        </button>
      ) : (
        <div
          className={cn(
            "flex flex-col gap-0.5 rounded-lg border border-[hsl(0,0%,0%,0.1)] bg-[hsla(0,0%,100%,0.25)] p-2 text-xs",
            {
              "border-[hsla(0,0%,0%,0.1)] bg-[hsla(0,0%,0%,0.2)]": isColorDark(
                colors.primary,
              ),
            },
          )}
        >
          <textarea
            className="placeholder:font-gg-normal placeholder:text-slate-9 font-gg field-sizing-content flex-1 resize-none flex-wrap self-stretch px-1 py-0.5 text-sm outline-0"
            placeholder={`Message @${name}`}
            autoFocus
          />
        </div>
      )}
    </div>
  );
};
