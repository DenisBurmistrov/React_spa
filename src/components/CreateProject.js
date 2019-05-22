import React, {Component} from 'react';
import {MDBBtn, MDBInput} from 'mdbreact';
import "../css/index.css";

class CreateProject extends Component {

    state = {
        isOpen: this.props.defaultOpen,
        projects: this.props.projects
    };

    render() {
        return this.state.isOpen && <div style={{width: '50%'}}>
            <MDBInput
                className="inputs"
                label="Type project name"
                type="text"
            />
            <MDBInput
                className="inputs"
                label="Type project description"
                type="text"
            />
            <br/>
            <MDBInput
                className="inputs"
                label="Type project date end"
                type="date"
            />
            <MDBBtn style={{left: 500}} color="success">Add project</MDBBtn>
        </div>
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        });
    }
}

export default CreateProject