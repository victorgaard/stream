import * as TooltipRadix from "@radix-ui/react-tooltip";
import { cn } from "../../utils/cn";

type TooltipProps = React.PropsWithChildren &
  TooltipRadix.TooltipContentProps & {
    delayDuration?: number;
    content: React.ReactNode;
  };

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  delayDuration = 0,
  className,
  ...props
}) => {
  return (
    <TooltipRadix.Provider delayDuration={delayDuration}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className={cn(
              "bg-slate-7 border-slate-8 text-slate-11 font-gg rounded-lg border px-3 py-1 text-sm",
              className,
            )}
            {...props}
          >
            {content}
            {props.side === "right" && (
              <>
                <TooltipRadix.Arrow className="fill-slate-8 absolute -left-[4px] w-[13px]" />
                <TooltipRadix.Arrow className="fill-slate-7 -translate-y-[1px]" />
              </>
            )}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};
