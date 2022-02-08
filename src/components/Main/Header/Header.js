import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import picture from "./../../../images/iPhoneX.png";
import picture1 from "./../../../images/shadow.png";
//import UsersStatistic from "./../../UsersStatistic/UsersStatistic";
import { Link } from "react-router-dom";
import axios from "axios";
import { userList } from "./../../users";

const Header = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect(() => {
  //  fetchUsers();
  // });

  const testArr = [
    {
      id: 1,
      first_name: "Christie",
      last_name: "Gann",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 2,
      first_name: "Christ",
      last_name: "Gannover",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 3,
      first_name: "Istie",
      last_name: "Goonn",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 4,
      first_name: "Bohrie",
      last_name: "Bann",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 5,
      first_name: "Rooky",
      last_name: "Foann",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 6,
      first_name: "Jemse",
      last_name: "Bishop",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
    {
      id: 7,
      first_name: "Charles",
      last_name: "Mushroom",
      email: "cgann0@hostgator.com",
      gender: "Female",
      ip_address: "57.14.195.231",
    },
  ];

  const fetchUsers = async () => {
    axios
      .get("http://localhost:4001/users/all")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the users list: ${error}`)
      );
  };

  const handleUserCreate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      //Send POST request to "users/create" endpoint
      axios
        .post("http://localhost:4001/users/create", {
          first_name: arr[i].first_name,
          last_name: arr[i].last_name,
          email: arr[i].email,
          gender: arr[i].gender,
          ip_address: arr[i].ip_address,
        })
        .then((res) => {
          //console.log(res.data);
        })
        .catch((error) =>
          console.error(
            `There was an error creating ${testArr.first_name} user: ${error}`
          )
        );
    }
    fetchUsers();
  };

  const start = () => {
    console.log(userList);
    handleUserCreate(userList);
  };

  const resetUsers = () => {
    axios
      .put("http://localhost:4001/users/reset")
      .then(() => {
        fetchUsers();
      })
      .catch((err) =>
        console.error(`There was an error resetting users list: ${err}`)
      );
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <span className={styles.logo}>AppCo</span>
        <h1 className={styles.header_title}>
          <span>Brainstorming</span> for<br></br>desired perfect Usability
        </h1>
        <p className={styles.header_text}>
          Our design projects are fresh and simple and will benefit<br></br>{" "}
          your business greatly. Learn more about our work!
        </p>

        <Link to="/users_statistic">
          <button className={styles.btn}>Views Stats</button>
        </Link>

        <img className={styles.header_pic} src={picture} alt="iphone's" />
        <img
          className={styles.header_shadow}
          src={picture1}
          alt="iphone's shadow"
        />
      </div>
    </div>
  );
};

export default Header;
