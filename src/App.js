import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsersStatistic from "./components/UsersStatistic/UsersStatistic";
import User from "./components/User/User";
import { userList } from "./components/users";

/*const App = () => {
  // Start point
  // Set states
  //const [firstName, setFirstName] = useState('Bob');
  //const [lastName, setLastName] = useState('Booba');
  //const [email, setEmail] = useState('');
  //const [gender, setGender] = useState('');
  //const [ipAddress, setIpAddress] = useState('');
  const [users, setUsers] = useState([]);
  //const [totalClicks, setTotalClicks] = useState('');
  //const [totalViews, setTotalViews] = useState('');
  const [totalStatistic, setTotalStatistic] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch all users on initial render
  useEffect(() => {
    fetchUsers();
  }, []);
  //useEffect(() => {
  //fetchTotalStatistic();
  //}, []);
*/ /*
//Fetch all users
const fetchUsers = async () => {
  //Send GET request to "users/all" endpoint
  axios
    .get("http://localhost:4001/users/all")
    .then((response) => {
      //Update the "users" state
      setUsers(response.data);

      //Update "loading" state
      setLoading(false);
    })
    .catch((error) =>
      console.error(`There was an error retrieving the users list: ${error}`)
    );
};
*/
//Create new user

/*
    {
      id: 2,
      first_name: "Hamil",
      last_name: "Cressey",
      email: "hcressey1@delicious.com",
      gender: "Male",
      ip_address: "45.225.25.145",
    },
    {
      id: 3,
      first_name: "Lottie",
      last_name: "Dupre",
      email: "ldupre2@dot.gov",
      gender: "Female",
      ip_address: "254.46.181.79",
    },
    {
      id: 4,
      first_name: "Godfry",
      last_name: "Raoult",
      email: "graoult3@npr.org",
      gender: "Male",
      ip_address: "133.124.79.194",
    },
    {
      id: 5,
      first_name: "Dorrie",
      last_name: "Beckley",
      email: "dbeckley4@buzzfeed.com",
      gender: "Female",
      ip_address: "252.217.2.208",
    },
    {
      id: 6,
      first_name: "Linc",
      last_name: "Milella",
      email: "lmilella5@wikispaces.com",
      gender: "Male",
      ip_address: "175.119.105.110",
    },
    {
      id: 7,
      first_name: "Alfie",
      last_name: "O' Sullivan",
      email: "aosullivan6@sphinn.com",
      gender: "Male",
      ip_address: "218.183.185.92",
    },
    {
      id: 8,
      first_name: "Urbanus",
      last_name: "Pittford",
      email: "upittford7@mit.edu",
      gender: "Male",
      ip_address: "199.232.254.9",
    },
    {
      id: 9,
      first_name: "Osbourne",
      last_name: "Andreacci",
      email: "oandreacci8@eventbrite.com",
      gender: "Male",
      ip_address: "172.255.67.174",
    },
    {
      id: 10,
      first_name: "Dina",
      last_name: "Sturt",
      email: "dsturt9@npr.org",
      gender: "Female",
      ip_address: "170.156.106.240",
    },
  ];
  
  //Creating "users" database
  const createUsersDatabase = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      // Post user to database
      handleUserCreate(arr[i]);
    }
    fetchUsers();
  };
  createUsersDatabase(testArr);
  // End point
*/
// Class approach

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        id: "0",
        name: "Bob",
        lastName: "Booba",
      },
      pageNumber: 0,
      users: [],
      //className: "styles.pagination_page",
    };
    this.handleMouse = this.handleMouse.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouse(event) {
    this.setState({
      userData: {
        id: [...event.target.parentNode.parentNode.children][0].textContent,
        name: [...event.target.parentNode.parentNode.children][1].textContent,
        lastName: [...event.target.parentNode.parentNode.children][2]
          .textContent,
      },
    });
  }

  handleClick(event) {
    this.setState({
      pageNumber: event.target.textContent - 1,
      //className: "styles.pagination_page_active",
    });
  }
  // Start point
  // const getUsersData = async() => {
  //   try{
  //     const data = await axios.get("https://drive.google.com/file/d/1Mnt53fYM_JNsUQgzh7nfsvUjuBAWmh9f/view"
  //     );
  //     console.log(data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getUsersData();
  // },[]);
  // End point

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/appcompany" component={Main} />

            <Route
              path="/users_statistic"
              render={() => (
                <UsersStatistic
                  handleMouse={this.handleMouse}
                  handleClick={this.handleClick}
                  id={this.state.userData.id}
                  name={this.state.userData.name}
                  lastName={this.state.userData.lastName}
                  pageNumber={this.state.pageNumber}
                  //className={this.state.className}
                />
              )}
            />
            <Route
              exact
              path={`/user/:${this.state.userData.id}`}
              render={() => (
                <User
                  id={this.state.userData.id}
                  name={this.state.userData.name}
                  lastName={this.state.userData.lastName}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;




////"node ./buildScripts\"
