import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Skills extends Component{
	render(){
		return(
			<Grid>
				<Cell col={12}>
				<div>
				<p>Superior computer application skills including Microsoft Excel, Word, Project, PowerPoint, Outlook, Access and Foxpro, Linux/Windows, AutoCAD, Microstation 95, JMP, MATLAB.</p>
				<p>Able to operate a plotter while following instruction with minimal supervision. </p>
				<p>Solid problem solving abilities; able to adapt client’s dynamic expectations while resolve ongoing issues.</p>
				<p>Able to operate a plotter, work on construction sites, operate cars and small trucks with minimal supervision.</p>
				<p>Superior technical, quantitative and analytical abilities gained through various engineering courses and personal interest.</p>
				<p>Able to communicate with all levels of organization, including preparing and providing presentations.</p>
				<p>Ability to use Oscilloscopes, Digital Multimeters and various other power supplies.</p>
				</div>
				</Cell>
			</Grid>
			)
	}
}

export default Skills;