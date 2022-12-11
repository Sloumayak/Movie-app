import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function AddFilm({addFilm}) {
  const [newFilm, setNewFilm] = useState({
    id: "",
    title: "",
    poster: "",
    decription: "",
    rate: 0,
  });
  const handleChange = (e) => {
    setNewFilm({
      ...newFilm,
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    let x ={...newFilm,id:newFilm.id.toString(),rate:+newFilm.rate}
    setNewFilm(x)
    addFilm(newFilm)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your movie name"
          name="title"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>decription</Form.Label>
        <Form.Control
          type="text"
          placeholder="decription"
          name="decription"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="number"
          name="rate"
          min={1}
          max={5}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>poster</Form.Label>
        <Form.Control
          type="text"
          placeholder="image"
          name="poster"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddFilm;
