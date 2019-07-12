import React from 'react'

function CounterApp(){
    return(
        <div data-test="counter-component"> 
        <section>
            <h1 data-test='counter-display'>
            Counter App
            </h1>

            <button data-test='increment-button'>
            Update Counter
            </button>
        </section>
        </div>
    )
}

export default CounterApp

