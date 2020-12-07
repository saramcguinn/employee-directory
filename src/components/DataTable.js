import React from "react";
import Table from "react-bootstrap/Table"
import TableRow from "./TableRow"

function DataTable({employees, alphabetize}) {
    console.log(employees)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th onClick={() => alphabetize(employees)}>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <TableRow employees={employees}/>

            </Table>
        </div>
    )
}

export default DataTable
