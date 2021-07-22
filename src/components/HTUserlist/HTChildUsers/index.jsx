import React, { Component} from 'react';
import styles from './htChildUsers.module.scss';
// import HTChildUsersTempList from './HTChildUsersTempList';

const Users = [
    {
        id: 1,
        firstName: 'Имя Юзера 1',
        lastName: 'Фамимлия Юзера 1',
        age: 15,
        imgSrc: <img src="https://postium.ru/wp-content/uploads/2019/03/chto-napisat-o-sebe-v-instagram-696x353.jpg"></img>,
        
    },
    {
        id: 3,
        firstName: 'Имя Юзера 3',
        lastName: 'Фамимлия Юзера 3',
        age: 36,
        imgSrc: <img src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" alt="user 3 foto"></img>,
        
    },
    {
        id: 22,
        firstName: 'Имя Юзера 22',
        lastName: 'Фамимлия Юзера 22',
        age: 65,
        imgSrc: <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="user 22 foto"></img>,
    },
    
]

class HTUser extends Component {
    
    constructor(props) {
        super(props)
            this.state = {
           users:Users.map(u=>({...u, likesCount: 2}))
            
        }
        console.dir(Users)
    };
            
    mapReceivedUsers=(user, index)=> {
        const {users}=this.state;
        const likesHandler=()=>{
            
            const newUsers=[...users];
            newUsers[index].likesCount=newUsers[index].likesCount+1;
            this.setState({users:newUsers});
        }
        const ageHandler=()=>{
            const newUsers=[...users];
            newUsers[index].age=newUsers[index].age+1;
            this.setState({users:newUsers});
        }


    // неужели если я хочу менять другое свойство мне нужно снова переписывать две одинаковые строки (  const newUsers=[...users]; this.setState({users:newUsers});) или это можно как-то упростить?

        return <li key={index}> 
            {user.imgSrc} 
            ID:{user.id},
            Name: {user.firstName},
            Surname: {user.lastName}, <br></br>
            Age: {user.age}, 
            <button onClick={ageHandler}>Make me older</button><br></br>
            Likes: {user.likesCount}. 
                <button onClick={likesHandler}>
                    &#10084;
                </button>
        </li>
   };
    
    render() {
        const {users}=this.state;
               return (
            <>
                <ul>
                    {users.map(this.mapReceivedUsers)}
                </ul>
                
            </>)
            
    }       
}

export default HTUser

