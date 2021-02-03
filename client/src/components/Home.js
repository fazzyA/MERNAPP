import React from "react";
import axios from 'axios';
import PostsUi from "./Posts/PostsUI";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

function Home() {
  const [state, setstate] = useState([]);
  const [msg, setmsg] = useState('')
  useEffect(() => {
    axios.get('http://localhost:4000/api/posts/')
      .then((res) => {
        //console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
    setmsg('')

  },[])

  return (

    <div>
      <Grid container spacing={3}>
        {state.map((item, index) => (
          <Grid item xs={12} md={6} lg={4}>
            <PostsUi item={item} index={index} />
          </Grid>
        )
        )}


      </Grid>
  
    </div>
  );

};


export default Home;
