
import Dashboard from "./Dashboard";
import EmployeeDetailDashboard from "../Employee/EmployeeDetailDashboar";
import { useState } from "react";
import NavBarComponent from "../NavBarComponent";
import { getAllDepartment } from "../../api/api";
import { getAllEmployee,getEmployeeByUsername } from "../../api/api";
import { useEffect } from "react";
import Logout from '../Logout'



// Admin dashboard containing department table and employees table

const AdminDashBoard = () => {

    
      // useState for displaying employee profile
      const [activeEmpProfile,setActiveEmpProfile] = useState(false)
      const [employeeProfile,setemployeeProfile] = useState({})

    const [addDepartment,setAddDepartment] = useState(false)
    const [AddEmployee,setAddEmployees] = useState(false)
    const [departments,setDepartment] = useState([])
    const [employees,setEmployees] = useState([])
    

    // length state for useEffect
    const [deptListLength,setDeptListLength] = useState(null)
    const [employeeListListLength,setEmployeeListListLength] = useState(null)

    const role = localStorage.getItem("role");
    const user = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    // handle showProfile function
    const handlleShowProfile = () => {
        setActiveEmpProfile(false)
    }

    
    useEffect(()=>{

        const fetchData = async () => {
            try {
                const currentUser = {
                    username:localStorage.getItem("user")
                }

                const [res1,res2,res3] = await Promise.all([
                    getEmployeeByUsername(currentUser,token),
                    getAllDepartment(token),
                    getAllEmployee(token)
                ])

                setemployeeProfile(res1.data)
                setDepartment(res2.data)
                setEmployees(res3.data)
                
            } catch (error) {
                console.error("error fetching data")
            }
           

           
        }

        fetchData();
       
    },[deptListLength,employeeListListLength])
    


    return (
        
        <>
          
        <NavBarComponent user={user} activeEmpProfile={activeEmpProfile} setActiveEmpProfile={setActiveEmpProfile}/>
        <div className="admin-dashboard-container">
        {/* container to add blur effect */}
        <div className="blur-container" style={{backdropFilter : addDepartment ? "blur(2px)" : null}}></div>

        <div className="admin-dashboar">
        <h2 className="mt-5 admin-header">Department Details</h2>
        <Dashboard employees={employees} setEmployees={setEmployees} departments={departments} setDepartment={setDepartment} addDepartment={addDepartment} setAddDepartment={setAddDepartment}
        setDeptListLength={setDeptListLength}
         />
        <h2 className="mt-5 admin-header ">Employee Details</h2>
        <EmployeeDetailDashboard employees={employees} setEmployees={setEmployees} AddEmployee={AddEmployee} setAddEmployees={setAddEmployees}
        setEmployeeListListLength={setEmployeeListListLength}
        />
        
        

        <Logout/>
       
     

       </div>
                {

                    activeEmpProfile &&  <div className='blur-div admin-blur'></div>

                }

                {
                activeEmpProfile ? (
                    <div className='employee-profile admin-profile'>
                <div className='close-btn-container profile-close-container'>
                <h1 className='profile-header'>Profile Details</h1>
                <p className='close-btn close-profile' onClick={handlleShowProfile}>&#x2715;</p>
                </div>
                <div className='profile-content'>
                    <p>Employee Id : {employeeProfile.empId}</p>
                    <p>Department Code : {employeeProfile.department.deptcode}</p>
                    <p>Employee Name: {employeeProfile.empName}</p>
                    <p>Manager : {employeeProfile.manager}</p>
                    <p>HR : {employeeProfile.hr}</p>
                    </div>

                    </div>
                ) : null
            }
        
        </div>
        </>
       
    )
}


export default AdminDashBoard;