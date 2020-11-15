import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div style={{backgroundColor: "#141415", color: "white", height: "100%"}}>
					{/* <Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/TheTeam" component={TheTeam} />
					<Route path="/ContactUs" component={ContactUs} />
					<Footer /> */}
				</div>
			</Router>
		);
	}
}

export default App;