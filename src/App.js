import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar from './componentes/MainNavBar';
import HomeComp from './componentes/HomeComp';
import TableComp from './componentes/TableComp';
import FormComp from './componentes/FormComp';
import ListComp from './componentes/ListComp';
import EmpEdit from './componentes/EmpEdit';
import Empcard from './componentes/Empcard';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div >
      <nav className="navbar navbar-expand navbar-dark mai-top-header" style={{'backgroundColor':'#343a40','color':"white"}}>
         <h1  className="font-italic">Employee Management System</h1>
      </nav>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route path="/home" element={<HomeComp></HomeComp>}></Route>
        <Route path="/table" element={<TableComp></TableComp>}></Route>
        <Route path="/list" element={<ListComp></ListComp>}></Route>
        <Route path="/form" element={<FormComp></FormComp>}></Route>
        <Route path='/view/:eid' element={<Empcard></Empcard>}></Route>
        <Route path='/edit/:eid' element={<EmpEdit></EmpEdit>}></Route>
      </Routes>

    </div>
  )
}

export default App;
