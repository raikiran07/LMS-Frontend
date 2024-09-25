
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBarComponent from '../NavBarComponent';
import { getDepartmentByDeptCode,updateDepartmentByDeptCode } from '../../api/api';


// Adding new department form by admin

const UpdateDepartment = ({deparments,setDepartment}) => {

  const params = useParams();
  
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  const user = localStorage.getItem("user")
 


    const [currentDepartment,setCurrentDepartment] = useState({});

    useEffect(()=>{
      
      return async ()=>{
        const res = await getDepartmentByDeptCode(Number(params.deptcode),token);
        const dept = res.data;
     
        setCurrentDepartment({
          deptcode:dept?.deptcode,
          deptName:dept?.deptName,
          casualLeave:dept?.casualLeave,
          priviledgeLeave:dept?.priviledgeLeave,
          wellnessLeave:dept?.wellnessLeave

        })
      }


    },[])

      //function to handle change
  const handleDatachange=(e, identifier)=>{
    setCurrentDepartment(prevState=>({
        ...prevState,[identifier]:e.target.value
    }));
}

  const handleClose = () => {
    navigate("/admin")
  }


    async function handleSubmit(e){
      e.preventDefault();
      const token = localStorage.getItem("token")
     
      try {
          const res = await updateDepartmentByDeptCode(token,currentDepartment.deptcode,currentDepartment)
          console.log(res)
          alert(res.data)
          console.log(currentDepartment)
          navigate(-1);
        } catch (error) {
          
          console.log(error)
          alert("something went wrong")
        }
    }

return (
        <>
        <NavBarComponent user={user} />
        <h1>Update Department</h1>
       <form  onSubmit={(e)=>handleSubmit(e)} className="common-form updateDepartmentForm" >
       <p className='close-btn-container'>
          <span className='close-btn' onClick={handleClose}>&#x2715;</span>
        </p>
  <div className="form-group">
    <label htmlFor="deptCode" style={{fontWeight:"bold"}}>Enter Department code</label>
    <input type="number" name="deptcode" class="form-control" id="deptCode" placeholder="Enter deptcode" 
    value={currentDepartment.deptcode}
    onChange={(e)=>handleDatachange(e,"deptcode")}
    readOnly="true"
    />
   
  </div>
  <div className="form-group">
    <label htmlFor="empEmail" style={{fontWeight:"bold"}}>Enter Department Name</label>
    <input type="text" name="deptName" class="form-control" id="deptName" placeholder="Enter deptName" 
    value={currentDepartment.deptName}
    onChange={(e)=>handleDatachange(e,"deptName")}
    required
    />
   
  </div>
  <div className="form-group">
    <label htmlFor="casualLeave" style={{fontWeight:"bold"}}>Enter Casual Leave</label>
    <input type="number" name="casualLeave" class="form-control" id="casualLeave" placeholder="Enter casualLeave"
    value={currentDepartment.casualLeave}
    onChange={(e)=>handleDatachange(e,"casualLeave")}
    required
     />
  </div>
  <div className="form-group">
    <label htmlFor="privilegeLeave" style={{fontWeight:"bold"}}>Enter Privilege Leave</label>
    <input type="number" name="privilegeLeave" class="form-control" id="privilegeLeave" placeholder="Enter privilegeLeave"
     value={currentDepartment.priviledgeLeave}
     onChange={(e)=>handleDatachange(e,"priviledgeLeave")}
    required
     />
  </div>
  <div className="form-group">
    <label htmlFor="wellnessLeave" style={{fontWeight:"bold"}}>Enter Wellness Leave</label>
    <input type="text" name="wellnessLeave" class="form-control" id="wellnessLeave" placeholder="Enter wellnessLeave"
     value={currentDepartment.wellnessLeave}
     onChange={(e)=>handleDatachange(e,"wellnessLeave")}
    required
     />
  </div>

 
 
  <button type="submit" class="btn btn-primary">UPDATE</button>
</form>
        </>
    )
}


export default UpdateDepartment;