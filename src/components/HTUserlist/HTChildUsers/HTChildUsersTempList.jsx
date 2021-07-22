import React from 'react'

function HTChildUsersTempList(props) {
    const {user: {id, firstName, lastName, age, imgSrc}, likesCount,}=props;
    return (
        <li key={index}>{user.imgSrc} ID:{user.id}, Name: {user.firstName}, Surname: {user.lastName}, Age: {user.age}, Likes: {user.likesCount} <button onClick={likesHandler}>+1</button>
        </li>

        
    );
}

export default HTChildUsersTempList;
