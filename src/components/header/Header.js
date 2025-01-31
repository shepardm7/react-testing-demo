import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.jpg';

export default (props) => {
	return (
		<header data-test="headerComponent">
			<div className="wrap">
				<div className="logo">
					<img data-test="logoIMG" src={Logo} alt="Logo"/>
				</div>
			</div>
		</header>
	)
}
