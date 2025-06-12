export type Metadata = {
  provider: string;
  title: string;
  description: string;
  picture: string;
  current?: string;
  length?: string;
};

export type Activity = {
  type: "playing" | "listening";
  metadata: Metadata;
};

type Status = "online" | "idle" | "busy" | "offline";

type Color = {
  primary: string;
  accent: string;
};

export type Member = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  background: string;
  bio: string;
  colors: Color;
  activity?: Activity;
  status: Status;
  roles: string[];
  quote?: string;
  isNitro: boolean;
  subscriberSince?: string;
};

export const members: Member[] = [
  {
    id: 1,
    name: "Victor",
    username: "elvengaard",
    avatar: "./members/victor.jpeg",
    background:
      "https://cdn.discordapp.com/banners/166385315228024832/a_54b2eb4c16d8fe37bea6ea9b2ea65031.webp?size=600&animated=true",
    colors: {
      primary: "#FAFAFA",
      accent: "#9e9cbb",
    },
    bio: `
    💻 Design Engineer
    🇧🇷 Curitiba (GMT-3/EST+2/CET-4)
    🧳 Hours (EST): 7-8 AM to 3-4 PM
    `,
    activity: {
      type: "listening",
      metadata: {
        provider: "Spotify",
        title: "Katatonia",
        description: "Thrice",
        current: "02:38",
        length: "04:39",
        picture:
          "https://i.scdn.co/image/ab67616d00001e025666ba36bbb0c8e7976b71fa",
      },
    },
    status: "online",
    roles: ["design engineer", "elite knight", "aram enjoyer"],
    isNitro: true,
    subscriberSince: "2024-09-16T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Grub",
    username: "grubbyboi",
    avatar: "./members/grub.webp",
    background: "",
    colors: {
      primary: "#333446",
      accent: "#B8CFCE",
    },
    bio: "One among many, waiting to be rescued. Loves jars and family reunions.",
    status: "idle",
    roles: ["squishy mascot"],
    isNitro: false,
  },
  {
    id: 3,
    name: "Knight",
    username: "voidling",
    avatar: "./members/knight.jpeg",
    background: "",
    colors: {
      primary: "#ffffff",
      accent: "#0d1e4e",
    },
    bio: "Silent, deadly, and born of Void. Wields the Nail with precision.",
    status: "offline",
    roles: ["vessel", "nailmaster"],
    isNitro: false,
  },
  {
    id: 4,
    name: "Hornet",
    username: "protector.of.hallownest",
    avatar: "./members/hornet.webp",
    background:
      "https://cdn.discordapp.com/banners/485177376217759765/a_d0df1d9c377c5bb7f3c5f1c592873b19.webp?size=600&animated=true",
    colors: {
      primary: "#111117",
      accent: "#5865F2",
    },
    bio: "Daughter of Hallownest. Agile, fierce, and always watching.",
    status: "busy",
    activity: {
      type: "playing",
      metadata: {
        provider: "Playstation",
        title: "Silksong",
        description: "Thrice",
        current: "23:05",
        picture:
          "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/capsule_616x353.jpg?t=1742776298",
      },
    },
    roles: ["needlemaster", "guardian"],
    isNitro: true,
    subscriberSince: "2023-02-25T00:00:00.000Z",
  },
  {
    id: 5,
    name: "Quirrel",
    username: "quirky.mask",
    avatar: "./members/quirrel.jpeg",
    background: "",
    colors: {
      primary: "#fafafa",
      accent: "#533B4D",
    },
    bio: "Wanderer and thinker. Fond of Blue Lake and old secrets.",
    status: "offline",
    roles: ["wanderer", "scholar"],
    isNitro: false,
  },
];
