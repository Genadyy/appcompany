import React from "react";
import styles from "./Statistic.module.scss";
import { NavLink } from "react-router-dom";
import { userList } from "./../../users";
import { usersTotalStatistic } from "./../../users_statistic";
import picture from "./../../../images/iconNav.png";

function splitOnPages(arr) {
  let pages = [];
  for (let k = 0; k < arr.length / 50; k++) {
    let page = [];
    for (let i = 0 + 50 * k; i < 50 * (k + 1); i++) {
      page.push(arr[i]);
    }
    pages.push(page);
  }
  return pages;
}

function totalData(arr, arr1) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      arr[i][k].totalviews = arr1[i][k][0];
      arr[i][k].totalclicks = arr1[i][k][1];
    }
  }
  return arr;
}

const TableRow = (props) => {
  return (
    <tr className={styles.statistic_table_row}>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.id}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.first_name}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.last_name}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.email}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.gender}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.ip_address}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.totalclicks}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/user/:${props.id}`} onMouseOver={props.handleMouse}>
          {props.data.totalviews}
        </NavLink>
      </td>
    </tr>
  );
};

const RenderTableContent = (props) => {
  const pagesList = splitOnPages(userList);

  const pagesListStat = splitOnPages(usersTotalStatistic);

  totalData(pagesList, pagesListStat);

  return (
    <tbody>
      {pagesList[props.pageNumber].map((item, index) => (
        <TableRow
          key={index}
          data={item}
          handleMouse={props.handleMouse}
          id={props.id}
          name={props.name}
          lastName={props.lastName}
        />
      ))}
    </tbody>
  );
};

const Page = (props) => {
  return (
    <div className={styles.pagination_page} onClick={props.handleClick}>
      {props.index + 1}
    </div>
  );
};

const Pages = (props) => {
  const pagesList = splitOnPages(userList);

  return (
    <div className={styles.pagination_pages}>
      {pagesList.map((item, index) => (
        <Page
          data={item}
          index={index}
          handleClick={props.handleClick}
          //className={props.className}
        />
      ))}
    </div>
  );
};

const Statistic = (props) => {
  return (
    <div className="container">
      <div className={styles.statistic}>
        <ul className={styles.statistic_nav}>
          <li className={styles.statistic_link}>
            <NavLink to="/appcompany" exact activeClassName={styles.active}>
              Main page
            </NavLink>
          </li>
          <div className={styles.icon_nav}>
            <img src={picture} alt="triangle" />
          </div>
          <li className={styles.statistic_link}>
            <NavLink to="/users_statistic" activeClassName={styles.active}>
              Users statistics
            </NavLink>
          </li>
        </ul>
        <h2 className={styles.statistic_title}>Users statistics</h2>
        <table className={styles.statistic_table}>
          <thead>
            <tr className={styles.statistic_table_title}>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP address</th>
              <th>Total clicks</th>
              <th>Total page views</th>
            </tr>
          </thead>

          <RenderTableContent
            handleMouse={props.handleMouse}
            id={props.id}
            name={props.name}
            lastName={props.lastName}
            pageNumber={props.pageNumber}
          />
        </table>
      </div>
      <div className={styles.pagination}>
        <div className={styles.pagination_wrapper}>
          <Pages
            handleClick={props.handleClick}
            pageNumber={props.pageNumber}
            className={props.className}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
