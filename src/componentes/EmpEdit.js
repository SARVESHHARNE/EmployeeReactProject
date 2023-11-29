import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

    
const EmpEdit = () => {

    let [formdetails,setformdetails]=useState({eid:"",
    ename:"",dept:"",salary:''})

    const location=useLocation()
    const navigate=useNavigate()

    useEffect(()=>{
        setformdetails({...location.state.empedit})
    },[])

    const updateemp=(event)=>{

        event.preventDefault(); //stop the default submit task 
        //validation can be done here
        if(formdetails.eid==="" || formdetails.ename==="" || formdetails.dept==="" || formdetails.salary===""){
            alert("data cannot be blank");
            return;
        }

        EmployeeService.updateEmployee(formdetails)
        .then((result)=>{
            console.log("updated ",result);
            setformdetails({eid:"",ename:"",dept:"",salary:""});
            navigate('/list')
        })
        .catch(()=>{
        })
    }

    const handlechange=(event)=>{
        let {name,value}=event.target
        setformdetails({...formdetails,[name]:value})
    }


    return (
        <form>
            <div className="form-group">
                <label htmlFor="eid">EmpId</label>
                <input type="text" className="form-control" id="eid" name="eid" aria-describedby="emailHelp" value={formdetails.eid} onChange={handlechange} readOnly/>
                
            </div>
            <div className="form-group">
                <label htmlFor="ename">Name</label>
                <input type="text" className="form-control" id="ename" name="ename" value={formdetails.ename}  onChange={handlechange}/>
            </div>
            <div className="form-group">
                <label htmlFor="dept">Department</label>
                <input type="text" className="form-control" id="dept" name="dept" value={formdetails.dept} onChange={handlechange}/>
            </div>
            <div className="form-group">
                <label htmlFor="salary">Salary</label>
                <input type="text" className="form-control" id="salary" name="salary" value={formdetails.salary} onChange={handlechange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={updateemp}>Submit</button>
        </form>
    )
}

export default EmpEdit