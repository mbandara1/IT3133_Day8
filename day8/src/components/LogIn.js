import {useNavigate} from "react-router-dom";
export default function LogIn(params) {
    const navigation=useNavigate();
    const authentication=()=>{
        navigation('/DashBoard')
    }
    return(
        <div>
            <h1>LogIn Here</h1>
            User Name <input type="text"></input><br></br>
            Password <input type="password"></input><br></br>

            <botton onClick={authentication}>LogIn</botton>
        </div>
    )
}