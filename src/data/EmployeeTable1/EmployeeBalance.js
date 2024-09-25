import React from 'react'


export default function ({employeeBalanceData,leaves}) {
    console.log(leaves)
    return (


        <tr>
            <td>{employeeBalanceData.typeOfLeave}</td>
            <td>{employeeBalanceData.totalLeaves}</td>
            <td>{employeeBalanceData.applied}</td>
            <td>{employeeBalanceData.remaining}</td>
        </tr>
    )
}

