import { Link } from "react-router-dom";

import "../NavBar/navBar.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="left-li">
            <Link className="link" to="/">
              Recent Articles
            </Link>
          </li>
          <li className="left-li">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="right-li">
            <Link className="link" to="/login">
              Log in <IoArrowForwardOutline />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
