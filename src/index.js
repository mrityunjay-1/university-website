import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './css/index_page_css.css';
import CompA from './MyComponents/CompA';
import CompB from './MyComponents/CompB';
import CompC from './MyComponents/CompC';
import logo from './images/logo.png'
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import GolfCourseTwoToneIcon from '@material-ui/icons/GolfCourseTwoTone';

import ChatIcon from '@material-ui/icons/Chat';

ReactDOM.render(
    <>
        <Router>
            <div className="main-div">
                <div className="main-div-child1">
                    <div className="main-div-child1-child1" style={{ width: '100%', height: '12rem' }}>
                        <img alt="logo" src={logo} style={{ width: '100%', height: '100%', boxShadow: '1px 1px 5px grey' }} />
                    </div>

                    <div className="main-div-child1-child2">
                        <div> <NavLink to="comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <LibraryAddTwoToneIcon fontSize="large" /> &nbsp;  Admissions </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Academics </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <GolfCourseTwoToneIcon fontSize="large" /> &nbsp;  Course offered </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Placements </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Research </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Campus Life </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Disciplines </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <SchoolTwoToneIcon fontSize="large" /> &nbsp;  Alumni </NavLink></div>
                        <div> <NavLink to="/comp1" style={{ textDecoration: 'none', fontSize: '1.6rem', color: 'white' }}>  <InfoTwoToneIcon fontSize="large" /> &nbsp;  About Us </NavLink></div>

                    </div>
                </div>
                <div className="main-div-child2">
                    <Switch>
                        <Route exact="comp1" path="/comp1" component={CompA} />
                        <Route exact="comp2" path="/comp2" component={CompB} />
                        <Route exact="comp3" path="/comp3" component={CompC} />
                    </Switch>
                </div>
            </div>
            <div style={{ borderRadius: '5rem', background: 'lightgrey', padding: '1.5%', position: 'fixed', bottom: '4%', right: '4%' }}> <ChatIcon fontSize="large" /> </div>
        </Router>
    </>, document.getElementById("root")
);