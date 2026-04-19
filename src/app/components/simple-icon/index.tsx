type Props = {
  path: string;
  hex: string;
  size?: number;
  inheritColor?: boolean;
};

const SimpleIcon = ({ path, hex, size = 80, inheritColor = false }: Props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={inheritColor ? 'currentColor' : `#${hex}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);

export default SimpleIcon;
