import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-area">
        <div className="header__logo" alt="logo" />
        <h1 className="header__title">The Book store</h1>
      </div>

      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-list">
            <Link to="/" className="nav__menu-link">
              Home
            </Link>
          </li>
          <li className="nav__menu-list">
            <Link to="#" className="nav__menu-link">
              Books
            </Link>
          </li>
          <li className="nav__menu-list">
            <Link to="#" className="nav__menu-link">
              Magazines
            </Link>
          </li>
          <li className="nav__menu-list">
            <Link to="#" className="nav__menu-link">
              E-Books
            </Link>
          </li>
          <li className="nav__menu-list">
            <Link to="#" className="nav__menu-link">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
