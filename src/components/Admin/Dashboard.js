import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import AddDepartmentForm from '../forms/AddDepartment';
import AddEmployeeForm from "../forms/AddEmployee"
import { deleteDepartmentByDeptCode } from '../../api/api';



//implementation of Department table using array map function
const Dashboard = ({employees,setEmployees,departments,setDepartment,addDepartment,setAddDepartment,setDeptListLength})=>{

    const navigate = useNavigate();
    
    const token = localStorage.getItem("token");
    const [search,setSearch] = useState("");

    const addNewDepartment = () => {
    setAddDepartment(true);
    }

    const deleteDepartment = async(deptCode,deptName) => {
      

            const userDecision = window.confirm(`Do you want to delete ${deptName}`)
            if(userDecision){
                const res = await deleteDepartmentByDeptCode(deptCode, token);
                setDeptListLength(prev=>prev-1)
            }

    }

    return(
        <>
       
        <div className="dashboard  width-70 my-2 mx-auto rounded border p-2">

           
            {/* search box for the department */}
            <div className="searchbox-container">
            <div className="border">
            <input type="text" className='searchBarInput' name="empId" placeholder="&#128269; deptname or deptcode" value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div>
                {/* trying to implement popup */}
                {/* <Link to={`/add/department`}>
                    <button className='btn btn-primary'>Add New Department</button>
                </Link> */}
                <button className='btn btn-primary' onClick={addNewDepartment}>Add New Department</button>
            </div>
            </div>

            <table className="table table-striped table-border rounded-lg table-info table-text-small "
            style={{filter : addDepartment ? "blur(2px)" : null}}
            >
                <thead>
                 
                    <th>Department Code</th>
                    <th>Department Name</th>
                    <th>Casual Leave</th>
                    <th>Privilege Leave</th>
                    <th>Welness Leave</th>
                    <th>Actions</th>
                   
                   
                </thead>
                <tbody>
                    {
                       departments?.filter(dept=>dept.deptName.toLowerCase().includes(search) || dept?.deptcode.toString()?.includes(search))?.map(dept=>{
                        return(
                            <tr key={dept?.deptcode}>
                                <td>{dept?.deptcode}</td>
                                <td>{dept?.deptName}</td>
                                <td>{dept?.casualLeave}</td>
                                <td>{dept?.priviledgeLeave}</td>
                                <td>{dept?.wellnessLeave}</td>
                                <td>
                                {/* link to update department form */}
                                <Link to={`/update/department/${dept?.deptcode}`} >
                                <button className="btn btn-secondary mx-2">Update</button>
                                </Link>
                              
                              <button className="btn btn-danger" onClick={()=>deleteDepartment(dept?.deptcode,dept?.deptName)}>Delete</button>
                                </td>

                            </tr>
                        )
                       })
                    }
                </tbody>
            </table>
            {
                addDepartment && <AddDepartmentForm setAddDepartment={setAddDepartment} departments={departments} setDepartment={setDepartment}/>
            }
            
            
        </div>
        </>
    )
}

export default Dashboard;