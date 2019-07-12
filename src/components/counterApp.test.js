import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import CounterApp from './counterApp'

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * 
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper} 
 */

const setup = (props={})=>{
    return shallow(<CounterApp {...props}/>)
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
    
});

test('clicking button increments counter display', () => {
    
});