import React, {Component} from 'react'

class CounterApp extends Component{
    state = {
        counter: 0
    }
    render(){
        return(
            <div data-test="counter-component"> 
            <section>
                <h1 data-test='counter-display'>
                The counter is {this.state.counter}
                </h1>

                <button
                    onClick={()=>this.setState({counter: this.state.counter+1})} 
                    data-test='increment-button'
                >
                Update Counter
                </button>
            </section>
            </div>
        )
        }
}

export default CounterApp

