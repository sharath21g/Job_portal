import React, { Component } from 'react'
import history from './../../history'
import axios from 'axios'

class JobDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             company: '',
             title: '',
             yoe: '',
             expstarted: {},
             expended: {}
        }
    }
     
    companyHandler = (event) => {
        this.setState({company: event.target.value})
    }

    titleHandler = (event) => {
        this.setState({title: event.target.value})
    }

    yoeHandler = (event) => {
        this.setState({yoe: parseInt(event.target.value)})
    }
    expStartHandler = (event) => {
        this.setState({expstarted: event.target.value}) 
    }
    expEndedHandler = (event) => {
        this.setState({expended: event.target.value})
    }
    submitHandler = (event) => {
        const expDetails = {
            company: this.state.company,
            jobTitle: this.state.title,
            yearsOfExp: this.state.yoe,
            expStarted: this.state.expstarted,
            expEnded: this.state.expended
         }
        
        axios.post('http://localhost:4000/app/experienceDetails',expDetails)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log("Error unable to pass data");
        })

        console.log(expDetails);
        history.push('/Success')
        event.preventDefault()
    }

    render() {
        const {company,title,yoe,expstarted,expended} = this.state
        return (
            <div>
                <h1> Prior Job details </h1>
                <button> Add Prior Job Experience </button>
                <form onSubmit={this.submitHandler}>
                    <label><b>Company: </b></label>
                    <input type="text" value={company} onChange={this.companyHandler} required/>
                    <br />
                    <label><b>Job Title: </b></label>
                    <input type="text" value={title} onChange={this.titleHandler} required/>
                    <br />                    
                    <label><b>Years of Experience: </b></label>
                    <input type="number" value={yoe} onChange={this.yoeHandler} required/>
                    <br />
                    <label><b>Experience StartDate: </b></label>
                    <input type="month" value={expstarted} onChange={this.expStartHandler} required/>
                    <br />
                    <label><b>Experience EndDate: </b></label>
                    <input type="month" value={expended} onChange={this.expEndedHandler} required/>
                    <br />
                    <button type='submit'>Save and Register</button>
                </form>
            </div>
        )
    }
}

export default JobDetails
