
import "../../styles/Login.css"
import {Link,useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
    const navigate = useNavigate()

    const [username,setUsername] = useState(null);
    const [empPassword,setPassword] = useState(null);
    const [error,setError] = useState(false)
    const [errorMsg,setErrorMsg] = useState(null)
    const [isloading,setIsloading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            
            setIsloading(true)

            const res = await axios.post('http://localhost:8081/api/login',{username,empPassword});
          
            const {role,username:user,token,empId} = await res.data;
            
            console.log(res)
            localStorage.setItem("role",role);
            localStorage.setItem("user",user);
            localStorage.setItem("token",token);
            localStorage.setItem("empId",empId);

          
            
            if(res.status==200){
                
                    if(role=="ROLE_ADMIN"){
                        navigate("/admin");
                    }
                    else if(role=="ROLE_MANAGER"){
                        navigate("/manager")
                    }
                    else{
                        navigate("/employee")
                    }
            }
           



        } catch (error) {
           
           
            setError(true)
            setIsloading(false)
            let errMsg = "";
            
            if(error?.response?.status==404){
                console.log(error.response.data)
                errMsg = error.response['data']
            }
            else if(error?.response?.status==400){
                errMsg = error.response.data['Bad credentials'];
            }
            else{
                errMsg = "Network error"

            }

            setErrorMsg(errMsg)
            setTimeout(()=>{
                setError(false)
               
            },3000)
        }
        
       
       

    }



    return (
        <>
        {
            isloading && <div className="loading-container">
                <h1>Loading...</h1>
            </div>
        }
        {
            error && <div className="errormsg">{errorMsg}</div>
        }
        <div className="form_container">
            <div className="card_around_form">
                <span id="login_details_text">Enter you login details</span>
                <form className="form form-floating mb-3" id="email" onSubmit={handleSubmit}>
                    <div className="form-group form-floating mb-3">
                    <input type="text" className="form-control" id="username" placeholder="username" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                    />
                    <label for="username" className="form-label" id='username'>Enter Username</label>
                    </div>
                    
               
                <div className="form-group form-floating" id="password">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    value={empPassword}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                     />
                    <label for="floatingPassword" className="form-label" id='pass-box'>Password</label>
                </div>
               
               {/* adding functionality to redirect user according to role */}
                <button type="submit" className="login_button">Login</button>
               </form>
                   
                
            </div>
        </div>

        </>
    )
}