import React, { Component } from "react"
import API from "../utils/API"
import SearchBar from "./SearchBar"
import DataTable from "./DataTable"


class DataArea extends Component {
    state = {
        employees: [{}],
        sortedEmployees: [{}],
        sortOrder: "descending"
    }

    componentDidMount() {
        API.employees().then(res => {
            this.setState({
                employees: res.data.results,
                sortedEmployees: res.data.results
            })
            console.log(this.state.employees);
        })
    }

    handleEmployeeSearch = (event) => {
        console.log(event.target.value)
        const input = event.target.value;
        const filteredEmployees = this.state.employees.filter(employee => {
            let values = Object.values(employee).join("").toLowerCase();
            return values.indexOf(input.toLowerCase()) !== -1;
        })
        this.setState({
            sortedEmployees : filteredEmployees
        })
    }

    alphabetize = (heading) => {
        if (this.state.sortOrder === "descending") {
            this.setState({
                sortOrder: "ascending"
            })
        } else {
            this.setState({
                sortOrder: "descending"
            })
        }

        const compare = (a, b) => {
            if (this.state.sortOrder === "ascending") {
                if (a[heading] === undefined) {
                    return 1
                } else if (b[heading] === undefined) {
                    return -1
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first)
                } else {
                    return a[heading] - b[heading]
                }        
            } else {
                if (a[heading] === undefined) {
                    return 1
                } else if (b[heading] === undefined) {
                    return -1
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first)
                } else {
                    return b[heading] - a[heading]
                }
            }
        }

        const alphabetizedEmployees = this.state.sortedEmployees.alphabetize(compare);
        this.setState({sortedEmployees : alphabetizedEmployees})
    }

    render() {
        return (
            <div>
                <SearchBar handleEmployeeSearch={this.handleEmployeeSearch} />
                <DataTable employees={this.state.sortedEmployees} alphabetize={this.alphabetize}/>
            </div>
        )
    }
}

export default DataArea