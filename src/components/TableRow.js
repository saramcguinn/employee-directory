import React from "react"

function TableRow({ employees }) {
    console.log(employees)
    return (
        <tbody>
            {!employees ? "" :
            employees.map(({ login, name, picture, phone, email, dob }) => (
                <tr key={login.uuid}>
                    <td><img src={picture.thumbnail} /></td>
                    <td>{name.first} {name.last}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{dob.date}</td>
                </tr>
            ))
            }
        </tbody>
    )
}


export default TableRow