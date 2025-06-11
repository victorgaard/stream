type Metadata = {
  provider: string;
  title: string;
  description: string;
  picture: string;
};

type Activity = {
  type: "playing" | "listening";
  metadata: Metadata;
};

type Status = "online" | "idle" | "busy" | "offline";

type Member = {
  id: number;
  name: string;
  activity: Activity;
  status: Status;
  roles: string[];
  quote?: string;
};

export const members: Member[] = [
  {
    id: 1,
    name: "Victor",
    activity: {
      type: "listening",
      metadata: {
        provider: "Spotify",
        title: "Katatonia",
        description: "Thrice",
        picture:
          "https://i.scdn.co/image/ab67616d00001e025666ba36bbb0c8e7976b71fa",
      },
    },
    status: "online",
    roles: ["design engineer", "elite knight", "aram enjoyer"],
  },
];
