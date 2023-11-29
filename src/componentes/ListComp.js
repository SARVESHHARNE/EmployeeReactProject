import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListComp = () => {
    const [emparr, setEmparr] = useState([])

    const getData=()=>{
        EmployeeService.getAllEmployees().then((result) => {
            setEmparr([...result.data])
        })
    }
    useEffect(() => {
        getData()
    }, [])

    const deleteEmp = (eid) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("delete permanently")) {
            EmployeeService.deleteEmployee(eid)
            .then((result) => {
                console.log(result)
                getData()
            })
            .catch(() => { })
        }
    }

    return (
        <ul className="list-group list-group-flush">
            {emparr.map(ob => <li className="list-group-item" key={ob.eid}>
                <span>{ob.eid}</span>
                &nbsp;&nbsp;&nbsp;
                <span>{ob.ename}</span>
                &nbsp;&nbsp;&nbsp;
                <span>{ob.dept}</span>
                &nbsp;&nbsp;&nbsp;
                <span>{ob.salary}</span>
                &nbsp;&nbsp;&nbsp;
                <span>
                    <Link to={`/view/${ob.eid}`}>
                        <button type="button" name="btn" className="btn btn-success">View</button>
                    </Link>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span><button type="button" name="btn" className="btn btn-danger" onClick={() => { deleteEmp(ob.eid) }}>Delete</button></span>
                &nbsp;&nbsp;&nbsp;
                <span>
                    <Link to={`/edit/${ob.eid}`} state={{ empedit: ob }}>
                        <button type="button" name="btn" className="btn btn-primary">Edit</button>
                    </Link>
                </span>
            </li>)}
        </ul>
    )
}

export default ListComp