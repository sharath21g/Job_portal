import React, { Component } from 'react'
import history from './../../history'
import axios from 'axios'

class EducationDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             edutype: 'secondary',
             percentage: '',
             duration: '',
             cstarted: {},
             cended: {}
        }
    }
     
    edutypeHandler = (event) => {
        this.setState({edutype: event.target.value})
    }

    marksHandler = (event) => {
        this.setState({percentage: parseInt(event.target.value)})
    }

    durationHandler = (event) => {
        this.setState({duration: parseInt(event.target.value)})
    }
    cStartHandler = (event) => {
        this.setState({cstarted: event.target.value}) 
    }
    cEndedHandler = (event) => {
        this.setState({cended: event.target.value})
    }
    
    submitHandler = (event) => {
        const eduDetails = {
            eduType: this.state.edutype,
            percentageMarks: this.state.percentage,
            courseDuration: this.state.duration,
            courseStarted: this.state.cstarted,
            courseEnded: this.state.cended
        }
        
        axios.post('http://localhost:4000/app/educationDetails',eduDetails)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log("Error unable to pass data");
        })

        console.log(eduDetails);
        history.push('/JobDetails')
        event.preventDefault()
    }

    render() {
        const {edutype,percentage,duration,started,ended} = this.state
        return (
            <div>
            <h1> Education details </h1>
            <button> Add New Qualification </button>
            <form onSubmit={this.submitHandler}>
                <label><b>Type: </b></label>
                <select value={edutype} onChange={this.edutypeHandler}>
                    <option value="secondary">Secondary</option>
                    <option value="highersecondary">Higher Secondary</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                </select>
                <br />
                <label><b>Percentage: </b></label>
                <input type="number" value={percentage} onChange={this.marksHandler} required/>
                <br />
                <label><b>Course duration: </b></label>
                <input type="number" value={duration} onChange={this.durationHandler} required/>
                <br />
                <label><b>Course Started: </b></label>
                <input type="month" value={started} onChange={this.cStartHandler} required/>
                <br />
                <label><b>Course Ended: </b></label>
                <input type="month" value={ended} onChange={this.cEndedHandler} required/>
                <br/>
                <button type='submit'>Save and Next</button>
            </form>
                
            </div>
        )
    }
}

export default EducationDetails

