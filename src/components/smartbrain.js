import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import smartbrainimg from '../smartbrainimg.png';
import smartbrainsignin from '../smartbrainsignin.png';

class Smartbrain extends Component{
	render(){
		return(
		<div>
			<Grid className= "Smartbrain-grid">
			<Cell col={8}>
			<div className="Smartbrain-leftcol">
			<img src ={smartbrainimg}
					alt="avatar"
					style={{height:'300px'}}
					/>				
			<img src ={smartbrainsignin}
					alt="avatar"
					style={{height:'300px'}}
					/>	

			</div>
			</Cell>
			<Cell col={4}>
			<div className="Smartbrain-rightcol">
			<h2>Smartbrain</h2>
			<hr/>
			<p>Front end of Face detection web application that accepts an image URL and boxes faces by using Face Detection API built from React, Javscript, HTML and CSS.</p>
			</div>
			</Cell>
			</Grid>
		</div>

			)
	}
}

export default Smartbrain;