import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Face from '../face.JPG';


class Landing extends Component{
	render(){
		return(
			<div style={{width:'100%', margin: 'auto'}}>
				<Grid className= 'landing-grid'>
					<Cell col={12}>
						<div className="icon">
						<img 
						src={Face}
						alt="avatar"
						className="avatar-image"
						style={{height:'400px', width:'auto'}}
						/>
						</div>
					<div className="banner-text">
						<h1> Full Stack Web Developer</h1>
						<hr/>
						<p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | PostgresQL </p>
						
						<div className="social-links">
						{/* Linked In*/}
							<a href="https://www.linkedin.com/in/habib-rehman-0a7142122/" rel= "noopener noreferrer" target="_blank">
							<i className="fa fa-linkedin-square card-transition" aria-hidden="true"/> 
							</a>
					
						{/* GitHub*/}
							<a href="https://github.com/HabibRehman123" rel= "noopener noreferrer" target="_blank">
							<i className="fa fa-github-square card-transition" aria-hidden="true"/> 
							</a>
						
						{/* Email */}
							<a href="mailto:hrehm037@uottawa.ca">
							<i className="fa fa-envelope card-transition" aria-hidden="true"/> 
							</a>
						</div>

					</div>
					</Cell>
				</Grid>
			</div>

			)
	}
}

export default Landing;