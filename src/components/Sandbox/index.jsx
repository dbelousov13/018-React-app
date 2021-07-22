
//=======================================
// import React from 'react'

// function Sandbox(props) {
//     const {name, position, isGreeting}=props;
//     return (
//         <div>
//             {name} with position {position} says {isGreeting?"Hello":"Goodbye"}
//         </div>
//     )
// }

// export default Sandbox 

//=======================================
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

//=======================================

import closestIndexTo from 'date-fns/closestIndexTo/index.js';
import React, { Component } from 'react'

class Appp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[42,33,68],
        };
    }
    
onUpdateItems =i=>{
    this.setState(state=>{
        const list=state.list.map((item,j)=> {
            if (j===i) {
                return item+1;
            } else {
                return item;
            }
        });
        return {
            list,
        };
    });
};

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index)=>(
                        <li key={item}>
                            The person is {item} years old.
                         <button type="button" onClick={()=>this.onUpdateItems(index)}
                         >
                        Make me one year older
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Appp