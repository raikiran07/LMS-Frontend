import React from 'react'


export default function EmployeeDetails({employeeData}) {
    return (


        <tr>
            <td>{employeeData.employeedataleft}</td>
            <td>{employeeData.employeedataright}</td>
        </tr>


    )
}