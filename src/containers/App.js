import React, { Component } from 'react';
import './App.css';
// import ProfileCardList from '../components/ProfileCardList';
import ProfileCard from '../components/ProfileCard';

class App extends Component {
	constructor() {
		super();
		this.state = {
			info: [],
			urls: []
		};
	}

	componentDidMount() {
		fetch('https://swapi.co/api/').then((resp) => resp.json()).then((data) => this.setState({ urls: data }));
	}

	render() {
		console.log(this.state.urls);
		return (
			<div className="tc">
				<h1 className="f2">Star Wars</h1>
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
				<ProfileCard props={this.state.urls.people} />
			</div>
		);
	}
}

export default App;
