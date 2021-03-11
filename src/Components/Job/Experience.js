import React, { Component } from 'react'

export class Experience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             company: '',
             title: '',
             yoe: '',
             expstarted: [],
             expended: []
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
    render() {
        return (
            <div>
                <label><b>Company: </b></label>
                <input type="text" placeholder="company" name="company" required onChange={this.companyHandler}/>
                <br />
                <label><b>Job Title: </b></label>
                <input type="text" placeholder="jobtitle" name="jobtitle" required onChange={this.titleHandler}/>
                <br />
                <label><b>Years of Experience: </b></label>
                <input type="number" placeholder="yoe" name="yoe" onChange={this.yoeHandler} required />
                <br />
                <label><b>Experience StartDate: </b></label>
                <input type="month" name="expstarted"  onChange={this.expStartHandler} required />
                <br />
                <label><b>Experience EndDate: </b></label>
                <input type="month" name="expstarted" onChange={this.expEndedHandler} required />
                <br />
            </div>
        )
    }
}

export default Experience
