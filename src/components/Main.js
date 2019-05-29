import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import ProjectTable from "./projectTable/ProjectTable";
import TaskTable from "./taskTable/TaskTable";
import SignUp from "./signUp/SignUp";
import Login from "./login/Login";
import axios from "axios";

class Main extends Component {

    state = {
        isAuth: false,
        projectIds: []
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
                    <li><NavLink to="/tasks">Tasks</NavLink></li>
                </ul>
                <div className="table">
                    <Route exact path="/" component={this.ProjectTableComponent}/>
                    <Route exact path="/tasks" component={this.TaskTableComponent}/>
                </div>
            </div>;

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
        return  <Login {...props} handlerAuth={this.handlerAuth} getProjectIds={this.getProjectsId}/>
    };


    TaskTableComponent = (props) => {
        return  <TaskTable {...props} handlerAuth={this.handlerAuth} projectIds={this.state.projectIds} />
    };

    ProjectTableComponent = (props) => {
        return  <ProjectTable {...props} getProjectIds={this.getProjectsId}/>
    };


    SignUnComponent = (props) => {
        return  <SignUp {...props}/>
    };

    handlerAuth = (val) => {
        this.setState({
            isAuth: val
        });
    };

    getProjectsId = () => {
        axios.get(`http://localhost:8080/api/project/list`).then(res => {
            const projectIds = [
            ];

            res.data.forEach(function(element) {
                const obj = {
                    value: element.id,
                    label: element.id
                };
                projectIds.push(obj);
            });

            this.setState({
                projectIds: projectIds
            });
        })
    };

}

export default Main;