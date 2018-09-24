import React from 'react';
import LandingPage from './landingpage';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import SmartBrain from './smartbrain';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
	<Switch>
	<Route exact path='/' component={LandingPage} / >
	<Route path='/contact' component={Contact} / >
	<Route path='/resume' component={Resume} / >
	<Route exact path='/projects' component={Projects} / >
	<Route exact path='/projects/Smartbrain_Frontend' component={SmartBrain} / >
	</Switch>
	)
	

export default Main;