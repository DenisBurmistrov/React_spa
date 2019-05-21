import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class SignUp extends Component {
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
                                        />
                                        <MDBInput
                                            label="Your password"
                                            type="password"
                                        />
                                        <MDBInput
                                            label="Your email"
                                            type="email"
                                        />
                                        <MDBInput
                                            label="Your name"
                                            type="text"
                                        />
                                        <MDBInput
                                            label="Your last name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
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
}

export default SignUp;