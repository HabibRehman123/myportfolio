import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Professionaldev from './professionaldev';
import Face from '../face.JPG';

class Resume extends Component{
	render(){
		return(
			<div>
			<Grid className="resume-grid">
				<Cell col={4}> 
				<div className="resume-left-col">
				<div style={{textAlign:'center'}}>
				<img src= {Face} 
				alt="avatar"
				style={{height:'300px', width:'auto'}}/>
				</div>
				<h2 style={{paddingTop:'2em', textAlign:'center'}}>Habib Rehman</h2>
				<h4 style={{color:'grey', textAlign:'center'}}>Programmer</h4>
				<hr style={{borderTop:'3px solid #e22947', width:'50%'}}/>
				<h5>About Me</h5>
				<p style={{width:'100%'}}>
				I am currently a fourth-year electrical engineering student at the University of Ottawa with a proven track record of academic excellence and a passion for developing and implementing novel solutions to challenging problems. My thorough knowledge of core electrical engineering concepts, years of experience in laboratory work coupled with execution of multiple complex and rigorous engineering projects has fostered my development into a dynamic, resilient and detail oriented individual. My keen interest in continuous education and personal development has cultivated an interest in software and web development in addition to electrical engineering. I’m trained on langauges such as Java, C, HTML, CSS, Javascript and React, and continuously complete a host of software projects to showcase and expand my skill-set.
				</p>
				<hr style={{borderTop:'3px solid #e22947', width:'50%'}}/>
				<h5>Address</h5>
				<p>123 Marrissa Ave, Ottawa On.</p>
				<h5>Phone</h5>
				<p>(613)-581-4539</p>
				<h5>Email</h5>
				<p>habib.97@hotmail.com</p>
				<h5>Web</h5>
				<p>https://hrehman-portfolio.firebaseapp.com/</p>
				<hr style={{borderTop:'3px solid #e22947', width:'50%'}}/>
				</div>
				</Cell>
				

				<Cell className="resume-right-col" col={8}>
				
				<h2>Education</h2>
				<Education startYear={2015} 
				endYear={2019} 
				schoolName="University of Ottawa" 
				schoolDescription="Enrolled in fourth year of Bachelors of Applied Science in Electrical Engineering (Power and Sustainable Energy) "/>

				<Education startYear={2011} 
				endYear={2015}
				schoolName="Woodroffe High School" 
				schoolDescription="Awarded with Honor Roll Certificate for academic achievements. Awarded with Ontario Scholar for academic excellence. Awarded 8,000-dollar admission scholarship. Awarded Faculty of Engineering and Design Entrance Scholarship."/>
				
				<hr style={{borderTop:'3px solid #e22947'}}/>

				<h2>Experience</h2>
				<Experience startYear={2016} 
				endYear={2018} 
				jobName="Tutor" 
				jobDescription="Tutoring various Engineering courses including Electronics 2, Signals and System analysis, Introduction to communication systems and random signals and systems. "/>
				
				<Experience startYear={2015} 
				endYear={2016} 
				jobName="Data Collection Representative" 
				jobTitle="Elemental Data Collection Inc."
				jobDescription="Acted as a representative of companies requiring data collection for research via outbound surveying. Efficiently and accurately used software to record participant data within company guidelines. Exceeded strict daily and biweekly quotas."/>
				
				<Experience startYear={2014} 
				endYear={2015} 
				jobName="Customer Service " 
				jobTitle="Quickie Convenience"
				jobDescription="Handled and attended to various customers while managing the store. Attended calls and resolved enquiries from suppliers, customers, and head office. Provided exceptional customer service by quickly establishing rapport with customers. Ensured that weekly sales targets are met by upselling regularly. Managed the inventory on shelves. Reconciled cash and prepared daily bank drafts. "/>
				
				<hr style={{borderTop:'3px solid #e22947'}}/>

				<h3>Professional Development</h3>
				<Professionaldev ProfessionaldevType="Software Development" ProfessionaldevDescription="Thorough understanding of Java, Python, C, Java Script and HTML gained through personal interest and completion of courses both online and in school. In process of completing Advanced Java Master class course."/>
				<Professionaldev ProfessionaldevType="Web Development" ProfessionaldevDescription="Completed and received certificates of various courses of Full Stack Web Development. Learned and applied React.js, PostgresQL along with Javascript, HTML, and CSS to complete various websites and website applications some of which are available on GitHub."/>
				<Professionaldev ProfessionaldevType="Electric Power Transmission" ProfessionaldevDescription="Currently working on the 'Greening the Campus Building' project in which my partner and I work on Hagen Hall, a building at the University of Ottawa campus, and decide ways in which we can limit power consumption. We are achieving this by the considerations of two major factors in this project. First of which is transforming Hagen Hall to a NZEB(Net Zero Energy Building) and secondly is achieving LEED(Leadership in Energy and Environmental Design) certifications."/>
				<Professionaldev ProfessionaldevType="Signals and Systems" ProfessionaldevDescription="Learned and implemented Matlab to manipulate properties of signals and systems through various filters."/>
				<Professionaldev ProfessionaldevType="Electromagnetic Engineering" ProfessionaldevDescription="Learned and applied anti-reflection coating software for the enhancement of efficiency of solar panels."/>
				<Professionaldev ProfessionaldevType="Ottabotics" ProfessionaldevDescription="Currently working with a team developing an autonomous racecar for competition implementing knowledge of control systems and programming languages including Arduino."/>
				<hr style={{borderTop:'3px solid #e22947'}}/>

				<h2>Skills</h2>
				<Skills />

				</Cell>
			</Grid>
			</div>

			)
	}
}

export default Resume;