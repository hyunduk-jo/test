import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function UserList(){
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://mark.wrkm.net/v1/users').then(res => setUsers(res.data.data))
    },[])

    const goUserDetail = (id)=>{
        navigate(`/users/${id}`)
    }

    return <>
        {
           users.map(user => 
            <h1 style={{background: 'yellow'}} key={user.id}
            onClick={()=> goUserDetail(user.id)}>{user.name}</h1>)
        }
    </>
}