import logo from "../../images/adp_logo.jpg";
import user from "../../images/user_red.png"
import LoginForm from "./LoginForm";
import "../../styles/Login.css"




export default function LoginComponent() {
    return (
      <>

          <div className='content-w-100'>
                      <nav className="navbarr">
                          <div className="navbarr-left">
                              <img className="logo" src={logo} width="auto" height="50px"/>
                                  {/* <span className='brand-name'> Automatic Data Processing </span> */}
                          </div>
                          
                          {/* <div className="navbarr-right">
                              <img className="employee-logo" src={user} alt="employee_logo" width="auto"
                                  height="50px"/>
                                  
                              <span className='employee-name'>Name Of Employee</span>
                          </div> */}
                          
                          
                      </nav>
                  </div>

        <div className='container' id="loginpage">
        <LoginForm/>
        </div>
      
      </>
      
    )
  }