import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Professionaldev extends Component{
	render(){
		return(
			<Grid>
				<Cell col={4}>
				<p>{this.props.ProfessionaldevType}</p>
				</Cell>
				<Cell col={8}>
				<p>{this.props.ProfessionaldevDescription}</p>
				</Cell>
			</Grid>
			)
	}
}

export default Professionaldev;