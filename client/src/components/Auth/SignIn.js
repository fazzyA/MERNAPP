import React, { useState, useEffect } from 'react'
import { Grid, TextField, Typography, Button} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Signin() {

    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    
    const history = useHistory();
    // to check single user and no repeat
    const [unique, setUnique] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {email, pwd};
        // console.log(user)
            axios.post('http://localhost:4000/api/users/login', user)
            .then(res => {
                console.log(res.data.data);
                console.log('login successful')
                localStorage.setItem('userData', JSON.stringify(res.data.data))

              //  history.push('/')
            })
            .catch(err=>console.log(err,'error'));
    }


    return (
        <div>
            <Grid container spacing={3}>
                
                <Grid item xs={1} md={2} lg={3}>
                </Grid>
                {/* {unique ? <span>Login sucessful</span> : <span>Login failed</span>} */}
                <Grid item xs={10} md={8} lg={6} className='form-container' >
                    <Typography variant='h4' className='title' >Sign In</Typography>
                    <form className='signup-form' onSubmit={handleSubmit}>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item sm={1} md={1}>
                            <EmailIcon className='icon' />
                        </Grid>
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield'  label="Email"
                            onChange={(e)=>setEmail(e.target.value)} />
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item sm={1} md={1}>
                            <LockIcon className='icon' />
                        </Grid>
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield' label="Password" type='password'  
                            onChange={(e)=>setPwd(e.target.value)} />
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                           <Button type='submit' variant='contained' className='submit'>Sign in</Button>
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                            Don't have an account? Sign up <a href=''>here</a>
                        </Grid>
                    </Grid>

                    </form>
                </Grid>
                
                <Grid item xs={1} md={2} lg={3}>
                </Grid>

            </Grid>

        </div>
    )
}

export default Signin