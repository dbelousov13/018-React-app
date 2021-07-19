import './App.css';
import React from 'react';
// import CounterHome from './components/CounterHome';
// import UserListHW from './components/UserListHW';
// import ParentUsersList from './components/ParentUsersListHW';
import HTUser from './components/HTUserlist/HTChildUsers';

//=====Hometask UserList part 1======
function App(){
        return (
        <HTUser />
        )
    }
    
    export default App



//===========userListHW

// function App(){
//     return (
//     <ParentUsersList />
//     )
// }

// export default App

//03/07/2021 Counter--------------------------------


// function App() {
//     return <CounterHome/>
// }

// export default App
//========Counter end

//---------------------------------------------------
//1. sandbox
// function App() {
//     return <Sandbox name="DiMa"/>
// }
// export default App;


//------------------------------------------------------
// class App extends Component {
// constructor(props) {
//     super(props)

//     this.state = {
//         name:"DiMa",
//         position: "JS dev",
//         isGreeting: true,
//     }
// }


//     render() {
//         const {name, position, isGreeting}=this.state;
                
//         return <Sandbox name={name} position={position} says isGreeting={isGreeting}/>;     
//     }
// }

// export default App;

//------------------------------------------------------------
// rfce
// function App() {
//   return <Calendar />;
// }
// const App = () => <ParentUsersList />;

// export default App;

// import Greeting from './components/Greeting';
// class App extends Component {
//   // rconst
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'Vasia',
//       isGreeting: true,
//     };
//   }

//   // Дописать в стейт isGreeting и передавать в пропсы

//   render() {
//     const { name, isGreeting } = this.state;
//     return <Greeting name={name} isGreeting={isGreeting} />;
//   }
// }
// //rcc

// export default App;

// function App() {
//   return <Greeting name="Vasia" />;
// }
// props = {name:"Vasia"}
// Greeting(props)
