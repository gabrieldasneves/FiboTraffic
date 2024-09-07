import { ReactNode } from "react";
import "./styles.css";

type lightProps = {
  color: "red" | "yellow" | "green";
  isActive: boolean;
  children?: ReactNode;
};

export function Light({ color, isActive, children }: lightProps) {
  return (
    <>
      <div className={`label ${color} ${isActive ? `active${color}` : ""}`}>
        {children}
      </div>
    </>
  );
}
