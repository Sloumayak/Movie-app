import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from 'react-stars'
import Modal from 'react-bootstrap/Modal'
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import AddFilm from "./AddFilm";
function Header({ searchForFIlm, search, setRate,addFilm }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    searchForFIlm(text);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            onChange={ratingChanged}
            edit={true}
          />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
          <Button variant="primary" onClick={handleShow}>
            Add Film
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <AddFilm addFilm={addFilm}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
