import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import About from './About';
import Concept from './Concept';
import Docs from './Docs';
import Team from './Team';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div style={{backgroundColor: "#141415", color: "white", height: "100%"}}>
				<Navbar />
				<Container fluid style={{padding:0}}>
      		<Jumbotron fluid style={{padding:0, overflow:"hidden"}}>
						<div>
							<img src={require('../images/jumbo.jpg')} alt=""/>
							<div className="jumbotext sectionHeading">UPSKILL<br/>YOURSELF</div>
						</div>
      		</Jumbotron>
					<About id="about"/>
					<Concept id="concept"/>
					<Docs id="docs"/>
					<Team id="team"/>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;