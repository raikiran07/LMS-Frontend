
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AdminDashBoard from './components/Admin/AdminDashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from "./components/forms/AddEmployee"
import Employees from "./data/dataDepartment/employee"
import Departments from "./data/dataDepartment/department"
import { useState } from 'react';
import AddDepartment from './components/forms/AddDepartment';
import UpdateEmployee from "./components/forms/UpdateEmployee"
import UpdateDepartment from './components/forms/UpdateDepartment';
import RootLayout from './components/RootLayout';
import LoginComponent from "./components/Login/LoginComponent"
import EmployeeComponent from './components/Employee/EmployeeComponent';
// import ManagerComponent from './components/ManagerComponents/ManagerComponent';
import Employee from './data/EmployeeTableApi/Employee';
import LeaveRequest from './components/EmployeeLeaveRequests'
import Holiday from "./components/Holiday"
import NavBarComponent from './components/NavBarComponent';




function App() {
  const [employees,setEmployees] = useState(Employees)
  const [departments,setDepartments] = useState(Departments) 

  console.log("hello from the app...")

  const router = createBrowserRouter([
    
     
        {
          path:"/",
          element:<LoginComponent />

        },
        {
          path:"/employee",
          element:<EmployeeComponent  />
          
        },
        {
          path:"/holiday/calender",
          element:<Holiday />
        },
       
        {
          path:"/manager",
          element:<EmployeeComponent  />,
         },
        {
          path:"/manager/leaverequests",
          element:<LeaveRequest />
        },
        {
          path:"/admin",
          element:<AdminDashBoard
          
           />
        },
        {
          path:"/add/employee",
          element:<AddEmployee employees={employees} setEmployees={setEmployees}/>
          
        },
       
        {
          path:"/add/department",
          element:<AddDepartment departments={departments} setDepartment={setDepartments} />
        },
        {
          path:"/update/department/:deptcode",
          element:<UpdateDepartment deparments={departments} setDepartment={setDepartments} />
          
        },
        {
          path:"/update/employee/:empId",
          element:<UpdateEmployee employees={employees} setEmployees={setEmployees} />
        }
      
    
    
    
  ]
)


  return (
    <>
    <div className='App'>
     <RouterProvider router={router}>
    <NavBarComponent/>
     <Outlet></Outlet>
     </RouterProvider>
    </div>
   </>
  );
}

export default App;
