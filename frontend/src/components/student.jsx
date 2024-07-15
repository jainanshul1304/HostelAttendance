import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
const Student = ({ stuentDetails: student }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{display:"flex",justifyContent:"center",alignItems:"center"}} id = "card">
      <Link to={`/student/${student._id}`}>
        <Image src={student.image} style={{height:"200px",width:"200px",objectFit:"cover"}}rounded fluid />
      </Link>
      <Card.Body>
        <Link to={`/student/${student._id}`}>
          <Card.Title as="div">
            <strong>{student.name}</strong>
          </Card.Title>
        </Link>

        <Row>
          <Col>Room No: {student.roomNo}</Col>
        </Row>

        <Card.Text>
          Contact:
          <a href={`tel:${student.contact}`}>{student.contact}</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Student;
