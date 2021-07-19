import React, { Component } from 'react'
import UsersListItemHW from './UsersListItemHW';

const dbUsers =[
    {
        id: 1,
        firstName: "username1",
        lastName: "lastName1",
    },
    {
        id: 10,
        firstName: "username2",
        lastName: "lastName2",
    
    },
    {
        id: 3,
        firstName: "username3",
        lastName: "lastName3",
    
    },
    {
        id: 4,
        firstName: "username34",
        lastName: "lastName4",
    
    },
];

class UserListHW extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users:dbUsers.map(u=>({...u, isSelected:false}))            
      };
      this.isSortAsc=true;
    }
    
    sortUsers = ()=> {
        const {users}=this.state;
        const newUsers = users.sort((a,b)=>{
            if(a.id<b.id){
                return this.isSortAsc? -1:1;
            }
            if(a.id>b.id){
                return this.isSortAsc? 1:-1;
            }
            return 0;
           
        });
        this.setState({users:newUsers});
        this.isSortAsc=!this.isSortAsc;
    };

   mapUser=(user, index)=> {
    const {users}=this.state;
    const onClickHandler = ()=>{
     const newUsers=[...users];
     newUsers[index].isSelected=!newUsers[index].isSelected;
     this.setState({users:newUsers});
};

   return (<UsersListItemHW key={user.id} user={user} onClickHandler={onClickHandler} />);
};

    render() {
        const { users } = this.state;
        return (<>
        <button onClick={this.sortUsers}>Sort</button>
            <ul>{users.map(this.mapUser)}</ul>
            </>);
    }
}

export default  UserListHW;