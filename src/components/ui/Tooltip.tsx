import * as TooltipRadix from "@radix-ui/react-tooltip";

type TooltipProps = React.PropsWithChildren &
  TooltipRadix.TooltipContentProps & {
    delayDuration?: number;
    content: React.ReactNode;
  };

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  delayDuration = 0,
  ...props
}) => {
  return (
    <TooltipRadix.Provider delayDuration={delayDuration}>
      <TooltipRadix.Root >
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className="bg-slate-7 border-slate-8 text-slate-11 rounded-lg border px-3 py-1"
            {...props}
          >
            {content}
            <TooltipRadix.Arrow
              className="fill-slate-8 w-[13px] absolute -left-[4px]"
            />
            <TooltipRadix.Arrow className="fill-slate-7 -translate-y-[1px]" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};
