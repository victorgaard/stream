import * as PopoverRadix from "@radix-ui/react-popover";

type PopoverProps = React.PropsWithChildren &
  PopoverRadix.PopoverContentProps & {
    trigger: React.ReactNode;
  };

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  className,
  ...props
}) => {
  return (
    <PopoverRadix.Root>
      <PopoverRadix.Trigger asChild>{trigger}</PopoverRadix.Trigger>
      <PopoverRadix.Portal>
        <PopoverRadix.Content {...props} className={className}>
          {children}
        </PopoverRadix.Content>
      </PopoverRadix.Portal>
    </PopoverRadix.Root>
  );
};
