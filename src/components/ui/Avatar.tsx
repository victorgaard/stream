import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const avatarVariants = cva("rounded-full object-cover", {
  variants: {
    size: {
      sm: "size-8",
      md: "size-10",
      lg: "size-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AvatarProps = VariantProps<typeof avatarVariants> & {
  name: string;
  src?: string;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ name, src, size, className }) => {
  if (!src)
    return <div className={cn(avatarVariants({ size }), className)}>{name[0]}</div>;

  return <img src={src} alt={name} className={cn(avatarVariants({ size }), className)} />;
};
