import React, { Component } from 'react'
import history from './../../history'
import axios from 'axios'

class ApplicantDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname: '',
             lname: '',
             mobileNo: '',
             gender: ''
        }
    }
    
    fNameHandler = (event) => {
        this.setState({fname: event.target.value})
    }
    lNameHandler = (event) => {
        this.setState({lname: event.target.value})
    }
    mobileNoHandler = (event) => {
        this.setState({mobileNo: parseInt(event.target.value)})
    }
    genderHandler = (event) => {
        this.setState({gender: event.target.value})
    }

    submitHandler = (event) => {
        
        const appDetails = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            mobileNo: this.state.mobileNo,
            gender: this.state.gender
        }
        
        axios.post('http://localhost:4000/app/applicantDetails',appDetails)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log("Error unable to pass data");
        })

        console.log(appDetails);
        history.push('/EducationDetails')
        event.preventDefault()
    }

    render() {
        const {fname,lname,mobileNo,gender} = this.state
        return (
            <div>
                <button> Add Applicant </button>
                <h1> Applicant Details </h1>
                <form onSubmit={this.submitHandler} >
                    <label><b>First name: </b></label>
                    <input type="text"  value={fname} onChange={this.fNameHandler} required/>
                    <br/>

                    <label><b>Last name: </b></label>
                    <input type="text"  value={lname} onChange={this.lNameHandler} required/>
                    <br/>

                    <label><b>Mobile No: </b></label>
                    <input type="number" value={mobileNo} onChange={this.mobileNoHandler} required/>

                    <br/>
                    <div value={gender} onChange={this.genderHandler} >
                        <label for="gender"><b>Gender: </b></label>
                        <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female
                    </div>
                        
                    <br />
                    <button type="submit">Save and Next</button>
                </form>
                
            </div>
        )
    }
}

export default ApplicantDetails

