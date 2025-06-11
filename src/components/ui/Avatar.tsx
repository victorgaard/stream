type AvatarProps = {
  name: string;
  src?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ name, src }) => {
    if (!src) return null;

    return <img src={src} alt={name} />
};
