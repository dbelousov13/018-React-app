import React, { Component } from 'react';
import styles from './htChildUsers.module.scss';

class HTUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            receivedUsers: [
                {
                    id: 1,
                    firstName: 'Имя Юзера 1',
                    lastName: 'Фамимлия Юзера 1',
                    age: "15",
                    imgSrc: <img src="https://postium.ru/wp-content/uploads/2019/03/chto-napisat-o-sebe-v-instagram-696x353.jpg"></img>,
                    likesCount: "0",
                },
                {
                    id: 3,
                    firstName: 'Имя Юзера 3',
                    lastName: 'Фамимлия Юзера 3',
                    age: "36",
                    imgSrc: <img src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="user 3 foto"></img>,
                    likesCount: "0",
                },
                {
                    id: 22,
                    firstName: 'Имя Юзера 22',
                    lastName: 'Фамимлия Юзера 22',
                    age: "65",
                    imgSrc: <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="user 22 foto"></img>,
                    likesCount: "0",
                },
                
            ]
        }
    }
    

    

    mapReceivedUsers=(user, index)=><li key={index}> {user.imgSrc} ID:'{user.id}', Name: '{user.firstName}', Surname: '{user.lastName}', Age: '{user.age}'</li>;
    
    render() {
        const {receivedUsers}=this.state;
        const likes= <button>btn</button>

        return (
            <ul class="mainUL">
                {receivedUsers.map(this.mapReceivedUsers)} 
            </ul>);
            
    }
}

export default HTUser



