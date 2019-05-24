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

    state = {
        isAuth: false
    };

    render() {
        return (
            <HashRouter>
                {this.autorization()}
            </HashRouter>
        );
    }

    autorization(){
        if (this.state.isAuth === true)
            return<div>
                <h1 className="title">Task Manager</h1>
                <ul className="header" >
                    <li><NavLink to="/">Projects</NavLink></li>
                </ul>
                <div className="table">
                    <Route exact path="/" component={EditTable}/>
                </div>
            </div>

        else
            return <div>
                <h1 className="title">Task Manager</h1>
                <ul className="header" >
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signUp">Sign Up</NavLink></li>
                </ul>
                <div className="content">
                    <Route  path="/login" component={this.LoginComponent}/>
                    <Route path="/signUp" component={this.SignUnComponent}/>

                </div>
            </div>
    }

    LoginComponent = (props) => {
        return  <Login {...props} handlerAuth={this.handlerAuth} />
    };

    SignUnComponent = (props) => {

        return  <SignUp {...props}/>
    };

    handlerAuth = (val) => {
        this.setState({
            isAuth: val
        });
    };

}

export default Main;