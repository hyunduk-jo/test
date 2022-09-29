import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateUser(){
    const navigate = useNavigate();
   
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    
    const onEmailHandler = e => {
        setEmail(e.target.value);
    }

    const onNameHandler = e => {
        setName(e.target.value);
    }

    const onPasswordHandler = e => {
        setPassword(e.target.value);
    }

    const onSubmitUserInfo = (e) => {
        e.preventDefault()
        axios.post('http://mark.wrkm.net/v1/auth/register/local',{email, name, password}).then(res => console.log(res)) 
    }

    const goUserList = e =>{
        navigate('/users')
    }

    return<>
    <form onSubmit={ onSubmitUserInfo }>
        <input type='email' placeholder="email" onChange={ onEmailHandler }/>
        <input type='text' placeholder="name" onChange={ onNameHandler }/>
        <input type='password' placeholder="password" onChange={ onPasswordHandler }/>
        <input type='submit' value="사용자 생성" />
    </form> 
    <button onClick={ goUserList } >사용자 목록가기</button>
    </> 
  
}