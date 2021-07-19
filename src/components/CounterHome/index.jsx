import React, { Component } from 'react'

class CounterHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0,
        };
        // this.increment=this.increment.bind(this); не нужно, потому что написали стрелочную функцию
    }
    
increment = ()=>{
    console.log(`this.increment`, this.state.counter)
    // this.state.counter++; // убираем потому что дописали +1 в setState({counter:this.state.counter +1 
    this.setState({counter:this.state.counter +1});
}
decrement=()=> {
    this.setState({counter:this.state.counter-1})
}

    render() {
       const {counter}=this.state; 
       return (
            <>
            <div>
                {counter}
            </div>
            <button onClick={this.decrement}>-</button >
            <button onClick={this.increment}> +</button>
            </>
        );
    }
}

export default  CounterHome