import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import home from './Components/LandingPage'
import applicantDetails from './Components/ApplicantPages/ApplicantDetails'
import educationDetails from './Components/ApplicantPages/EducationDetails'
import jobDetails from './Components/ApplicantPages/JobDetails'
import success from './Components/ApplicantPages/Success'
import signIn from './Components/AdminPage/SignIn'
import adminPage from  './Components/AdminPage/AdminControl'
import signOut from './Components/AdminPage/Logout'
import history from './history'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/applicantDetails" component={applicantDetails} />
                    <Route path="/educationDetails" component={educationDetails} />
                    <Route path="/jobDetails" component={jobDetails} />
                    <Route path="/success" component={success} />
                    <Route path="/signIn" component={signIn} />
                    <Route path="/adminPage" component={adminPage} />
                    <Route path="/signOut" component={signOut} />
                </Switch>
            </Router>
        )
    }
}

export default App