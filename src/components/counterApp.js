import React, {Component} from 'react'

class CounterApp extends Component{
    state = {
        counter: 0,
        error: ''
    }

    decrementCounter = ()=>{
        const {counter} = this.state
        counter > 0 
        ? this.setState({counter: counter - 1})
        : this.setState({error: 'Error - counter cannot go below zero'})
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

                <button
                    onClick={this.decrementCounter}
                    data-test='decrement-button'
                >
                    Decrement Counter
                </button>

                <p style={{color: 'red'}} data-test='error-display'>
                    {this.state.error}
                </p>
            </section>
            </div>
        )
        }
}

export default CounterApp

