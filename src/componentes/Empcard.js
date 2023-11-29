import React, { useEffect, useState } from "react"
import EmployeeService from "../services/EmployeeService"
import { Link, useParams } from "react-router-dom"
const Empcard = () => {

    let [formdetails,setformdetails]=useState({eid:"",ename:"",dept:"",salary:""})

    const params = useParams()

    useEffect(() => {
        EmployeeService.getById(params.eid)
            .then((result) => {
                console.log(result.data)
                setformdetails(...result.data)
                console.log(...result.data)
            })
    },[])

    return (

        <div className="card" style={{ "width": "18rem" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{formdetails.ename}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{formdetails.eid}</li>
                <li className="list-group-item">{formdetails.dept}</li>
                <li className="list-group-item">{formdetails.salary}</li>
            </ul>
            <div className="card-body">
                <Link to="/list">
                    <button type="button" name="btn" id="btn" value="btn">back</button>
                </Link>
            </div>
        </div>
    )
}

export default Empcard