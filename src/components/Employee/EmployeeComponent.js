import React, { useEffect } from 'react';
import { useState } from 'react';
import EmployeeHeaderComponent from './EmployeeHeaderComponent';
import EmployeeSectionComponent from './EmployeeSectionComponent';
import NavBarComponent from '.././NavBarComponent';
import { getEmployeeByUsername } from '../../api/api';
import { getAllLeavesByEmployeeId } from '../../api/api';
import { getAllEmployee } from '../../api/api';
import Logout from '../Logout';
import { useNavigate } from 'react-router-dom';


export default function EmployeeComponent() {
    const path = window.location.pathname;
   
    const navigate = useNavigate();

    const user = localStorage.getItem("user")
    const role = localStorage.getItem("role")
    const token = localStorage.getItem("token")
    const empId = Number(localStorage.getItem("empId"))

    const [currentEmployee,setCurrentEmployee] = useState({});
    const [employeeLeaves,setEmployeeLeaves] = useState([])
    const [employees,setEmployees] = useState([])
    const [leaveLength,setLeaveLength] = useState(null)

      // useState for displaying employee profile
      const [activeEmpProfile,setActiveEmpProfile] = useState(false)

    const currentUser = {
        username:user
    }

   
  

    useEffect(()=>{

        const fetchData = async () => {
            try {

                const [res1,res3,res2,] = await Promise.all([
                    getEmployeeByUsername(currentUser,token),
                    getAllEmployee(token),
                    getAllLeavesByEmployeeId(empId,token)

                    
                    
                ])
              
               const leavesData = await res3.data;
               setLeaveLength(leavesData.length)
                setCurrentEmployee(res1.data)
                setEmployeeLeaves(res2.data)
                setEmployees(res3.data)
                
            } catch (error) {
                alert(error.response)
               
            }
           

           
        }

        fetchData();
       
    },[leaveLength])



  

   

   

    return (
        <>
      
        <NavBarComponent user={user} activeEmpProfile={activeEmpProfile} setActiveEmpProfile={setActiveEmpProfile} />
       
        <div className='main-container'>
        <div className='content-w-95'>
          
          <EmployeeHeaderComponent currentEmployee={currentEmployee} employeeLeaves={employeeLeaves} setLeaveLength={setLeaveLength} />
          <EmployeeSectionComponent  path={path} employeeLeaves={employeeLeaves} activeEmpProfile={activeEmpProfile} setActiveEmpProfile={setActiveEmpProfile} setLeaveLength={setLeaveLength}
          leaveLength={leaveLength}
          />
          <Logout />

          {/* need to style the blur effect when the user click the profile details */}
          
      </div>
      {

            activeEmpProfile &&  <div className='blur-div'></div>

      }
     
      </div>
        
        </>
        
     

    )
}
