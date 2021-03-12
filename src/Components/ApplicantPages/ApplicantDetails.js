import React, { Component } from 'react'
import history from './../../history'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class ApplicantDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname: '',
             lname: '',
             mobileNo: '',
             gender: 'Male'
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
            console.log('Axios response:',res.data);
            localStorage.setItem('applicant_id',res.data._id)
            console.log('res._id',res.data._id);

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
            <Container component="main" maxWidth="sm">          
                <Button variant="contained" color="default" > Add Applicant </Button>
                <h1> Applicant Details </h1>
                <form onSubmit={this.submitHandler} >
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="First Name"
                        name="fname"
                        value={fname}
                        onChange={this.fNameHandler}
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Last Name"
                        name="lname"
                        value={lname}
                        onChange={this.lNameHandler}                        
                    />
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Mobile No"
                        type="number"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={mobileNo}
                        onChange={this.mobileNoHandler}                     
                    />
                    
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" value={gender} onChange={this.genderHandler} >
                            <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                    </FormControl>

                    <br />   
                    <Button variant="contained" color="default"  type="submit">Save and Next</Button>
                </form>
                
            </Container>
        )
    }
}

export default ApplicantDetails
