import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import CounterApp from './counterApp'

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * 
 * @function setup
 * @param {object} props 
 * @param {Object} state
 * @returns {ShallowWrapper} 
 */

const setup = (props={}, state=null)=>{
    const wrapper = shallow(<CounterApp {...props}/>)
    if(state){
        wrapper.setState(state)
    }

    return wrapper
}
/**
 *@param {ShallowWrapper} wrapper
 *@param {String} val
 @returns {ShallowWrapper}  
*/
const findByTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error', () => {
    const wrapper = setup()

    const appComponent = findByTestAttr(wrapper, 'counter-component')
    expect(appComponent.length).toBe(1)
});

test('renders Increment Button', ()=>{
    const wrapper = setup()

    const appButton = findByTestAttr(wrapper, 'increment-button')
    expect(appButton.length).toBe(1)
})

test('renders counter display', () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
    const wrapper = setup()
    const initialState = wrapper.state('counter')

    expect(initialState).toBe(0)
});

test('clicking button increments counter display', () => {
    const counter = 5
    const wrapper = setup(null, {counter})
    const appButton = findByTestAttr(wrapper, 'increment-button')
    appButton.simulate('click')
    wrapper.update()
    
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
});

test('clicking decrement button decrements counter display', () => {
    const counter = 5
    const wrapper = setup(null, {counter})

    const decremenButton = findByTestAttr(wrapper, 'decrement-button')
    
    decremenButton.simulate('click')
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter - 1)
});

test('State should not go below zero', () => {
    const counter = 0
    const wrapper = setup(null, {counter})

    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(0)
    
});