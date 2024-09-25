import {Link} from 'react-router-dom'
import { deleteEmployeeByEmployeeId } from '../../api/api'
import UpdateEmployee from '../forms/UpdateEmployee'


// Each rows of employee table

const EmployeeTable = ({emps,employees,setEmployees,setEmployeeListLength}) => {
   
    const token = localStorage.getItem("token")
   const {empId:id,username,empPosition:position,department,hr,manager} = emps

   const handleDeleteEmployee = async (empId) => {

            try {
                const res = await deleteEmployeeByEmployeeId(empId,token);
                const updatedEmployees = employees.filter(emp=>emp.empId != empId );
                setEmployees(updatedEmployees)
                setEmployeeListLength(prev=>prev-1)
            } catch (error) {
               alert(error.response)
            }
            
            
   }
    
        return(
            <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{position}</td>
                <td>{department.deptcode}</td>
                <td>{hr}</td>
                <td>
                    {manager}
                </td>
                <td>
                    <Link to={`/update/employee/${id}`}>
                    <button className="btn btn-secondary mx-2">Update</button>
                    </Link>
                    
                    <button className="btn btn-danger" onClick={()=>handleDeleteEmployee(id)}>Delete</button>
                </td>

            </tr>
        )
    
}

export default EmployeeTable;

