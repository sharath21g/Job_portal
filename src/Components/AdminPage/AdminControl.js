import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Applicant = props => (
    <tr>
    <td>{props.applicant.firstname}</td>
    <td>{props.applicant.lastname}</td>
    <td>{props.applicant.experience}</td>
    <td>{props.applicant.date.substring(0,10)}</td>
    <td>
        <button className="btn btn-secondary"><Link to={"/edit/"+props.applicant._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.applicant._id) }}>Delete</button>
    </td>
</tr>
)
class AdminControl extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
            applicants : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/admin/')
        .then(res => {
            this.setState({ applicants: res.data })
        })
        .catch(error => console.log(error));
    }

    deleteApplicant(id) {
        axios.delete('http://localhost:4000/admin/' +id)
        .then(res => console.log(res.data));

        this.setState({ applicants: this.state.applicants.filter(el => el._id !== id)})
    }

    applicantList() {
        return this.state.applicants.map(currentapplicant => {
            return <Applicant applicant={Applicant} deleteExercise={this.deleteApplicant} key={currentapplicant._id} />
        })
    }
    
    render() {
        return (
            <div className="container">
            <h3>View Applicants</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Experience</th>
                        <th>Date Applied</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.applicantList()}
                </tbody>
            </table>
        </div>
    );
    }
}
export default AdminControl;