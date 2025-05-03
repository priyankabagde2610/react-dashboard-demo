import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import SideNav from "./SideNav";
import { Component } from "react";
import AddEmployee from "../Modules/ADMIN/AddEmployee";
import ViewEmployee from "../Modules/ADMIN/ViewEmployee";
import AddEnquiry from "../Modules/CRM/AddEnquiry";
import ViewEnquiry from "../Modules/CRM/ViewEnquiry";

function Dashboard()
{
    const userJson=localStorage.getItem("user");
    const {userType}=JSON.parse(userJson);

    console.log(userType);


    const appRoute={
        ADMIN:[
            {path:"addemployee", Component:<AddEmployee/>},
            {path:"viewemployee", Component:<ViewEmployee/>}
        ],
        CRM:[
            {path:"addenquiry", Component:<AddEnquiry/>},
            {path:"viewenquiry", Component:<ViewEnquiry/>}
        ]
        }
    
    return(
        <div>
            {/* <h1>Dashboard</h1> */}
            <div style={{backgroundColor:"lightgrey"}}>
            <Profile/>
            </div>

            <div style={{display:"flex", height:"80vh"}}>
                <div style={{backgroundColor:'lightgreen',width:"25%",display:"flex",flexDirection:"column"}}>
            <SideNav/>
            </div>
            
            <div style={{backgroundColor:'purple',width:"75%"}}>
            <Routes>
                {
                  appRoute[userType].map((mapping,index)=><Route key={index} path={mapping.path} element={mapping.Component}></Route>)
                 
                }
            </Routes>
            </div>
            </div>

        </div>
    )
}
export default Dashboard;