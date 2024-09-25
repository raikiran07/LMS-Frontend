import React, { useEffect } from 'react'
// import LeaveRequests from './Data/EmployeeRequests/LeaveRequests'
// import leaveRequestsData from './Data/EmployeeRequests/LeaveRequestsData'
import { useState } from 'react';
import LeaveRequests from '../data/EmployeeRequests/LeaveRequests';
import leaveRequestsData from '../data/EmployeeRequests/LeaveRequestsData';
// import employeeLeaveData from './Data/EmployeeLeaves/employeeLeaveData';
import NavBarComponent from './NavBarComponent';
import { getAllLeaves, getEmployeeByUsername } from '../api/api';
import Logout from './Logout';


export default function EmployeeLeaveRequests() {

    const user = localStorage.getItem("user")
    const [leaves,setLeaves] = useState([])
    const token = localStorage.getItem("token")
    const [leavesCountRender,setLeavesCountRender] = useState(null)

    const [activeEmpProfile,setActiveEmpProfile] = useState(false)


    useEffect(()=>{
        return async ()=>{
            try {
                const userDetails = await getEmployeeByUsername({username:user},token);
                const managerName = userDetails?.data?.empName
                console.log(managerName)
                const res = await getAllLeaves(token);
                console.log(res.data)
                const leavesResult = res?.data?.filter(leave=>leave?.employee?.manager==managerName)
                setLeaves(leavesResult)
                console.log(leavesResult)
               
               
            } catch (error) {
                console.log(error)
            }
        }
    },[leavesCountRender])

    return (
        <>
        <NavBarComponent user={user}  activeEmpProfile={activeEmpProfile} setActiveEmpProfile={setActiveEmpProfile} />
        <div className='leave-requests-wrapper leave-request-container'>
          <h3  style={{textAlign:"left",maxWidth:"95%",margin:"1rem auto 1rem auto",fontWeight:400}}>Employee Leave Requests</h3>
          
            <table className='table table-striped table-info table-common leave-request-table'>
                <thead>
                    <tr className='table-head'>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Type Of Leave</th>
                        <th>Start Date</th>
                        {/* <th>End Date</th> */}
                        <th>Reason</th>
                        {/* <th>Status</th> */}
                        <th>No of Days</th>
                        <th>Comments</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // leaves.map(ld=><LeaveRequests key={ld.id} leave={ld}/>)
                        // leaveRequestsData.map(ld=><LeaveRequests key={ld.id} leaveRequestsData={ld}/>)
                        leaves?.map(leave=><LeaveRequests key={leave.leaveId} setLeavesCountRender={setLeavesCountRender} leave={leave}/>)
                    }
                </tbody>


            </table>
            <Logout />
           
            </div>
           
       
        </>
    )
}

