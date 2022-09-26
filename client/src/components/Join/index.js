import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name , setName] = useState('');
    const [room, setRoom] = useState('');
    console.log(name);
    console.log(room);
    return (
        <div>
            <div>
            <h1>Join</h1>
            <div><input placeholder='Name' className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
            <div><input placeholder='Room' className='joinInput' type='text' onChange={(event) => setRoom(event.target.value)} /></div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null } to={`/main?Room=${room}&Name=${name}`}>
            <button className='button' type='submit'>Sign In</button>
            </Link>
            </div>
        </div>
    )
}

export default Join;
