import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";

const tempArr = [{
	fName: 'Joe',
	lName: 'Bloggs',
	email: 'joebloggs@gmail.com',
	age: 24,
	onlineStatus: true
}];

function App() {
	return (
		<div className="App">
			<Header/>
			<section className="main">
				<Headline header={1} desc="Click the button to render" tempArr={tempArr} />
			</section>
		</div>
	);
}

export default App;
