import React from 'react'

function Sandbox(props) {
    const {name, position, isGreeting}=props;
    return (
        <div>
            {name} with position {position} says {isGreeting?"Hello":"Goodbye"}
        </div>
    )
}

export default Sandbox 
//rfce

// import React, { Component } from 'react'

// class index extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default  index