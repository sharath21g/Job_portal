import React, { Component } from 'react'
import history from './../../history'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import { Button, TextField } from '@material-ui/core'

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
            expEnded: this.state.expended,
            applId: localStorage.getItem('applicant_id')
         }
        
        axios.post('http://localhost:4000/app/experienceDetails',expDetails)
        .then(res => {
            console.log(res.data);
            localStorage.removeItem('applicant_id')
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
            <Container component="main" maxWidth="md"> 
                <h1> Prior Job details </h1>
                <Button variant="contained" color="default"> Add Prior Job Experience </Button>

                <form onSubmit={this.submitHandler}>
                <Container maxWidth="xs" >   

                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Company"
                        required
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={company}
                        onChange={this.companyHandler}                     
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Title"
                        required
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={title}
                        onChange={this.titleHandler}                     
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="No of years"
                        type="number"
                        required
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={yoe}
                        onChange={this.yoeHandler}                     
                    />

                    <TextField
                        margin="normal"
                        id="date-picker-dialog"
                        format="MM/yyyy"
                        type="month"
                        label="Experience Started"
                        required
                        defaultValue='2020-01'
                        value={expstarted}
                        onChange={this.expStartHandler}
                    />
                    <br />
                    <TextField
                        margin="normal"
                        format="MM/yyyy"
                        type="month"
                        label="Experience Ended"
                        required
                        defaultValue='2020-01'
                        value={expended}
                        onChange={this.expEndedHandler}
                    />
                    <br />
                <Button variant="contained" color="default" type='submit'>Save and Register</Button>
                </Container>

                </form>
            </Container>
        )
    }
}

export default JobDetails
