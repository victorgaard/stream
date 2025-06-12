import { members } from "../data/members";
import { useDate } from "../hooks/useDate";
import { PlusCircleIcon } from "./icons/PlusCircleIcon";
import { ProfileCard } from "./profile-card";
import { Avatar } from "./ui/Avatar";

const member = members[0];

const Message: React.FC = () => {
  return (
    <div className="font-gg-normal text-slate-12 flex flex-col gap-3.5 text-base">
      <p>Hi there Stream team 👋</p>
      <p>
        For this assignment, I picked the profile card feature from Discord.
        Discord is a product I use daily and I love so many things about it. The
        profile card in particular is a great way for users to express
        themselves.
      </p>
      <p>
        You can find the profile card by clicking in my name, avatar, or from
        the members list.
      </p>
      <p>I hope you like it :)</p>
      <p>
        Code at:{" "}
        <a
          href="https://github.com/victorgaard/stream"
          target="_blank"
          className="text-link hover:underline"
        >
          https://github.com/victorgaard/stream
        </a>
      </p>
      <p>ps: got a little carried away mocking the discord shell 🙈</p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="p-3">
      <div className="bg-slate-3 border-slate-6 focus-within:border-slate-8 flex min-h-[52px] items-center gap-1.5 rounded-lg border transition-colors">
        <button className="text-slate-9 hover:text-slate-10 cursor-pointer self-stretch px-4 transition-colors">
          <PlusCircleIcon className="size-5" />
        </button>
        <textarea
          className="placeholder:font-gg-normal placeholder:text-slate-9 font-gg field-sizing-content flex-1 resize-none flex-wrap self-stretch py-3.5 text-base outline-0"
          placeholder="Message #design-engineer-assignment"
        />
      </div>
    </div>
  );
};

const ProfileCardWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProfileCard
      side="right"
      collisionPadding={{ bottom: 20 }}
      trigger={children}
      {...member}
    />
  );
};

export const Messages: React.FC = () => {
  const { friendlyDate, dateInDigits, time } = useDate();

  return (
    <div className="bg-slate-2 flex flex-1 flex-col justify-end">
      <div className="px-4 pb-2">
        <p className="before:bg-slate-9/50 after:bg-slate-9/50 m-0 flex w-full flex-nowrap items-center text-xs before:relative before:mr-1.5 before:h-[1px] before:w-full before:opacity-30 before:content-[''] after:relative after:ml-1.5 after:h-[1px] after:w-full after:opacity-30 after:content-['']">
          <span className="text-slate-9 shrink-0">{friendlyDate}</span>
        </p>
      </div>
      <div className="hover:bg-slate-3 flex flex-col gap-4 px-4 py-1.5">
        <div className="flex gap-4">
          <ProfileCardWrapper>
            <Avatar
              name={member.name}
              src={member.avatar}
              className="shrink-0 cursor-pointer transition-all active:scale-95"
            />
          </ProfileCardWrapper>

          <div className="flex flex-col">
            <div className="flex gap-2">
              <ProfileCardWrapper>
                <p className="flex h-6 cursor-pointer text-base underline-offset-1 hover:underline">
                  {member.name}
                </p>
              </ProfileCardWrapper>
              <p className="text-slate-10 flex h-6 items-center pt-[3px] text-xs">
                {dateInDigits}, {time}
              </p>
            </div>
            <Message />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
