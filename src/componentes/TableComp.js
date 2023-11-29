
import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";


    

const TableComp = () => {

        const [emparr,setEmparr]=useState([])
        useEffect(()=>{
            EmployeeService.getAllEmployees().then((result)=>{
                setEmparr([...result.data])
            })
        },[])


    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">EmpId</th>
                    <th scope="col">Name</th>
                    <th scope="col">Dept</th>
                    <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
                {emparr.map(ob=>
                <tr key={ob.eid}>
                    <th scope="row">{ob.eid}</th>
                    <td>{ob.ename}</td>
                    <td>{ob.dept}</td>
                    <td>{ob.salary}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default TableComp