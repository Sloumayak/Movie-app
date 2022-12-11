import React from "react";
import Card from "react-bootstrap/Card";
import ReactStars from 'react-stars'
import 'bootstrap/dist/css/bootstrap.min.css';
function MovieCard({ movies }) {
  return (
    <div>
      <Card style={{ width: "18rem" , textAlign:"center" ,margin:"5px",height:"40rem"}}>
        <Card.Img variant="top" src={movies.poster} width="100%" height="100%" />
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>
          <Card.Text>{movies.decription}</Card.Text>
          <ReactStars style={{ margin:"auto"}}
            count={5}
            size={24}
            activeColor="#ffd700"
            value={movies.rate}
            edit={false}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
