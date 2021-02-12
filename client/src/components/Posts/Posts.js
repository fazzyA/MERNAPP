import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import DeleteModal from "../subComponents/DeleteModal";
import { useHistory } from 'react-router-dom'
import PostTable from "../Tables/PostTable";

function Posts() {
  const [state, setstate] = useState([]);
  const history = useHistory();

const dispatch = useDispatch()
  const [msg, setmsg] = useState('')
  const [reload, setreload] = useState(false)

  const handleDelete = (id)=>{
    console.log(id)
    axios.delete('http://localhost:4000/api/posts/'+id)
    .then((res) => {
      console.log(res.data);
      setmsg(`${id} is deleted successfully`);
      setreload(!reload)

    })
    .catch((e) => console.log(e));

  }
  useEffect(() => {
console.log('i am in useeffect of posts')
      axios.get('http://localhost:4000/api/posts/')
      .then((res) => {
        console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
      setmsg('')
  }, [reload]);
  return (
    <PostTable posts={state} />
    
  );
}

export default Posts;
