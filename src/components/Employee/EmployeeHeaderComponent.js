import '../../styles/EmployeeHeaderComponent.css';
import EmployeeBalance from '../../data/EmployeeTable1/EmployeeBalance';

import EmployeeTotal from '../../data/EmployeeTable2/EmployeeTotal';

import EmployeeDetails from '../../data/EmployeeTable3/EmployeeDetails';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function EmployeeHeaderComponent({currentEmployee,employeeLeaves}) {
    
    employeeLeaves = employeeLeaves ? employeeLeaves : [];

    //applied Leave
    const appliedWellnessLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Wellness Leave");
    const appliedWellnessLeaveNoOfDays = appliedWellnessLeave.reduce((sum,leave)=>sum + leave.noOfDays,0);

    const appliedCasualLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Casual Leave");
    const appliedCasualLeaveNoOfDays = appliedCasualLeave.reduce((sum,leave)=>sum+leave.noOfDays,0);
    
    const appliedPrivilegeLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Priviledge Leave")
    const appliedPrivilegeLeaveNoOfDays = appliedPrivilegeLeave.reduce((sum,leave)=>sum + leave.noOfDays,0)
    
    // pending leaves
    const pendingCasualLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Casual Leave" && leave.status=="Pending");
    const pendingCasualLeaveNoOfDays = pendingCasualLeave?.reduce((sum,leave)=>sum+leave.noOfDays,0);
    const pendingWellnessLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Wellness Leave" && leave.status=="Pending");
    const pendingWellnessLeaveNoOfDays = pendingWellnessLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);
    const pendingPrivilegeLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Priviledge Leave" && leave.status=="Pending");
    const pendingPrivilegeLeaveNoOfDays = pendingPrivilegeLeave?.reduce((sum,leave)=>sum+leave.noOfDays,0);


    //accepted leaves
    const acceptedCasualLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Casual Leave" && leave.status=="Approved");
    const acceptedCasualLeaveNoOfDays = acceptedCasualLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);

    const acceptedWellnessLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Wellness Leave" && leave.status=="Approved");
    const acceptedWellnessLeaveNoOfDays = acceptedWellnessLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);

    
    const acceptedPrivilegeLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Priviledge Leave" && leave.status=="Approved");
    const acceptedPrivilegeLeaveNoOfDays = acceptedPrivilegeLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);


    // rejected leaves
    
    const rejectedCasualLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Casual Leave" && leave.status=="Rejected");
    const rejectedCasualLeaveNoOfDays = rejectedCasualLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);

    const rejectedWellnessLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Wellness Leave" && leave.status=="Rejected");
    const rejectedWellnessLeaveNoOfDays = rejectedWellnessLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);

    const rejectedPrivilegeLeave = employeeLeaves?.filter(leave=>leave.leaveType=="Priviledge Leave" && leave.status=="Rejected");
    const rejectedPrivilegeLeaveNoOfDays = rejectedPrivilegeLeave?.reduce((sum,leave)=>sum + leave.noOfDays,0);

 

    const casualLeaveRemaining = currentEmployee?.casualLeave - acceptedCasualLeaveNoOfDays;
    const wellnessLeaveRemaining = currentEmployee?.wellnessLeave - acceptedWellnessLeaveNoOfDays
    const privilegeLeaveRemaining = currentEmployee?.privilegeLeave - acceptedPrivilegeLeaveNoOfDays

    localStorage.setItem("casualLeaveRemaining",casualLeaveRemaining);
    localStorage.setItem("wellnessLeaveRemaining",wellnessLeaveRemaining);
    localStorage.setItem("privilegeLeaveRemaining",privilegeLeaveRemaining);

   
    
    const employeeBalanceData = [
        {typeOfLeave:"Wellness Leaves", totalLeaves:currentEmployee?.wellnessLeave, applied:appliedWellnessLeaveNoOfDays, remaining:wellnessLeaveRemaining},
        {typeOfLeave:"Casual Leaves", totalLeaves:currentEmployee?.casualLeave, applied:appliedCasualLeaveNoOfDays, remaining:casualLeaveRemaining},
        {typeOfLeave:"Priviliege Leaves", totalLeaves:currentEmployee?.privilegeLeave, applied:appliedPrivilegeLeaveNoOfDays, remaining:privilegeLeaveRemaining},
        {typeOfLeave:"Employer of choice Leaves", totalLeaves:5, applied:0, remaining:5},
        {typeOfLeave:"Carry forward Leave", totalLeaves:5, applied:0, remaining:5}
    ]

    const totalLeaves = currentEmployee?.wellnessLeave + currentEmployee?.casualLeave + currentEmployee?.privilegeLeave
    const totalApplied = appliedCasualLeaveNoOfDays + appliedPrivilegeLeaveNoOfDays + appliedWellnessLeaveNoOfDays

    const totalPending = pendingCasualLeaveNoOfDays + pendingPrivilegeLeaveNoOfDays + pendingWellnessLeaveNoOfDays
    
    const totalAccepted = acceptedCasualLeaveNoOfDays + acceptedPrivilegeLeaveNoOfDays + acceptedWellnessLeaveNoOfDays

    const totalRejected = rejectedCasualLeaveNoOfDays + rejectedPrivilegeLeaveNoOfDays + rejectedWellnessLeaveNoOfDays

    const employeeTotalLeaves = [
        {names:"Total Leaves",totalLeaves:totalLeaves},
        {names:"Total Applied",totalLeaves:totalApplied},
        {names:"Total Pending",totalLeaves:totalPending},
        {names:"Total Approved",totalLeaves:totalAccepted},
        {names:"Total Rejected",totalLeaves:totalRejected},
    ]
    

    const employeeData = [
        {employeedataleft:"Weekly Calender", employeedataright:"Mon-Fri"},
        {employeedataleft:"Holiday Calender", employeedataright:<Link to="/holiday/calender" className="holiday">Holidays</Link>},
        {employeedataleft:"Login Time", employeedataright:"10:00"},
        {employeedataleft:"Logout Time", employeedataright:"19:00"},
        {employeedataleft:"Shift", employeedataright:"USA"},
      
    ]


    
    return (

        <div className="main-container">
            <div className="container1">
                <p className="balance fw-bold">BALANCES:</p>
                <table className="table1-leavetypes">
                    <thead>
                      
                        <tr className="headings">
                            <th colspan="1"></th>
                            <th>TOTAL LEAVES</th>
                            <th>APPLIED</th>
                            <th>REMAINING</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeBalanceData?.map(ebd => <EmployeeBalance employeeBalanceData={ebd} leaves={employeeLeaves} />)}
                    </tbody>
                </table>
            </div>
            <div className="container2">
                <table className="table2-totalleaves">
                    <p className="leaves fw-bold">TOTAL LEAVES</p>
                   
                    <tbody>
                    {employeeTotalLeaves?.map(etl=><EmployeeTotal employeeTotalLeaves={etl}/>)}
                    </tbody>
                </table>
            </div>

            <div className="container3">
                <p className="calender fw-bold">CURRENT WORKING CALENDER</p>
                <table className="table3-working-calender">
                    <tbody>
                    {employeeData?.map(ed=><EmployeeDetails employeeData={ed} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeHeaderComponent;