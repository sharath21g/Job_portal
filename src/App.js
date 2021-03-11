import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './Components/LandingPage'
import ApplicantDetails from './Components/ApplicantPages/ApplicantDetails'
import EducationDetails from './Components/ApplicantPages/EducationDetails'
import JobDetails from './Components/ApplicantPages/JobDetails'
import Success from './Components/ApplicantPages/Success'
import SignIn from './Components/AdminPage/SignIn'
import history from './history'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/ApplicantDetails" component={ApplicantDetails} />
                    <Route path="/EducationDetails" component={EducationDetails} />
                    <Route path="/JobDetails" component={JobDetails} />
                    <Route path="/Success" component={Success} />
                    <Route path="/SignIn" component={SignIn} />
                </Switch>
            </Router>
        )
    }
}

export default App