import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import EditTable from "./EditTable";
import SignUp from "./SignUp";
import Login from "./Login";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 className="title">Task Manager</h1>
                    <ul className="header" >
                        <li><NavLink to="/">Projects</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signUp">Sign Up</NavLink></li>
                    </ul>
                    <div className="table">
                        <Route exact path="/" component={EditTable}/>
                    </div>
                    <div className="content">
                        <Route path="/login" component={Login}/>
                        <Route path="/signUp" component={SignUp}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;