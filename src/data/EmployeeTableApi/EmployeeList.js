import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";

const EmployeeList= ({leaves}) => {

    console.log(leaves)

    return (
        <div>
           <table className="table-common table table-striped table-info mt-4" id="leave-history-table">
                    <thead>
                        <tr>
                            <th>DAYS</th>
                            <th>APPLIED ON</th>
                            <th>FROM DATE</th>
                            <th>TO DATE</th>
                            <th>LEAVE TYPE</th>
                            <th>REASON</th>
                            <th>STATUS</th>
                            <th>COMMENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaves?.length > 0 ? (
                                leaves?.map(leave=><Employee key={leave.id} leave={leave}/>)
                            ) : (
                                <tr>
                                    <td colSpan={8}>NO LEAVE DATA TO SHOW</td>
                                </tr>
                            )
                        }
                   
                </tbody>
            </table>
        </div>
    )
}


export default EmployeeList;