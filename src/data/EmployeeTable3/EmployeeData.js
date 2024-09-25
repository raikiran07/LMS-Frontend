import { Link } from "react-router-dom";


const employeeData = [
    {employeedataleft:"Weekly Calender", employeedataright:"Mon-Fri"},
    {employeedataleft:"Holiday Calender", employeedataright:<Link to="/holiday" className="holiday">Holidays</Link>},
    {employeedataleft:"Login Time", employeedataright:"10:00"},
    {employeedataleft:"Logout Time", employeedataright:"19:00"},
    {employeedataleft:"Shift", employeedataright:"USA"},
]


export default employeeData;