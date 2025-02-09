import css from "./Navigation.module.css";
import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <header className={css.header}>
      <div className={`container ${css.wrap} `}>
        <Link className={css.logo} to="/">
          <img src={logo} width="28" height="28" alt="logo" />
          LearnLingo
        </Link>
        <nav className={css.nav}>
          <NavLink className={getActiveClass} to="/">
            Home
          </NavLink>
          <NavLink className={getActiveClass} to="/teachers">
            Teachers
          </NavLink>
        </nav>
        <ul className={css.buttons}>
          <li>
            <button className={css.login}>
              <svg className={css.svg} width="20" height="20">
                <use href="/icons.svg#login" />
              </svg>
              Log in
            </button>
          </li>
          <li>
            <button className={css.registr}>Registration</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
