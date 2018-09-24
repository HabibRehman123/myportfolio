import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

// import SmartBrain from './Smart-Brain.png';


class Projects extends Component{
	constructor(props){
	super(props);
	this.state={activeTab:0};
	}

	toggleCategories() {
		if(this.state.activeTab===0){
			return(
			<div className="cards-style">
				 {/*<Link to="/projects/Smartbrain_Frontend"> */}
					<Card className="card-transition" shadow={10} style = {{minwidth:'450', margin:'auto'}}>
					<CardTitle className="card-title1" style={{color:'white'}}>
						SmartBrain Front End 
					</CardTitle>
					<CardText>Front end of Face detection web application that accepts an image URL and boxes faces by using Face Detection API built from React, Javscript, HTML and CSS.</CardText>
					<CardActions border>
					<a href="https://github.com/HabibRehman123/smartbrain-frontend" rel= "noopener noreferrer" target="_blank">
						<Button colored>GitHub</Button>
					</a>
						<Button colored>LiveDemo</Button>
					</CardActions>
					</Card>
				{/*</Link>*/}

				<Card className="card-transition" shadow={10} style = {{minwidth:'450', margin:'auto'}}>
					<CardTitle className="card-title2" style={{color:'white'}}>
						RoboSearch
					</CardTitle>
					<CardText>
					Application built from React, CSS, HTML and Javascript that can access, search and filter data while updating the live view based on input given in from the user.</CardText>
				<CardActions border>
				<a href="https://github.com/HabibRehman123/robosearch" rel= "noopener noreferrer" target="_blank">
					<Button colored>GitHub</Button>
					</a>
					<a href="https://robo-habib.firebaseapp.com/" rel= "noopener noreferrer" target="_blank">
					<Button colored>LiveDemo</Button>
					</a>
				</CardActions>	
				</Card>

				<Card className="card-transition" shadow={10} style = {{minwidth:'450', margin:'auto'}}>
					<CardTitle className="card-title3" style={{color:'white'}}>
						My Portfolio 
					</CardTitle>
					<CardText>
					My personal portfolio web application built from React, Javascript, CSS and HTML used to showcase personal projects, resume and front end web development abilities.
					</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
				<Link to="/">
					<Button colored>LiveDemo</Button>
				</Link>
				</CardActions>
				</Card>
			</div>
				)
		}
		else if(this.state.activeTab===1){
			return(
			<div className="cards-style">
				<Card className="card-transition" shadow={5} style = {{minwidth:'450', margin:'auto'}}>
					<CardTitle  className="card-title1" style={{color:'white'}}>
						SmartBrain Backend Server
					</CardTitle>
					<CardText>Making use of PostgresQL relational database. Backend of SmartBrain Application that securely stores users and passwords as well as allowing new users to create accounts and sign in their specific accounts.</CardText>
				<CardActions border>
					<a href="https://github.com/HabibRehman123/smart-brainAPI" rel= "noopener noreferrer" target="_blank">
					<Button colored>GitHub</Button>
					</a>
					<Button colored>LiveDemo</Button>
				</CardActions>
				</Card>
			</div>
				)
		}
	}

	render(){
		return(
			<div className="category-tabs">
			<Tabs className="tab-color" activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
				<Tab>React</Tab>
				<Tab>PostgresQL</Tab>
			</Tabs>
			<section className="projects-grid">
				<Grid className="projects-grid">
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</section>
			</div>

			)
	}
}

export default Projects;