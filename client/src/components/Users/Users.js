import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllPosts } from "../../store/apis";
import DeleteModal from "../subComponents/DeleteModal";
import { useHistory } from 'react-router-dom'

function Users() {
  const [state, setstate] = useState([]);
  const history = useHistory();

  const dispatch = useDispatch()
  // const [dummy, setdd] = useState([
  //   {name:'Faiza',email:'faz@gmail.com',id:1},
  //   {name:'Shehla',email:'shehla@gmail.com',id:2},
    const [msg, setmsg] = useState('')

  const handleDelete = (id)=>{
    console.log(id)
    axios.delete('http://localhost:4000/api/users/'+id)
    .then((res) => {

      console.log(res.data);

      // console.log(res.data);

      setmsg(`${id} is deleted successfully`);
       history.push('/users')

    })
    .catch((e) => console.log(e));


  }
  useEffect(() => {
    console.log('i am in useeffect of users')
      axios.get('http://localhost:4000/api/users/')
      .then((res) => {
        console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, [dispatch]);
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

          {state.map((item,ind) => (
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

                  </Button>&nbsp;
                  <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/update-user/" + item._id}
                  >
                    Edit
                  </Button>&nbsp;
                  <DeleteModal handleDelete={handleDelete} id={item._id}/>

                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
        {/* </Col> */}
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      
    </Row>
  );
  }
  export default Users;

