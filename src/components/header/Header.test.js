import React from "react";
import { shallow } from 'enzyme';
import Header from './Header';
import {findByTestAttr} from "../../../utils";

const setUp = (props={}) => {
	return shallow(<Header {...props}/>);
};

describe('Header Component', () => {
	
	let component;
	beforeEach(() => {
		component = setUp();
	});
	
	it('It should render without errors', () => {
		// console.log(component.debug());
		const wrapper = findByTestAttr(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	});
	
	it('Should render a logo', () => {
		const logo = findByTestAttr(component, 'logoIMG');
		expect(logo.length).toBe(1);
	});
});
