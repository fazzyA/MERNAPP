import React from 'react'

function Add() {
    return (
        <div>
            <form>
            <label htmlFor='name'>Name</label>

            <input type='text' name='name'/>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email'/>
            <button type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default Add
