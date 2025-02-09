import css from "./HomePage.module.css";

import girl from "../../images/home_img.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <div className={`container ${css.home_wrap}`}>
        <div className={css.info}>
          <h1 className={css.title}>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p className={css.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link className={css.link} to="/teachers">
            Get started
          </Link>
        </div>
        <img
          className={css.img}
          src={girl}
          alt="girl"
          width="568"
          height="530"
        />
        <ul className={css.list}>
          <li className={css.item}>
            <p>32,000 +</p>
            <p>Experienced tutors</p>
          </li>
          <li className={css.item}>
            <p>300,000 +</p>
            <p>5-star tutor reviews</p>
          </li>
          <li className={css.item}>
            <p>120 +</p>
            <p>Subjects taught</p>
          </li>
          <li className={css.item}>
            <p>200 +</p>
            <p>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
