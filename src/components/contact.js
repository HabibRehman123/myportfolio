import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Face from '../face.JPG';

class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
				<Cell col={6}>
					<h2>Habib Rehman</h2>
					<img src ={Face}
					alt="avatar"
					style={{height:'350px'}}
					/>
					<p style={{width:'50%', margin:'auto', paddingTop:'1em'}}>
					I appreciate you taking the time visit my personal portfolio. Please feel free to contact me, I look forward to hearing from you.
					</p>
				</Cell>
				<Cell col={6}>
					<h2>Contact Me</h2>
					<hr/>
					<div className="contact-list">
					<List>
						  <ListItem>
						    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
						    <i className="fa fa-phone-square" aria-hidden="true"/>(613)-581-4539
						    </ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
						    <i className="fa fa-envelope" aria-hidden="true"/>hrehm037@uottawa.ca</ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
						    <i className="fa fa-skype" aria-hidden="true"/>live:habib.97
						    </ListItemContent>
						  </ListItem>

					</List>
					</div>
				</Cell>		
				</Grid>
			</div>

			)
	}
}

export default Contact;