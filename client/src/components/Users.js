import {useEffect, useState} from 'react'

function Users() {
  const [state, setstate] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:4000/api/users/`)
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      setstate(res)
    })
    .catch(e=>console.log(e))
  }, [])
  return (
    <div className="App">
      {
        state.map((item)=>(
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  ); 
}

export default Users
