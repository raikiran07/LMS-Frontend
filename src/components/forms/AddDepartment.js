
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { addDepartment} from '../../api/api';


// Adding new department form by admin

const AddDepartment = ({setAddDepartment,departments,setDepartment}) => {

  const token = localStorage.getItem("token")

    const [newDepartment,setNewDepartment] = useState({
      deptcode:null,
      deptName:null,
      casualLeave:null,
      priviledgeLeave:null,
      wellnessLeave:null,
      differnce:null
    });
   const navigate = useNavigate()

  //function to handle change
  const handleDatachange=(e, identifier)=>{
    setNewDepartment(prevState=>({
        ...prevState,[identifier]:e.target.value
    }));
}


 
  // close form functionality
  const handleClose = () => {
    setAddDepartment(false);
  }


// function to add department
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const res = await addDepartment(token,newDepartment);
    departments.push(newDepartment);
    handleClose();
    // navigate('/admin')
}



    return (
        <>
      
        <div className='common-form addDepartment'>

       
       <form  onSubmit={handleSubmit} className="addForm" >
        <p className='close-btn-container'>
          <span className='close-btn' onClick={handleClose}>&#x2715;</span>
        </p>
  <div className="form-group">
    <label htmlFor="deptcode" style={{fontWeight:"bold"}}>Enter Department code</label>
    <input type="number" name="deptcode" class="form-control" id="deptcode" placeholder="Enter deptcode" 
    value={newDepartment.deptcode}
    onChange={(e)=>handleDatachange(e,'deptcode')}
    required
    />
   
  </div>
  <div className="form-group">
    <label htmlFor="deptName" style={{fontWeight:"bold"}}>Enter Department Name</label>
    <input type="text" name="deptName" class="form-control" id="deptName" placeholder="Enter deptName" 
    value={newDepartment.deptName}
    onChange={(e)=>handleDatachange(e,'deptName')}
    required
    />
   
  </div>
  <div className="form-group">
    <label htmlFor="casualLeave" style={{fontWeight:"bold"}}>Enter Casual Leave</label>
    <input type="number" name="casualLeave" class="form-control" id="casualLeave" placeholder="Enter casualLeave"
     value={newDepartment.casualLeave}
     onChange={(e)=>handleDatachange(e,'casualLeave')}
    required
     />
  </div>
  <div className="form-group">
    <label htmlFor="priviledgeLeave" style={{fontWeight:"bold"}}>Enter Privilege Leave</label>
    <input type="number" name="priviledgeLeave" class="form-control" id="priviledgeLeave" placeholder="Enter privilegeLeave"
    value={newDepartment.priviledgeLeave}
    onChange={(e)=>handleDatachange(e,'priviledgeLeave')}
     />
  </div>
  <div className="form-group">
    <label htmlFor="wellnessLeave" style={{fontWeight:"bold"}}>Enter Wellness Leave</label>
    <input type="text" name="wellnessLeave" class="form-control" id="wellnessLeave" placeholder="Enter wellnessLeave"
     value={newDepartment.wellnessLeave}
     onChange={(e)=>handleDatachange(e,'wellnessLeave')}
     />
  </div>

 
 
  <button type="submit" class="btn btn-primary">ADD</button>
</form>
</div>
      </>
    )
}


export default AddDepartment;