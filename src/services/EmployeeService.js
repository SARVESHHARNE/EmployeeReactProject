import { Employee } from '../Employee';
import axios from 'axios';
let baseURL="http://localhost:9000";
class EmployeeService{
    constructor(){
        this.prodarr=[new Employee(11,'ram','dbda',4444),
        new Employee(12,'sham','dac',4567),
        new Employee(13,'sita','ditiis',4678),
        new Employee(14,'gita','dac',777)];
    }
    getAllEmployees(){
        return axios.get(baseURL+'/display');
    }
    
    getById(eid){
        return axios.get(baseURL+"/display/"+eid);
    }

    addEmployee(p){
        console.log("in service",p)
       return axios.post(baseURL+"/input",p)
    }
    updateEmployee(p){
        console.log("in service",p)
       return axios.put(baseURL+"/update/"+p.eid,p)
    }
    
    deleteEmployee(eid){
        return axios.delete(baseURL+"/delete/"+eid);
    }
}
export default new EmployeeService();