
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login()
{
    const{register,handleSubmit}=useForm();
    const navigate=useNavigate();

    function onLogin(data)
    {
        console.log(data);
        axios.get(`http://localhost:9090/userLogin/${data.username}/${data.password}`)
        .then((res)=>
        {
            console.log((res.data))
            localStorage.setItem("user",JSON.stringify(res.data));
            navigate("/dashboard");
        }
        )
        .catch((error)=>
        
            console.log(error)
        
        );
        alert("Logged in.....!!");

        
        
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onLogin)}>
            Username: <input type="text" {...register("username")}></input><br/><br/>
            Password: <input type="password" {...register("password")}></input><br/><br/>


            <button type="submit">LOGIN</button>
            </form>

        </div>
    )
}
export default Login;