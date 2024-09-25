

const Employee=({leave})=>{
    
    
    return(
        <tr>
            <td>{leave.noOfDays}</td>
            <td>{leave.appliedOnDate}</td>
            <td>{leave.startDate}</td>
            <td>{leave.endDate}</td>
            <td>{leave.leaveType}</td>
            <td>{leave.reason}</td>
            <td>
                {
                    leave.status == "Approved" ? (
                        <span style={{color:"#10e834",fontWeight:"bold"}}>{leave.status}</span>
                    ) : 
                    leave.status == "Rejected" ? (
                        <span style={{color:"#f7614d",fontWeight:"bold"}}>{leave.status}</span>
                    ) : (
                        <span>{leave.status}</span>
                    )
                }
            </td>
            <td>{leave.comments}</td>
        </tr>
    )
}

export default Employee;