import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom'
// import HomePage  from './pages/HomePage';

function NotFound(props) {
    const {history}=props;

    setTimeout(()=>{
        history.push('/');
    }, 5000);
    return (
        <>
        <div>
            <h1>Page 404</h1>
            <h2>Hey, nothing here!</h2>
            {/* <Router>
               <ul>
                <li><Link to={`${url}/homepage`}>Try again from Home page</Link>
                </li>
                </ul>
                <Switch>
                <Route exact path={`${path}/homepage`}><HomePage/>
                </Route>
                 </Switch>
                </Router> */}
        </div>
</>
    )
}

export default NotFound
