import React, { Component } from 'react'
import ChildSelectedUsersListHW from '../ChildSelectedUsersListHW'
import ChildUserListHW from './../ChildUsersListHW'

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


class ParentUsersListHW extends Component {
constructor(props) {
    super(props)

    this.state = {users:dbUsers.map(u=>({...u, isSelected:false})),
    };
}

setUsers= (newUsers)=>{
    this.setState({users:newUsers});
};

    render() {
        
        return (
            <> <ChildUserListHW users={users} setUsers={this.setUsers}/>
            <ChildSelectedUsersListHW users={users}/>
            </>
        );
    }
}

export default  ParentUsersListHW