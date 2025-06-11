import { cva, type VariantProps } from "class-variance-authority";
import { Avatar, type AvatarProps } from "./Avatar";
import { cn } from "../../utils/cn";

const statusVariants = cva("rounded-full absolute right-0 bottom-0", {
  variants: {
    status: {
      online: "bg-online",
      idle: "bg-idle",
      busy: "bg-busy",
      offline: "",
    },
    size: {
      sm: "size-2.5",
      md: "size-3",
      lg: "size-4",
    },
  },
  defaultVariants: {
    status: "online",
    size: "sm",
  },
});

type AvatarWithStatusProps = AvatarProps & VariantProps<typeof statusVariants>;

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
      <div className={statusVariants({ status, size })} />
      <rect
        width="16"
        height="16"
        x="60"
        y="60"
        fill="#d83a42"
        mask="url(#svg-mask-status-dnd)"
      ></rect>
    </div>
  );
};
