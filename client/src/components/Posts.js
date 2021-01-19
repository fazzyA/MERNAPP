import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

function Posts() {
  const [state, setstate] = useState([]);
  const [dummy, setdd] = useState([
    {name:'Faiza',email:'faz@gmail.com',id:1},
    {name:'Shehla',email:'shehla@gmail.com',id:2},
  ]);
  const [msg, setmsg] = useState('')
  const handleDelete = (id)=>{
    console.log(id)
    axios.delete('http://localhost:4000/api/posts/'+id)
    .then((res) => {
      console.log(res.data);
      setmsg(`${id} is deleted successfully`);
    })
    .catch((e) => console.log(e));


  }
  useEffect(() => {
      axios.get('http://localhost:4000/api/posts/')
      .then((res) => {
        console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <p>{msg}</p>
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
                <Col>{item.title}</Col>
                <Col>{item.description}</Col>
                <Col>
                <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/single-post/" + item._id}
                  >
                    View
                  </Button>&nbsp;
                  <Button 
                    variant="info"
                    size="sm" 
                    onClick={()=>handleDelete(item._id)}
                  >
                    Delete
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

export default Posts;
