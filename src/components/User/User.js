import styles from "./User.module.scss";
import HeaderUser from "./../UsersStatistic/HeaderUser/HeaderUser";
import FooterUser from "./../UsersStatistic/FooterUser/FooterUser";
import UserChartClick from "./UserChartClick/UserChartClick";
import UserChartViews from "./UserChartViews/UserChartViews";
import { NavLink } from "react-router-dom";
import picture from "./../../images/calendar.png";
import picture1 from "./../../images/iconNav.png";

const User = (props) => {
  return (
    <div className={styles.user}>
      <HeaderUser />
      <div className={styles.user_content}>
        <ul className={styles.user_nav}>
          <li className={styles.user_link}>
            <NavLink to="/appcompany" exact activeClassName={styles.active}>
              Main page
            </NavLink>
          </li>
          <div className={styles.icon_nav}>
            <img src={picture1} alt="triangle" />
          </div>
          <li className={styles.user_link}>
            <NavLink to="/users_statistic" activeClassName={styles.active}>
              Users statistics
            </NavLink>
          </li>
          <div className={styles.icon_nav}>
            <img src={picture1} alt="triangle" />
          </div>
          <li className={styles.user_link}>
            <NavLink to={`/user/:${props.id}`} activeClassName={styles.active}>
              {props.name} {props.lastName}
            </NavLink>
          </li>
        </ul>
        <div className={styles.title}>
          <h1>{props.name + " " + props.lastName}</h1>
          <div className={styles.title_calendar}>
            <p>Select date range</p>
            <div className={styles.calendar_icon}>
              <img src={picture} alt="calendar icon" />
            </div>
            <div className={styles.calendar_date}>
              <p className={styles.date_start}>Feb 12 2021</p>
              <span>-</span>
              <p className={styles.date_end}>Feb 25 2021</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Clicks</h2>
          <div className={styles.graf}>
            <UserChartClick id={props.id} />
          </div>
        </div>
        <div>
          <h2>Views</h2>
          <div className={styles.graf}>
            <UserChartViews id={props.id} />
          </div>
        </div>
      </div>
      <FooterUser />
    </div>
  );
};

export default User;
