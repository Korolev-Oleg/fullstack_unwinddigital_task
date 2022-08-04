import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import logo from "../logo.svg";

export default class MainNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br/>
      </>
    );
  }
}
