import React from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";

function Add() {
  const AddUser = () => {};

  return (
    // <div>
    //     <form>
    //     <label htmlFor='name'>Name</label>

    //     <input type='text' name='name'/>
    //     <label htmlFor='email'>Email</label>
    //     <input type='text' name='email'/>
    //     <button type='submit'>Add User</button>
    //     </form>
    // </div>

    <form>
      <Row className="mt-5">
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              Register New User
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Name</Col>
                <Col>
                  <input type="text" />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Email</Col>
                <Col>
                  <input type="text" />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Password</Col>
                <Col>
                  <input type="text" />
                </Col>
              </Row>
              <Row className="my-2">
                <Col className="text-center">
                  <Button variant="info" size="md" onClick={AddUser}>
                    Register User
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </form>
  );
}

export default Add;
