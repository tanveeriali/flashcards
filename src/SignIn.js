import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { Col, Row, Container } from "react-bootstrap";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

// Configure FirebaseUI.

class SignIn extends React.Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        setTimeout(this.props.history.push("/home"), 1000);
      },
    },
  };

  render() {
    if (!this.props.isSignedIn) {
      return (
        <Container fluid className="login">
          <div id="welcome">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Welcome to BrainKwik</title>
            </Helmet>
            <FontAwesomeIcon icon={faBrain} size="lg" />
            <h2>Welcome to BrainKwik</h2>

            <h3>Learn, memorize and impress people in a flash</h3>
            <FontAwesomeIcon icon={faBrain} size="lg" />
          </div>
          <div id="login">
            <Row className={`justify-content-center`}>
              <Col className={`h-100`} md={6} xs={12} lg={6} xl={6}>
                <h4>Please sign-in</h4>
              </Col>
            </Row>
            <Row className={`justify-content-center`}>
              <Col className={`h-100`} md={6} xs={12} lg={6} xl={6}>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </Col>
            </Row>
          </div>
        </Container>
      );
    } else {
      return <></>;
    }
  }
}

export default SignIn;
