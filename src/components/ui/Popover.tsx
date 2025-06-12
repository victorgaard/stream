import * as PopoverRadix from "@radix-ui/react-popover";
import { isValidElement } from "react";
import { cn } from "../../utils/cn";

export type PopoverProps = React.PropsWithChildren &
  PopoverRadix.PopoverContentProps & {
    trigger: React.ReactNode;
  };

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  className,
  ...props
}) => {
  const isButton = isValidElement(trigger) && trigger.type === "button";
  return (
    <PopoverRadix.Root>
      <PopoverRadix.Trigger
        asChild={isButton}
        className={cn({ "h-fit w-fit shrink-0": !isButton })}
      >
        {trigger}
      </PopoverRadix.Trigger>
      <PopoverRadix.Portal>
        <PopoverRadix.Content {...props} className={className}>
          {children}
        </PopoverRadix.Content>
      </PopoverRadix.Portal>
    </PopoverRadix.Root>
  );
};
