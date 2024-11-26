import {useNavigate} from "react-router-dom";
export default function LogIn(params) {
    const navigation=useNavigate();
    const authentication=()=>{
        navigation('/DashBoard')
    }
    return(
        <div>
            <h1>LogIn Here</h1>
            <botton onClick={authentication}>LogIn</botton>
        </div>
    )
}