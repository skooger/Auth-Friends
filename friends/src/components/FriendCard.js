import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default props => {
    const [friend, setFriend] = useState({});

    const deleteFriend = () => {
        axiosWithAuth()
            .delete(`/api/friends/${props.data.id}`)
            .then(res => {
                props.setData(res.data);
            }).catch(err => console.log(err));
    }

   /* const changeFriend = () => {
        //Make put request
        axiosWithAuth()
            .put(`/api/friends/${props.data.id}`, friend)
            .then(res => {
                props.setData(res.data);
            }).catch(err => console.log(err));
    }

    const handleChange = e => {
        setFriend({
            [e.target.name]: e.target.value
        })
    }*/


    return (
        <div>
            <h3>{props.data.name}</h3>
            <p>email: {props.data.email}</p>
            <p>Age: {props.data.age}</p>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    );
} 