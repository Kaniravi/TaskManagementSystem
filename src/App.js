import AdminRegister from './admin/AdminRegister';
import Home from './Home';
import AdminPage from './admin/AdminPage';
import ManagerRegister from './admin/ManagerRegister';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ManagerPage from './manager/ManagerPage';
import AddProject from './admin/AddProject';
import AssignProjectToManager from './admin/AssignProjectToManager';
import Login from './Login';
import './App.css';
import RegisterEmployee from './manager/RegisterEmployee';
import AssignToEmployee from './manager/AssignToEmployee';
import ChangePassword from './manager/ChangePassword';
import EmployeePage from './employee/EmployeePage';
import ChangeEmployeePassword from './employee/ChangeEmployeePassword';
import UpdateProjectStatus from './employee/UpdateProjectStatus';
import LogOut from './LogOut';
import ChangeAdminPassword from './admin/ChangeAdminPassword';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route path ="/adminRegister" element ={<AdminRegister/>}>Register</Route>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/adminPage/:adminName" element ={<AdminPage/>} />
          <Route path="/adminPage" element={<AdminPage/>}/>
          <Route path ="/managerRegister" element ={<ManagerRegister />} />
          <Route path="/viewManager/:adminName" element ={<AdminPage />}/>
          <Route path ="/managerPage/:managerName" element ={<ManagerPage  />}/>
          <Route path ="/managerPage" element={<ManagerPage/>}/>
          
          <Route path ="/registerEmployee/:managerName" element ={<RegisterEmployee/>}/>
          <Route path="/viewAllEmployeesInAdmin/:adminName" element={<AdminPage/>}/>
          <Route path ="/addProject" element ={<AddProject/>}/>
          <Route path="/allProjects/:adminName" element={<AdminPage/>}/>
          <Route path ="/changeAdminPassword/:adminName" element={<ChangeAdminPassword/>}/>
          <Route path ="/assignProjectToManager/:projectId" element = {<AssignProjectToManager/>}/>
          
          <Route path ="/myProjects/:managerName" element ={<ManagerPage/>}/>
          
          <Route path="/viewAllEmployeesInManager/:managerName" element ={<ManagerPage/>}/>

          <Route path ="/assignToEmployee/:managerName" element ={<AssignToEmployee/>}/>
          <Route path ="/changePassword/:managerName" element ={<ChangePassword/>}/>
          <Route path ="/employeePage/:employeeName" element={<EmployeePage/>}/>
          <Route path ="/myEmployeeProjects/:employeeName" element ={<EmployeePage/>}/>
          <Route path ="/changeEmployeePassword/:employeeName" element={<ChangeEmployeePassword/>}/>
          <Route path ="/updateProjectStatus/:employeeName" element={<UpdateProjectStatus/>}/>
          <Route path ="/logOut" element ={<LogOut/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
