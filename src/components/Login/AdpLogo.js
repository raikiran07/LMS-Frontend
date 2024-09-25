import React from 'react'
// import {adplogo} from "../../images/adp_logo.jpg";
import {adp_logo} from "../../images/adp_log.jpg"

export default function AdpLogo() {
    return (
        <div className="welcome_container">
          <img src={adp_logo} alt="adp logo"/>
          <span id="lms_text">Leave Management System</span>
      </div>
    )
  }