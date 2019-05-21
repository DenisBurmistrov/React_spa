import React, {Component} from "react"
import Login from "./Login"
import Register from "./Register"
import 'bootstrap/dist/css/bootstrap.css'
import 'mdbreact/dist/css/mdb.css'
//import axios from "axios";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <div>
        <Login/>
        <Register/>
        </div>
        )
  }
}

export default App

/* signIn = () => {
    console.log('login clicked')
    let data = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });

    axios.post(`https://localhost:8080/login`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })*!/
    fetch(`https://localhost:8080/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(resp => {
      console.log(resp);
    });
  };
*/

