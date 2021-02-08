import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSinglePost } from "../../store/mainSlice";
import axios from 'axios'

const UpdatePost = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [img, setimg] = useState('')
const handleSubmit = (e)=>{
    e.preventDefault()
let newPost = {title, description ,img}
console.log(newPost)
axios.post('http://localhost:4000/api/posts/update/'+id, newPost)
.then(res => console.log(res))
.catch(err => console.log(err, 'error'));

}
  useEffect(() => {
    fetch("http://localhost:4000/api/posts/" + id)
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
          setUser(res.data)
          settitle(res.data.title)
          setdescription(res.data.description)
          setimg(res.data.img)
        })
      .catch((err) => console.log(err));
  }, []);

  return (
      <form onSubmit={handleSubmit}>
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
              <Col><input type="text" value={title}  name='title' onChange={(e) => settitle(e.target.value)} />
</Col>
            </Row>
            <Row>
              <Col className="col-headers">Desc</Col>
              {/* <Col>{user?.description}</Col> */}
              <Col><input type="text" value={description}  name='title' onChange={(e) => setdescription(e.target.value)} /></Col>
            </Row>
            <Row>
              <Col className="col-headers">Image</Col>
              <Col><img width={100} src={user?.img} /></Col>
            </Row>
            <Row>
              <Col><button type='submit'>Update</button></Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
    </form>
  );
};

export default UpdatePost;
