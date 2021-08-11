import './App.css';
import React from 'react';
// import CounterHome from './components/CounterHome';
// import UserListHW from './components/UserListHW';
// import ParentUsersList from './components/ParentUsersListHW';
// import HTUser from './components/HTUserlist/HTChildUsers';
// import Appp from './components/Sandbox';
// import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom'
// import Greeting from './components/Greeting';
// import Counter from './components/Counter';
// import HTUser from './components/HTUserlist/HTChildUsers';
// import Stopwatch from './components/Stopwatch'
// import { func } from 'prop-types';
// import HomePage  from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ComponentsPage from './pages/ComponentsPage';
// import CantactsPage from './pages/ContactsPage';
// import NotFound from './components/NotFound';
// import CounterWrapper from './components/CounterWrapper';
// import LoginForm from './components/LoginForm';
import HTLoginForm from './components/HTLoginForm';

function App() {
    return <HTLoginForm />
}

export default App;

// function App() {
// return <LoginForm />
// }

// export default App
// ======CounterWrapper========
// function App(){
//     return <CounterWrapper />
// }

// export default App

//===== Routing ========
// function App(){
//     return (
//     <><PageHeader/>
//         <Router>
//             <ul>
//                 <li><Link to={'/'}>Home</Link>
//                 </li>
//                 <li><Link to={'/components'}>Components</Link>
//                 </li>
//                 <li><Link to={'/contacts'}>Contacts</Link>
//                 </li>
//                 <li><Link to={'/about'}>About us</Link>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path={'/'}><HomePage/></Route>
//                 <Route exact path={'/components'}><ComponentsPage/></Route>
//                 <Route exact path={'/contacts'}><CantactsPage/></Route>
//                 <Route exact path={'/about'}><AboutPage/></Route>
//                 <Route path={'*'} component={NotFound} />
                
//             </Switch>
//         </Router>
//         <PageFooter/>
//         </>
//     );
// }

// function PageHeader(){
//     return <div>Page header</div>
// }

// function PageFooter(){
//     return <div>Page footer</div>
// }



// function ComponentsPage (){
//     const {path, url} = useRouteMatch();
//     console.log(`path`, path);
//     console.log(`url`, url)
//      return <div>Components Page:
//         { <Router>
//             <ul>
//                 <li><Link to={`${url}/greeting`}>Greeting</Link>
//                 </li>
//                 <li><Link to={`${url}/counter`}>Counter</Link>
//                 </li>
//                 <li><Link to={`${url}/HTUserlist/HTChildUsers`}>Homatask UsersList</Link>
//                 </li>
//                 <li><Link to={`${url}/stopwatch`}>Stopwatch</Link>
//                 </li>
//             </ul>
//             <Switch>
//                 <Route exact path={`${path}/greeting`}><Greeting name={'DiMa'}/> <Greeting/></Route>
//                 <Route exact path={`${path}/counter`}><Counter/></Route>
//                 <Route exact path={`${path}/HTUserlist/HTChildUsers`}><HTUser/></Route>
//                 <Route exact path={`${path}/stopwatch`}><Stopwatch/></Route>
//                 <Route path={`${path}/*`}><NotFound /></Route>

//             </Switch>
//         </Router> }
//      </div>
//  }


// c




//===========end Routing ============

//======== Learning state

// function App(){
//             return (
//             <Appp />
//             )
//         }
        
//         export default App
    
//===============================



//=====Hometask UserList part 1======
// function App(){
//         return (
//         <HTUser />
//         )
//     }
    
//     export default App



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
