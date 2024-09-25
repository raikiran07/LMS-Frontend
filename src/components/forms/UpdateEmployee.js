
// import axios from 'axios';
import {useEffect, useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { getEmployeeById } from '../../api/api';
import NavBarComponent from '../NavBarComponent';
import { updateEmployeeByEmployeeId } from '../../api/api';



// Adding new employee to the table form

const UpdateEmployee = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem("token");

  const params = useParams();

  const [currentEmployee,setCurrentEmployee] = useState({
    empId:null,
    empName:null,
    empPassword:null,
    empPosition:null,
    manager:null,
    hr:null,
    wellnessLeave:null,
    casualLeave:null,
    privilegeLeave:null,
    department:{
      deptcode:null
    },
    username:null,
    role:null
    
})
 
  useEffect(()=>{

    return async ()=> {
      const res = await getEmployeeById(Number(params?.empId),token);
      const {empId,
        empName,
        empPassword,
        empPosition,
        manager,
        hr,
        wellnessLeave,
        casualLeave,
        privilegeLeave,
        department,
        username,
        role
      } = res.data;

      setCurrentEmployee(prevUser=>(
        {
          ...prevUser,
          empId,empName,empPassword:null,empPosition,manager,hr,wellnessLeave,casualLeave,privilegeLeave,department,username,role
        }
      ))


    }



  },[])

  const handleDatachange=(e, identifier)=>{
    setCurrentEmployee(prevState=>({
        ...prevState,[identifier]:e.target.value
    }));
}


 

  

    // close form functionality
    const handleClose = () => {
      navigate("/admin")
    }
  


 const handleSubmit = async (e) => {
  e.preventDefault();
   const res = await updateEmployeeByEmployeeId(Number(params.empId),currentEmployee,token);
   if(res.status==200){
    alert(`employee with id ${params.empId} is updated successfully`)
   }
   navigate(-1);

 }



    return (
        <>
        <NavBarComponent user={localStorage.getItem("user")}/>
        <h1>Update Employee</h1>
      <form  onSubmit={handleSubmit} className="addForm common-form updateEmployeeForm" >
       <p className='close-btn-container'>
          <span className='close-btn' onClick={handleClose}>&#x2715;</span>
        </p>
      <div className='flex-form-group'>

                        <div className="form-group">
                      <label htmlFor="id" style={{fontWeight:"bold"}}>Enter Employee Id</label>
                      <input type="number" name="id" class="form-control" id="id" aria-describedby="emailHelp" placeholder="Enter Id" 
                      value={currentEmployee.empId}
                      onChange={(e)=>handleDatachange(e,'empId')}
                      readOnly="true"
                      />
                    
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="empName" style={{fontWeight:"bold"}}>Enter name</label>
                      <input type="text" name="empName" class="form-control" id="empName" placeholder="Enter name"
                      value={currentEmployee.empName}
                      onChange={(e)=>handleDatachange(e,'empName')}
                      required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" style={{fontWeight:"bold"}}>Enter Username</label>
                      <input type="text" name="username" class="form-control" id="username" placeholder="Enter username"
                      value={currentEmployee.username} onChange={(e)=>handleDatachange(e,'username')}
                      required
                      />
                    </div>

      </div>

      <div className='flex-form-group'>

                        <div className="form-group">
                      <label htmlFor="empPassword" style={{fontWeight:"bold"}}>Password cannot be changed</label>
                      <input type="text" name="empPassword" class="form-control" id="empPassword" placeholder="Enter password"
                      value={`****************`}
                      // onChange={(e)=>handleDatachange(e,'empPassword')}
                      required
                      readOnly="true"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="deptCode" style={{fontWeight:"bold"}}>Enter Department Code</label>
                      <input type="text" name="deptcode" class="form-control" id="deptCode" placeholder="Enter department code"
                      value={currentEmployee.department.deptcode}
                      onChange={(e)=>handleDatachange(e,'deptcode')}
                      required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="position" style={{fontWeight:"bold"}}>Enter Position</label>
                      <input type="text" name="empPosition" class="form-control" id="position" placeholder="Enter Position"
                      value={currentEmployee.empPosition}
                      onChange={(e)=>handleDatachange(e,'empPosition')}
                      required
                      />
                    </div>


      </div>

      <div className='flex-form-group'>
                        <div className="form-group">
                      <label htmlFor="hr" style={{fontWeight:"bold"}}>Enter Hr</label>
                      <input type="text" name="hr" class="form-control" id="hr" placeholder="Enter hr"
                      value={currentEmployee.hr}
                      onChange={(e)=>handleDatachange(e,'hr')}
                      
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="manager" style={{fontWeight:"bold"}}>Enter Manager</label>
                      <input type="text" name="manager" class="form-control" id="manager" placeholder="Enter manager"
                      value={currentEmployee.manager}
                      onChange={(e)=>handleDatachange(e,'manager')}
                      
                      />
                    </div>

                    {/* role cannot be changed for now */}
                    <div className="form-group">
                      <label htmlFor="role" className='select-box-label' style={{fontWeight:"bold"}}>Select role</label>
                      <select name="role" id="role" className='select-box' value={currentEmployee.role} readOnly="true">
                          <option value="ROLE_EMPLOYEE">Employee</option>
                          <option value="ROLE_MANAGER">Manager</option>
                          <option value="ROLE_ADMIN">Admin</option>
                      </select>
                      {/* <input type="text" name="role" class="form-control" id="role" placeholder="Enter role"
                      value={role}
                      onChange={(e)=>setRole(e.target.value)}
                      required
                      /> */}
                    </div>

      </div>

      <div className='flex-form-group'>

                            <div className="form-group">
                          <label htmlFor="casualLeave" style={{fontWeight:"bold"}}>Enter Casual Leave</label>
                          <input type="text" name="casualLeave" class="form-control" id="casualLeave" placeholder="Enter casualLeave"
                          value={currentEmployee.casualLeave}
                          onChange={(e)=>handleDatachange(e,'casualLeave')}
                          required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="privilegeLeave" style={{fontWeight:"bold"}}>Enter Privilege Leave</label>
                          <input type="text" name="privilegeLeave" class="form-control" id="privilegeLeave" placeholder="Enter privilegeLeave"
                          value={currentEmployee.privilegeLeave}
                          onChange={(e)=>handleDatachange(e,'privilegeLeave')}
                          required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="wellnessLeave" style={{fontWeight:"bold"}}>Enter Wellness Leave</label>
                          <input type="text" name="wellnessLeave" class="form-control" id="wellnessLeave" placeholder="Enter wellnessLeave"
                          value={currentEmployee.wellnessLeave}
                          onChange={(e)=>handleDatachange(e,'wellnessLeave')}
                          required
                          />
                        </div>

      </div>
 <button type="submit" class="btn btn-primary">UPDATE</button>
</form>
        </>
    )
}


export default UpdateEmployee;