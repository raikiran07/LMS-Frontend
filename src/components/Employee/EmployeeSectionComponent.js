import '../../styles/EmployeeSectionComponent.css';
import {Link} from 'react-router-dom'

import EmployeeList from '../../data/EmployeeTableApi/EmployeeList';

import { useEffect, useState } from 'react';
import {applyLeave,getEmployeeById} from '../../api/api'



function EmployeeSectionComponent({path,employeeLeaves,activeEmpProfile,setActiveEmpProfile,setLeaveLength,leaveLength}){

    //applied date
    const current = new Date();
    const curdate = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;

    // useState for employee profile details
    const [employeeProfile,setEmployeeProfile] = useState({});
  
    

    // useState for apply leave
    const [applyData,setApplyData] = useState({
       
        employee:{
            empId:Number(localStorage.getItem("empId"))
        },
        transactionType:"Full Day",
        sessionType:"First Half",
        startDate:null,
        endDate:null,
        leaveType:"Casual Leave",
        reason:null,
        status:"Pending",
        comments:null,
        noOfDays:null,
        appliedOnDate:curdate
    });



    // usestate to display and hide apply form
    const [leaveActive,setLeaveActive] = useState(false);

    const handleApplyButton = () => {
        setLeaveActive(true)
    }

    const cancleLeave = () => {
        setLeaveActive(false);
    }

// handle onChange in the input fields
  //function to handle change
  const handleDatachange=(e, identifier)=>{
    setApplyData(prevState=>({
        ...prevState,[identifier]:e.target.value
    }));
}




const handleSubmit = async(e) => {
    e.preventDefault();
    setLeaveActive(true)
    console.log(applyData)
    const token = localStorage.getItem("token")
    
    try {

        

        // getting remaining leave data from local storage
        const casualLeaveRemaining = Number(localStorage.getItem("casualLeaveRemaining"))
        const privilegeLeaveRemaining = Number(localStorage.getItem("privilegeLeaveRemaining"))
        const wellnessLeaveRemaining = Number(localStorage.getItem("wellnessLeaveRemaining"))

        
        const leaveRequest = applyData.noOfDays;
        

        if(applyData.leaveType=="Casual Leave"){
            

        if(leaveRequest > casualLeaveRemaining){
            
            alert("you have less number of casual leaves than you have requested")

        }
        else{
             const res = await applyLeave(token,applyData);
             setLeaveLength(prev=>prev+1);
            alert(res.data)
            setLeaveActive(false)
        }
        }
        else if(applyData.leaveType=="Wellness Leave"){

            if(leaveRequest > wellnessLeaveRemaining){
                alert("you have less number of wellness leaves than you have requested")
            }
            else{
                const res = await applyLeave(token,applyData);
                alert(res.data)
                setLeaveActive(false)
            }
        }
        else{
            if(leaveRequest > privilegeLeaveRemaining){
                alert("you have less number of privilege leaves than requested")
            }
            else{
                const res = await applyLeave(token,applyData);
                alert(res.data)
                setLeaveActive(false)
            }

        }
     

       
    } catch (error) {
        alert(error.response)
    }


};

useEffect(()=>{
    return async () => {
        try {
            const token = localStorage.getItem("token")
            const empId = Number(localStorage.getItem("empId"))
            const res = await getEmployeeById(empId,token);
            console.log(res)
            setEmployeeProfile(res.data)
        } catch (error) {
            console.log(error)
        }
       
    }
},[])
  

// function to hide show profile
const handlleShowProfile = () => {
    setActiveEmpProfile(false);
}

 return(
        <div className="container-4">
            <div className="leave-heading flex content-w-95 px-2">
                <p className="leave fw-bold">LEAVES</p>
                <div className='button-container'>

                    {/* Need to implement functionality to add drop down menu */}
                    {
                        !leaveActive && <button value="submit" className="btn btn-primary" onClick={handleApplyButton}>Apply Leave</button>
                    }
                {
                    path==="/manager" ? (
                        <Link to="/manager/leaverequests">
                    <button value="submit" className="btn btn-primary">Check Requests</button>
                    </Link>
                    ) : null
                }
                

                </div>
                
            </div>

            {/* Logic for displaying leave form */}

            {
                leaveActive &&  <form className='common-form leaveForm' onSubmit={handleSubmit}>
                <div id="transaction-type" className="transaction-type">
                    <div className='flex-form-group'>

                    </div>
                   
                    <div className="form-group" >
                        <label for="transaction-class">Transaction Type*:</label>
                        {/* need to implement methods for dropdown menu */}
                        <select id="transaction-class" name="transactionType" required
                        value={applyData.transactionType}
                        onChangeCapture={(e)=>handleDatachange(e,"transactionType")}
                        >
                            
                            <option value="Full Day">Full Day</option>
                            <hr/>
                            <option value="Half Day">Half Day</option>
                        </select>
                    </div>
                   
                {
                    applyData.transactionType=="Half Day" ? null : (

                        <div className="form-group">
                        <label for="leave-type">Type of leave*:</label>
    
                        <select id="leave-type" name="leaveType" value={applyData.leaveTransaction} onChange={(e) => handleDatachange(e,"leaveType")} required>
                            <option value="" disabled><i>Select Option</i></option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Wellness Leave">Wellness Leave</option>
                            <option value="Privilege Leave">Privilege Leave</option>
                         
                        </select>
                    </div>

                    )
                }
                   
                    {
                        applyData.transactionType == "Full Day" ? null : (
                            <div className="form-group" >
                        <label for="">Session*:</label>
                        <select id="session-type" name="sessionType"
                        value={applyData.sessionType}
                        onChange={(e)=>handleDatachange(e,"sessionType")}
                         required>
                            <option><i>Select Option</i></option>
                            <option value="full-half">First Half</option>
                            <option value="second-half">Second Half</option>
                        </select>
                    </div>
                        )
                    }
                    
    
                    <div className="form-group" >
                        <label for="days-num">Number of Days*:</label>
    
                        <input type="number" name="noOfDays" id="days-num"
                        value={applyData.noOfDays}
                        onChange={(e)=>handleDatachange(e,"noOfDays")}
                         required/>
                    </div> <br/>
                    <div className="form-group">
                        <label for="start-date">Start Date*:</label>
    
                        <input type="date" name="startDate" id="start-date" 
                        value={applyData.startDate}
                        onChange={(e)=>handleDatachange(e,"startDate")}
                        required/>
                    </div>


                    {/* logic to display end date only if leave transaction is full day */}

                    {
                        applyData.transactionType == "Full Day" ?  <div className="form-group" >
                        <label for="end-date">End Date:</label>
    
                        <input type="date" name="endDate" id="end-date" value={applyData.endDate}
                        onChange={(e)=>handleDatachange(e,"endDate")}
                         />
                        </div> : null
                    }

    
                    <div className="form-group" >
                        <br/>
                        <label for="text-area">Reason*:</label>
                        <input type="text" name="reason" id="text-area" rows="5" cols="5" 
                        value={applyData.reason} onChange={(e) => handleDatachange(e,"reason")} required />
                    </div>
                    <br/>
                    <button className="apply" type="submit">Apply</button>
                    <button className="cancel" onClick={cancleLeave}>Cancel</button>
                </div>
                </form>
            }
             <div>
                <EmployeeList leaves={employeeLeaves}/>
            </div> 

            {/* employee profile section */}

            {
                activeEmpProfile ? (
                    <div className='employee-profile'>
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
    );

}

export default EmployeeSectionComponent;
