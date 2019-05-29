import React, {Component} from 'react';
import {MDBBtn, MDBInput} from 'mdbreact';
import Select from 'react-select'
import "../../css/index.css";
import axios from "axios";

class CreateTask extends Component {

    state = {
        isOpen: this.props.defaultOpen,
        tasks: this.props.tasks,
        dateEnd: this.props.defaultDateEnd,
        name: "",
        description: "",
        selectedValue: ""
    };

    render() {
        return this.state.isOpen && <div  style={{width: '50%'}}>
            <MDBInput
                className="inputs"
                label="Type task name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputName}
            />
            <MDBInput
                className="inputs"
                label="Type task description"
                type="text"
                value={this.state.description}
                onInput={this.handleInputDescription}
            />
            <br/>
            <MDBInput
                className="inputs"
                label="Type task date end"
                type="date"
                value={this.state.dateEnd}
                onInput={this.handleInputDateEnd}
            />
            <Select options={this.props.projectIds} onChange={this.handleSelect} placeholder={'Select project id'}/>
            <MDBBtn style={{left: 600}} color="success" onClick={this.handleAddTask}>Add Task</MDBBtn>
        </div>
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        });
    }

    handleInputName = (value) => {
        this.setState({
            name: value.target.value
        });
    };

    handleInputDescription = (value) => {
        this.setState({
            description: value.target.value
        });
    };

    handleInputDateEnd = (value) => {
        this.setState({
            dateEnd: value.target.value
        });
    };

    handleAddTask = () => {
        let data = JSON.stringify({
            projectId: this.state.selectedValue,
            name: this.state.name,
            description: this.state.description,
            dateEnd: this.state.dateEnd
        });

        axios.post(`http://localhost:8080/api/task`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .then(res => {
                this.props.handlerAddTask(false)
            });
    };

    handleSelect = (value) =>{
        this.setState({
            selectedValue: value.value
        })
    };

    getProjects = () => {

    };

    componentDidMount(): void {
        this.getProjects();
    }
}
export default CreateTask