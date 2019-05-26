import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from "axios/index";

class SignUp extends Component {

    state = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">Sign up</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Your username"
                                            type="text"
                                            value={this.state.username}
                                            onChange={this.handleInputUsername}
                                        />
                                        <MDBInput
                                            label="Your password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleInputPassword}
                                        />
                                        <MDBInput
                                            label="Your email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.handleInputEmail}
                                        />
                                        <MDBInput
                                            label="Your first name"
                                            type="text"
                                            value={this.state.firstName}
                                            onChange={this.handleInputFirstName}
                                        />
                                        <MDBInput
                                            label="Your last name"
                                            type="text"
                                            value={this.state.lastName}
                                            onChange={this.handleInputLastName}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit" onClick={this.handlerSignUp}>
                                            Register
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };

    handleInputUsername = (value) => {
        this.setState({
            username: value.target.value
        });
    };

    handleInputPassword = (value) => {
        this.setState({
            password: value.target.value
        });
    };

    handleInputEmail = (value) => {
        this.setState({
            email: value.target.value
        });
    };

    handleInputFirstName = (value) => {
        this.setState({
            firstName: value.target.value
        });
    };

    handleInputLastName = (value) => {
        this.setState({
            lastName: value.target.value
        });
    };

    handlerSignUp = () => {
        let data = JSON.stringify({
            login: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });

        axios.post(`http://localhost:8080/user/signUp`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .then(res => {
                console.log(res);
                this.setState({
                    username: '',
                    password: '',
                    email: '',
                    firstName: '',
                    lastName: ''
                })
            });
    }
}

export default SignUp;