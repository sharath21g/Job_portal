import React, { Component } from 'react'
import history from './../../history'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, TextField } from '@material-ui/core'

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
            courseEnded: this.state.cended,
            applId: localStorage.getItem('applicant_id')
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
            <Container component="main" maxWidth="md" > 
                <h1> Education Details </h1>     
                <Button variant="contained" color="default" >Add New Qualification</Button>

                <form onSubmit={this.submitHandler} >
                <Container maxWidth="xs">
                    <InputLabel id="edtype">Type</InputLabel>
                    <Select
                    labelId="edtype"
                    id="edtype"
                    value={edutype}
                    onChange={this.edutypeHandler}
                    required
                    >
                        <MenuItem value={'secondary'}>Secondary</MenuItem>
                        <MenuItem value={'highersecondary'}>HigherSecondary</MenuItem>
                        <MenuItem value={'undergraduate'}>Undergraduate</MenuItem>
                        <MenuItem value={'postgraduate'}>Postgraduate</MenuItem>
                    </Select>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Percentage marks"
                        type="number"
                        required
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={percentage}
                        onChange={this.marksHandler}                     
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Course Duration"
                        type="number"
                        fullWidth
                        required
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={duration}
                        onChange={this.durationHandler}                     
                    />
                    
                    <TextField
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/yyyy"
                        type="month"
                        label="Course Started"
                        required
                        defaultValue='2010-01'
                        value={started}
                        onChange={this.cStartHandler}
                    />
                    
                    <br />

                    
                    <TextField
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/yyyy"
                        type="month"
                        label="Course Ended"
                        defaultValue='2015-01'
                        required
                        value={ended}
                        onChange={this.cEndedHandler}
                    />
                    <br />
                    <Button variant="contained" color="default"  type="submit">Save and Next</Button>
                </Container>
                </form>
            </Container>
        )
    }
}

export default EducationDetails

