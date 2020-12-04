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
    }

    render() {
        return (
            <div>
                <SearchBar handleEmployeeSearch={this.handleEmployeeSearch} />
                <DataTable employees={this.state.sortedEmployees}/>
            </div>
        )
    }
}

export default DataArea