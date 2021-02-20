import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/">Joha Kim</Link>

      <div>
        <Link to="./about" className="link">
          About
        </Link>

        <Link to="./experience" className="link">
          Experience
        </Link>

        <Link to="./interests" className="link">
          Interests
        </Link>

        <Link to="./contact" className="link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
