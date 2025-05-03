import { Link } from "react-router-dom";


function SideNav()
{
    const userJson=localStorage.getItem("user");
    const {userType}=JSON.parse(userJson);
    const options={
        ADMIN:[
            {label:"Add Employee", to:"/dashboard/addemployee"},
            {label:"View Employee", to:"/dashboard/viewemployee"}
            
        ],
        CRM:[
            {label:"Add Enquiry", to:"/dashboard/addenquiry"},
            {label:"View Enquiry", to:"/dashboard/viewenquiry"}
            
        ]
    }
    return(
        <div>
            
            {/* <h1>SideNav</h1> */}
            <div className="mx-auto" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            {
                options[userType].map((btn,index)=> <Link className="btn btn-success m-2" style={{width:"40%"}} key={index} to={btn.to}>{btn.label}</Link> )
            }
            </div>
        </div>
    )
}
export default SideNav;