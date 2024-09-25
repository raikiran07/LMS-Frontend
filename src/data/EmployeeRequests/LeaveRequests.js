import React, { useState } from 'react'
import { updateStatusofLeaveByLeaveId } from '../../api/api';
import { useNavigate } from 'react-router';



export default function LeaveRequests({ leave,setLeavesCountRender}) {
    
   const navigate = useNavigate();
    const [comment,setComment] = useState(null);

    const handleAction = async(e,leaveId) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        try {
            const decision = e.target.innerText;
            if(decision=="Approve"){
                const res = await updateStatusofLeaveByLeaveId(leaveId,token,{
                    status:"Approved",
                    comments:comment
                })
                alert("Leave Updated");
                setLeavesCountRender(prev=>prev+1);
            }
            else{
                const res = await updateStatusofLeaveByLeaveId(leaveId,token,{
                    status:"Rejected",
                    comments:comment
                })
                alert("Leave Updated");
                setLeavesCountRender(prev=>prev+1);
            }
        } catch (error) {
            console.log(error)
        }
            
    }


    return (
        <tr>
            <td>{leave?.employee?.empId}</td>
            <td>{leave?.employee?.empName}</td>
            <td>{leave?.leaveType}</td>
            <td>{leave?.startDate}</td>
            {/* <td>{leave.endDate}</td> */}
            <td>{leave?.reason}</td>
            {/* <td>{leave.status}</td> */}
            <td>{leave?.noOfDays}</td>
            <td>
            {
                leave?.status=="Approved" ? (leave?.comments) : leave?.status == "Rejected" ? (
                   leave?.comments
                ) : (
                    <td><input type="text" className='searchBarInput' value={comment} onChange={(e)=>setComment(e.target.value)}></input></td>
                )
            }
            </td>
            
            
            <td>
            {
                    leave?.status=="Approved" ? (
                        <button className='btn btn-success' disabled="true">Approved</button>
                    ) : 
                    leave?.status=="Rejected" ? (
                        <button className='btn btn-danger' disabled="true">Rejected</button>
                    ) : (<>
                        <button onClick={(e)=>handleAction(e,leave?.leaveId)} className='btn-approve btn btn-primary table-text-small mr-3'>Approve</button> &nbsp;
                        <button onClick={(e)=>handleAction(e,leave?.leaveId)} className='btn-approve btn btn-danger table-text-small'>Reject</button>
                        </>
                    )
                }
           
            </td>
       
        </tr>
    )
}



// href={`/update/${employee.id}`}
// href=""

