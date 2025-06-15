interface ColorCircleProps {
  color: string;
  size?: "sm" | "md" | "lg";
}

export const ColorCirlce = ({ color, size = "md" }: ColorCircleProps) => {
  const sizeing = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div
      className={`inline-block rounded-full ${sizeing[size]} mr-2 align-middle`}
      style={{ backgroundColor: color }}
    />
  );
};
