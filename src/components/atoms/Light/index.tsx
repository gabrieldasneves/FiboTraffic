import { ReactNode } from "react";
import "./styles.css";

type LightProps = {
  color: "red" | "yellow" | "green";
  isActive: boolean;
  children?: ReactNode;
};

export function Light({ color, isActive, children }: LightProps) {
  return (
    <>
      <div className={`label ${color} ${isActive ? `active${color}` : ""}`}>
        <span className="children">{children}</span>
      </div>
    </>
  );
}
