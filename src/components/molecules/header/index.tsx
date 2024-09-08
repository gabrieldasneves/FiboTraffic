import Logo from "../../../../public/img/fibonacciLogo.png";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <h1 className="logo-text">FiboTraffic</h1>
    </header>
  );
};
