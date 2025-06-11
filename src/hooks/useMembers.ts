import { members } from "../data/members";

export const useMembers = () => {
  const { onlineMembers, offlineMembers } = members.reduce(
    (acc, member) => {
      if (member.status === "offline") {
        acc.offlineMembers.push(member);
      } else {
        acc.onlineMembers.push(member);
      }
      return acc;
    },
    { onlineMembers: [], offlineMembers: [] } as {
      onlineMembers: typeof members;
      offlineMembers: typeof members;
    },
  );
  return { onlineMembers, offlineMembers };
};
