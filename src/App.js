import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import {useDispatch, useSelector} from "react-redux";
import ListItem from "./components/list-item/ListItem";
import Button from "./components/button/Button";
import {fetchPosts} from "./state/posts/PostActions";

const tempArr = [{
	fName: 'Joe',
	lName: 'Bloggs',
	email: 'joebloggs@gmail.com',
	age: 24,
	onlineStatus: true
}];

function App() {
	const dispatch = useDispatch();
	const posts = useSelector(s => s.posts);
	
	const handleFetchPosts = async () => {
		dispatch(fetchPosts());
	};
	
	return (
		<div className="App">
			<Header/>
			<section className="main">
				<Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
				<Button buttonText="Get Posts" emitEvent={handleFetchPosts} />
				{posts.map(post => (
					<ListItem key={post.id} title={post.title} desc={post.body} />
				))}
			</section>
		</div>
	);
}

export default App;
