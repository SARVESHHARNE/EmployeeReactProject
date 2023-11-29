import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

    
const FormComp = () => {

    let [formdetails,setformdetails]=useState({eid:"",
    ename:"",dept:"",salary:''})
    const navigate=useNavigate();
    const addnewemp=(event)=>{
        event.preventDefault(); //stop the default submit task 
        //validation can be done here
        if(formdetails.eid==="" || formdetails.ename==="" || formdetails.dept==="" || formdetails.salary===""){
            alert("data cannot be blank");
            return;
        }

        EmployeeService.addEmployee(formdetails)
        .then((result)=>{
            console.log("inserted ",result);
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
                <input type="text" className="form-control" id="eid" name="eid" aria-describedby="emailHelp" value={formdetails.eid} onChange={handlechange}/>
                
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
            <button type="submit" className="btn btn-primary" onClick={addnewemp}>Submit</button>
        </form>
    )
}

export default FormComp