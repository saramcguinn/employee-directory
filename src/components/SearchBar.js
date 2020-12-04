import React from "react"

function SearchBar({handleEmployeeSearch}) {
    return(
        <input type="text" placeholder="Search" onChange={e => handleEmployeeSearch(e)}></input>
    )
}

export default SearchBar