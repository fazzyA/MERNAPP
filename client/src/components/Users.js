import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";

function Users() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/users/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setstate(res);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    // <div className="App">
    //   {
    //     state.map((item)=>(
    //       <div key={item.id}>{item.name}</div>
    //     ))
    //   }
    // </div>
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Name</Col>
              <Col>Email</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.name}</Col>
                <Col>{item.email}</Col>
                <Col>
                  <Button
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/single-user/" + item._id}
                  >
                    View
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
}

export default Users;
