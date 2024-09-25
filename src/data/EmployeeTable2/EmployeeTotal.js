import React from 'react'


export default function ({employeeTotalLeaves}) {
    return (
        <tr>
            <td>{employeeTotalLeaves.names}</td>
            <td className="value">{employeeTotalLeaves.totalLeaves}</td>
        </tr>
    )
}

