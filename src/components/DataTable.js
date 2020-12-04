import React, { Component } from "react"
import API from "../utils/API"
import Table from "react-bootstrap/Table"

class DataTable extends Component {
    constructor() {
        super();
        this.state = {
            employees: [{}],
            sortedEmployees: [],
            sortOrder: "descending"
        }
        // this.componentDidMount() = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        API.Employees().then(res => {
            const emplList = res.data.results;
            console.log(emplList);
            this.setState({
                employees: emplList,
                sortedEmployees: emplList
            })
            console.log(this.state);
            console.log(this.state.employees[0].picture.thumbnail)
            console.log(this.state.employees[0].name)
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.employees}</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="#" /></td>
                            <td>Sara McGuinn</td>
                            <td>555-555-5555</td>
                            <td>sara@gmail.com</td>
                            <td>05-18-82</td>
                        </tr>
                        <tr>
                            <td><img src="#" /></td>
                            <td>Sara McGuinn</td>
                            <td>555-555-5555</td>
                            <td>sara@gmail.com</td>
                            <td>05-18-82</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DataTable