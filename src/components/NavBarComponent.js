import { useState } from 'react';
import logo from '.././images/adp_logo.jpg';
import userProfile from '.././images/user_red.png';
import '../styles/NavBarComponent.css'
import {useNavigate} from 'react-router-dom'


function NavBarComponent({user,activeEmpProfile,setActiveEmpProfile}) {
    const navigate = useNavigate();

    const handleBack = () => {
            navigate(-1);
    }

    // function for displaying profile details
    const handleProfileDisplay = () => {
            setActiveEmpProfile(true)
    }


    return (
        <div className='content-w-100'>
            <nav className="navbarr">
                <div className="navbarr-left" style={{cursor:"pointer"}} onClick={handleBack}>
                    <img className="logo" src={logo} width="auto" height="50px"/>
                       
                
                </div>
                
              
                
                 <div className="navbarr-right relative">
                    <img className="employee-logo" src={userProfile} alt="employee_logo" width="auto"
                        height="50px"/>
                        
                    <span className='employee-name' style={{cursor:"pointer",fontWeight:"bold"}} onClick={handleProfileDisplay}>Hello, {user?.slice(0,1).toUpperCase()+user?.slice(1)}</span>

                </div>
               
                
            </nav>
        </div>
    );
}

export default NavBarComponent;