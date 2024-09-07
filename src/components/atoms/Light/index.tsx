import { ReactNode } from "react";
import "./styles.css";

type lightProps = {
  color: "red" | "yellow" | "green";
  isActive: boolean;
  onClick: () => void;
  children?: ReactNode;
};

export function Light({ color, isActive, onClick, children }: lightProps) {
  return (
    <>
      <div
        onClick={onClick}
        className={`label ${color} ${isActive ? `active${color}` : ""}`}
      >
        {children}
      </div>
    </>
  );
}
