
import EmployeeTable from "../Admin/EmployeeTable";
import { useState } from "react";
import {Link} from 'react-router-dom'
import "../css/EmployeeDetailDashboard.css"

//EmployeeDashboard with search functionality and employee.map function

const EmployeeDetailDashboard = ({employees,setEmployees,addEmployee,setAddEmployee,setEmployeeListLength}) => {
   
    const [search,setSearch] = useState("");
    return (
        <div className="mx-auto border text-center table-employee rounded table-text-small p-2 employeeAdminDashBoard ">
         
            {/* <SearchBox employees={employees} setEmployees={setEmployees} /> */}

            {/* Search box for searching username */}
            <div className="searchbox-container">
            <div className="border">
            <input type="text" className='searchBarInput' name="empId" placeholder="&#128269; username or deptcode" value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div>
                <Link to={`/add/employee`}>
                    <button className='btn btn-primary addEmployeeBtn'>Add New Employee</button>
                </Link>
            </div>
            </div>
            
           <table className="table table-striped table-info table-text-small mt-5 ">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Username</th>
                    <th>Employee Position</th>
                    <th>Department Code</th>
                    <th>HR</th>
                    <th>Manager</th>
                    <th>Actions</th>
                   
                    
                </tr>
            </thead>
            <tbody>
                {/* looping the employee to create rows of table */}
               {
                employees?.filter(emp=>emp?.username?.toLowerCase().includes(search) || emp?.department?.deptcode.toString()?.includes(search))?.map(emp=>{
                    return <EmployeeTable emps={emp} employees={employees} setEmployees={setEmployees} setEmployeeListLength={setEmployeeListLength} />
                })
               }

            </tbody>

           </table>

        </div>
    )
}

export default EmployeeDetailDashboard;