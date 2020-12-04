import React from "react"
import axios from "axios"

const API = {
    Employees: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}

export default API