import axios from "axios"
import { useState } from "react"
import { resolvePath } from "react-router-dom"

const employeeUrl = "http://localhost:8081/api/employees"
const leaveUrl = "http://localhost:8081/api/leaves"
const deptUrl = "http://localhost:8081/api/department"

// methods associated to employee user


const getEmployeeById = async (id,token) => {
    try {
        const res = await axios.get(`${employeeUrl}/${id}`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

const getEmployeeByUsername = async (employee,token) => {
    
    try {
        const res = await axios.post(`${employeeUrl}/user`,employee,{
            headers:{
                Authorization:'Bearer ' + token
            }
        });
        return res;
    } catch (error) {

        return error;
        
    }
}


const applyLeave = async (token,leave) => {
   console.log(token)
    try {
        const res = await axios.post(`${leaveUrl}`,leave,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}


const getAllLeavesByEmployeeId = async (empId,token) => {
    console.log(empId)
    try {
        const res = await axios.get(`${leaveUrl}/employee/${empId}`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}



// method associated with manager
const getAllLeaves = async (token) => {
    try {
        const res = await axios.get(leaveUrl,{
            headers:{
                'Authorization':'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

const updateStatusofLeaveByLeaveId = async (id,token,leave) => {
    console.log(id)
    console.log(token)
    console.log(leave)
    try {
        const res = await axios.put(`${leaveUrl}/${id}`,leave,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}


// methods related to admin
const getAllDepartment = async (token) => {
    try {
        const res = await axios.get(deptUrl,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

const getAllEmployee = async (token) => {
    try {
        const res = await axios.get(employeeUrl,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}


const addDepartment = async (token,department) => {
    try {
        const res = await axios.post(deptUrl,department,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })

        return res;
    } catch (error) {
        return error;
    }
}


const addNewEmployee = async (token,employee) => {
    try {
        const res = await axios.post(employeeUrl,employee,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })

        return res;


    } catch (error) {
        return error;
    }
}


const updateDepartmentByDeptCode = async (token,deptCode,department) => {

    try {
        const res = await axios.put(`${deptUrl}/${deptCode}`,department,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

const updateEmployeeByEmployeeId = async (id,employee,token) => {
    try {
        const res = await axios.put(`${employeeUrl}/${id}`,employee,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })

        return res;
    } catch (error) {
        return error;
    }
}

const deleteDepartmentByDeptCode = async (deptCode,token) => {
    try {
        const res = await axios.delete(`${deptUrl}/${deptCode}`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

const deleteEmployeeByEmployeeId = async (id,token) => {
    try {
        
        const res = await axios.delete(`${employeeUrl}/${id}`,{
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

const getDepartmentByDeptCode = async (deptcode,token) =>{
        try {
            const res = await axios.get(`${deptUrl}/${deptcode}`,{
                headers:{
                    Authorization:'Bearer ' + token
                }
            })

            return res;
        } catch (error) {
            return error;
        }
}


export {getEmployeeById,getEmployeeByUsername,getAllLeavesByEmployeeId,applyLeave,
    getAllLeaves,updateStatusofLeaveByLeaveId,
    getAllDepartment,getAllEmployee,addDepartment,addNewEmployee,updateDepartmentByDeptCode,updateEmployeeByEmployeeId,deleteDepartmentByDeptCode,deleteEmployeeByEmployeeId,getDepartmentByDeptCode
}



