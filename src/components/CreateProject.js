import React, {Component} from 'react';
import {MDBBtn, MDBInput} from 'mdbreact';
import "../css/index.css";
import axios from "axios";

class CreateProject extends Component {

    state = {
        isOpen: this.props.defaultOpen,
        projects: this.props.projects,
        name: "default name",
        description: "default description",
        dateEnd: "2020-10-10"
    };

    render() {
        return this.state.isOpen && <div  style={{width: '50%'}}>
            <MDBInput
                className="inputs"
                label="Type project name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputName}
            />
            <MDBInput
                className="inputs"
                label="Type project description"
                type="text"
                value={this.state.description}
                onInput={this.handleInputDescription}
            />
            <br/>
            <MDBInput
                className="inputs"
                label="Type project date end"
                type="date"
                value={this.state.dateEnd}
                onInput={this.handleInputDateEnd}
            />
            <MDBBtn style={{left: 500}} color="success" onClick={this.handleAddProject}>Add project</MDBBtn>
        </div>
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        });
    }

    handleInputName = (value) => {
        console.log("name", value.target.value);
        this.setState({
            name: value.target.value
        });
    };

    handleInputDescription = (value) => {
        console.log("description", value.target.value);
        this.setState({
            description: value.target.value
        });
    };

    handleInputDateEnd = (value) => {
        console.log("dateEnd", value.target.value);
        this.setState({
            dateEnd: value.target.value
        });
    };

    handleAddProject = () => {
        let data = JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            dateEnd: this.state.dateEnd
        });

        axios.post(`http://localhost:8080/project`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .then(res => {
                this.props.handler(false)
            });
    }
}

export default CreateProject