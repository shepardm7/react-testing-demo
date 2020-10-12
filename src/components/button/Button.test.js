import React from 'react';
import { findByTestAttr, checkProps } from "../../../utils";
import {shallow} from "enzyme";
import Button from "./Button";

describe('SharedButton Component', () => {
	describe('Checking PropTypes', () => {
		it('Should NOT throw warning', () => {
			const expectedProps = {
				buttonText: 'Example',
				emitEvent: () => {}
			};
			
			const propsError = checkProps(Button, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});
	
	describe('Renders', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				buttonText: 'Example Button Text',
				emitEvent: () => {
				
				}
			}
			wrapper = shallow(<Button />);
		});
		
		it('Should Render a button', () => {
			const button = findByTestAttr(wrapper, 'buttonComponent');
			expect(button.length).toBe(1);
		});
		
	})
})
