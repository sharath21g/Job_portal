import React from 'react'
import { Component } from 'react'

class Education extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             edutype: '',
             percentage: 0,
             duration: 0,
             cstarted: '',
             cended: ''
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
        this.setState({cstarted: new Date(event.target.value)}) 
    }
    cEndedHandler = (event) => {
        this.setState({cended: new Date(event.target.value)})
    }

    render(){
        return (
            <div>
                <label for="edutype"><b>Type: </b></label>
                <select name="edutype" id="edu" onChange={this.edutypeHandler}>
                    <option value="secondary">Secondary</option>
                    <option value="hsc">Higher Secondary</option>
                    <option value="ug">Undergraduate</option>
                    <option value="pg">Postgraduate</option>
                </select>
                <br />
                <label for="percentage"><b>Percentage: </b></label>
                <input type="number" name="percentage" required onChange={this.marksHandler}/>
                <br />
                <label for="duration"><b>Course duration: </b></label>
                <input type="number" name="duration" required onChange={this.durationHandler}/>
                <br />
                <label for="started"><b>Course Started: </b></label>
                <input type="month" name="started" min="1970-08" required onChange={this.cStartHandler}/>
                <br />
                <label for="ended"><b>Course Ended: </b></label>
                <input type="month" name="ended" min="1970-08" required onChange={this.cEndedHandler}/>
            </div>
        )

    }
}

export default Education
