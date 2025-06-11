import { cva, type VariantProps } from "class-variance-authority";
import { Avatar, type AvatarProps } from "./Avatar";
import { cn } from "../../utils/cn";
import { CircleIcon } from "../icons/CircleIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { CircleWithMinusIcon } from "../icons/CircleWithMinusIcon";

const ICON_MAP: Record<
  Exclude<NonNullable<StatusVariant["status"]>, "offline">,
  React.ElementType
> = {
  online: CircleIcon,
  idle: MoonIcon,
  busy: CircleWithMinusIcon,
};

type IconProps = {
  status: StatusVariant["status"];
  className?: string;
};

const Icon: React.FC<IconProps> = ({ status, className }) => {
  if (!status || status === "offline") return null;
  const Icon = ICON_MAP[status];
  return <Icon className={className} />;
};

const statusVariants = cva("rounded-full absolute -right-1.5 -bottom-1.5", {
  variants: {
    status: {
      online: "text-online",
      idle: "text-idle",
      busy: "text-busy",
      offline: "",
    },
    size: {
      sm: "scale-90",
      md: "scale-[105%]",
      lg: "scale-[185%]",
    },
  },
  defaultVariants: {
    status: "online",
    size: "sm",
  },
});

type StatusVariant = VariantProps<typeof statusVariants>;
type AvatarWithStatusProps = AvatarProps & StatusVariant;

export const AvatarWithStatus: React.FC<AvatarWithStatusProps> = ({
  name,
  src,
  size,
  status,
  className,
}) => {
  return (
    <div className="relative">
      <Avatar
        name={name}
        src={src}
        size={size}
        className={cn(
          {
            "[mask-image:radial-gradient(circle_at_calc(100%-5px)_calc(100%-5px),transparent_22%,black_0)]":
              status !== "offline",
            "[mask-image:radial-gradient(circle_at_calc(100%-4px)_calc(100%-4px),transparent_20%,black_0)]":
              size === "lg" && status !== "offline",
          },
          className,
        )}
      />
      <Icon status={status} className={statusVariants({ size, status })} />
    </div>
  );
};
