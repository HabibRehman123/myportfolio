import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content, Header } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div className="demo-big-content">
    <Layout>
        <Header className= "header-color" title="Habib Rehman" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className= "drawer-style" style= {{color: 'black'}} title="My Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    
    </Layout>
    </div>
    );
  }
}

export default App;
