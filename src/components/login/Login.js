import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import axios from "axios/index";

class Login extends Component {


    state: {
        projectIds: [],
        username: "",
        password: ""
    };
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3 grey lighten-2">
                                <MDBRow className="d-flex justify-content-start">
                                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                        Log in
                                    </h3>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <MDBInput label="Your username" group type="text"
                                          onChange={this.handleInputUsername}/>
                                <MDBInput
                                    label="Your password"
                                    group
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                    onChange={this.handleInputPassword}
                                />
                                <div className="text-center mb-4 mt-5">
                                    <MDBBtn
                                        color="danger"
                                        type="button"
                                        className="btn-block z-depth-2"
                                        onClick={this.handlerLogin}
                                    >
                                        Log in
                                    </MDBBtn>
                                </div>
                                <p className="font-small grey-text d-flex justify-content-center">
                                    Don't have an account?
                                    <a
                                        href="#/signUp"
                                        className="dark-grey-text font-weight-bold ml-1"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    };

    handlerLogin = () => {
        this.props.getProjectIds();
        let data = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        });

        axios.post(`http://localhost:8080/auth`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .then(res => {
                if(res.status === 200) {
                    this.props.handlerAuth(true);
                }

            });
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

}
export default Login;