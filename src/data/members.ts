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
  avatar: string;
  bio: string;
  activity?: Activity;
  status: Status;
  roles: string[];
  quote?: string;
};

export const members: Member[] = [
  {
    id: 1,
    name: "Victor",
    avatar: "./members/victor.jpeg",
    bio: "",
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
  {
    id: 2,
    name: "Grub",
    avatar: "./members/grub.webp",
    bio: "",
    status: "idle",
    roles: [],
  },
  {
    id: 3,
    name: "Knight",
    avatar: "./members/knight.jpeg",
    bio: "",
    status: "busy",
    roles: [],
  },
  {
    id: 4,
    name: "Hornet",
    avatar: "./members/hornet.webp",
    bio: "",
    status: "busy",
    activity: {
      type: "playing",
      metadata: {
        provider: "Playstation",
        title: "Silksong",
        description: "Thrice",
        picture:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/capsule_616x353.jpg?t=1742776298",
      },
    },
    roles: [],
  },
  {
    id: 5,
    name: "Quirrel",
    avatar: "./members/quirrel.jpeg",
    bio: "",
    status: "offline",
    roles: [],
  },
  {
    id: 6,
    name: "pure.vessel",
    avatar: "./members/purevessel.webp",
    bio: "",
    status: "offline",
    roles: [],
  },
];
