import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSinglePost } from "../../store/mainSlice";

const SinglePost = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("http://localhost:4000/api/posts/" + id)
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
          setUser(res.data)
        })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary" className="col-headers">
            Posts
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Row>
              <Col className="col-headers">ID</Col>
              <Col>{user?._id}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Title</Col>
              <Col>{user?.title}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Desc</Col>
              <Col>{user?.description}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Image</Col>
              <Col><img width={100} src={user?.img} /></Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
};

export default SinglePost;
