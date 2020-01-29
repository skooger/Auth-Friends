import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setIsLoading(true);
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <FriendForm setData={setData} />
            {!isLoading && data.map(friend => <FriendCard key={friend.id} setData={setData} data={friend} />)}
        </div>
    );
} 