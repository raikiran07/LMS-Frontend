
// import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import NavBarComponent from '../NavBarComponent';
import { addNewEmployee } from '../../api/api';


// Adding new employee to the table form

const AddEmployee = () => {
    const userRoles = ["ROLE_USER","ROLE_MANAGER","ROLE_ADMIN"];
    const [empName,setempName] = useState(null);
    const [empId,setempId] = useState(null);
    const [username,setUsername] = useState(null);
    const [empPassword,setempPassword] = useState(null);
    const [deptcode,setDeptCode] = useState(null);
    const [empPosition,setempPosition] = useState(null);
    const [hr,setHr] = useState(null)
    const [manager,setManager] = useState(null)
    const [role,setRole] = useState(userRoles[0])
    const [casualLeave,setCasualLeave] = useState(null);
    const [privilegeLeave,setPrivilegeLeave] = useState(null);
    const [wellnessLeave,setWellnessLeave] = useState(null)

   const navigate = useNavigate()
   const user = localStorage.getItem("user")
 

  // handle close function
   // close form functionality
   const handleClose = () => {
    navigate("/admin")
  }


    const handleSubmit = async(e)=>{

        e.preventDefault();
        const token = localStorage.getItem("token")
        
        const employee={
          empId,
          empName,
          username,
          empPosition,
          empPassword,
          department:{
            deptcode
          },
          hr,
          manager,
          role,
          casualLeave,
          privilegeLeave,
          wellnessLeave
          }


  const res = await addNewEmployee(token,employee);


  navigate(-1);

        

        
    
 }



    return (
        <>
        <NavBarComponent user={user} />
       

        <h1>Add Employee</h1>
  <form  onSubmit={handleSubmit} className="addForm common-form addEmployeeForm" >
        
       <p className='close-btn-container'>
          <span className='close-btn' onClick={handleClose}>&#x2715;</span>
        </p>
    <div className='flex-form-group'>
                  <div className="form-group">
              <label htmlFor="id" style={{fontWeight:"bold"}}>Enter Employee Id</label>
              <input type="number" name="id" class="form-control" id="id" aria-describedby="emailHelp" placeholder="Enter Id" 
              value={empId}
              onChange={(e)=>setempId(e.target.value)}
              required
              />
            
            </div>
          
            <div className="form-group">
              <label htmlFor="name" style={{fontWeight:"bold"}}>Enter name</label>
              <input type="text" name="name" class="form-control" id="name" placeholder="Enter name"
              value={empName}
              onChange={(e)=>setempName(e.target.value)}
              required
              />
            </div>

                        <div className="form-group">
                <label htmlFor="username" style={{fontWeight:"bold"}}>Enter Username</label>
                <input type="text" name="username" class="form-control" id="username" placeholder="Enter username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
                />
              </div>
        </div>

  <div className='flex-form-group'>
        <div className="form-group">
            <label htmlFor="empPassword" style={{fontWeight:"bold"}}>Enter Password</label>
            <input type="text" name="empPassword" class="form-control" id="empPassword" placeholder="Enter empPassword"
            value={empPassword}
            onChange={(e)=>setempPassword(e.target.value)}
            required
            />
          </div>
          <div className="form-group">
            <label htmlFor="deptcode" style={{fontWeight:"bold"}}>Enter Department Code</label>
            <input type="number" name="deptcode" class="form-control" id="deptcode" placeholder="Enter department code"
            value={deptcode}
            onChange={(e)=>setDeptCode(e.target.value)}
            required
            />
          </div>
          <div className="form-group">
            <label htmlFor="empPosition" style={{fontWeight:"bold"}}>Enter empPosition</label>
            <input type="text" name="empPosition" class="form-control" id="empPosition" placeholder="Enter empPosition"
            value={empPosition}
            onChange={(e)=>setempPosition(e.target.value)}
            required
            />
          </div>

        </div>
                

  <div className='flex-form-group'>

                  <div className="form-group">
              <label htmlFor="hr" style={{fontWeight:"bold"}}>Enter Hr</label>
              <input type="text" name="hr" class="form-control" id="hr" placeholder="Enter hr"
              value={hr}
              onChange={(e)=>setHr(e.target.value)}
              required
              />
            </div>

            <div className="form-group">
              <label htmlFor="manager" style={{fontWeight:"bold"}}>Enter Manager</label>
              <input type="text" name="manager" class="form-control" id="manager" placeholder="Enter manager"
              value={manager}
              onChange={(e)=>setManager(e.target.value)}
              required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role" style={{fontWeight:"bold"}}>Select role</label>
             <select value={role} name="role"
             onChange={(e)=>setRole(e.target.value)}
             >
                {/* <option value="ROLE_USER">Employee</option>
                <option value="ROLE_MANAGER">Manager</option>
                <option value="ROLE_ADMIN">Admin</option> */}
                {
                  userRoles.map(value=><option value={value}>{value}</option>)
                }
             </select>
            </div>
  

     

</div>

<div className='flex-form-group'>

            <div className="form-group">
                <label htmlFor="casualLeave" style={{fontWeight:"bold"}}>Enter Casual Leave</label>
                <input type="number" name="casualLeave" class="form-control" id="casualLeave" placeholder="Enter casualLeave"
                value={casualLeave}
                onChange={(e)=>setCasualLeave(e.target.value)}
                required
                />
              </div>
            <div className="form-group">
                <label htmlFor="privilegeLeave" style={{fontWeight:"bold"}}>Enter Privilege Leave</label>
                <input type="number" name="privilegeLeave" class="form-control" id="privilegeLeave" placeholder="Enter privilegeLeave"
                value={privilegeLeave}
                onChange={(e)=>setPrivilegeLeave(e.target.value)}
                required
                />
              </div>
              <div className="form-group">
                <label htmlFor="wellnessLeave" style={{fontWeight:"bold"}}>Enter Wellness Leave</label>
                <input type="number" name="wellnessLeave" class="form-control" id="wellnessLeave" placeholder="Enter wellnessLeave"
                value={wellnessLeave}
                onChange={(e)=>setWellnessLeave(e.target.value)}
                required
                />
              </div>

</div>
<button type="submit" class="btn btn-primary">ADD</button>
</form>
        </>
    )
}


export default AddEmployee;