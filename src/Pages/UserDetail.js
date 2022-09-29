import axios from "axios"
import { useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";


export default function UserDetail(){  
    const {id} = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
  
    useEffect(()=>{
        axios.get(`http://mark.wrkm.net/v1/users/${id}`).then(res => setUser(res.data.data))
    },[id])

    const goUserEdit = () => {
        navigate(`/users/${id}/edit`)
    }

    const DeleteUSer = () => {
        axios.delete(`http://mark.wrkm.net/v1/users/${id}`).then(res => console.log(res))
    }

    if(!user)
        return <h1>Loading...</h1>

    return<>
        <h1>{user.id}</h1>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h4>{user.creates_at}</h4>
        <h5>{user.updated_at}</h5>
        <button 
        onClick={goUserEdit}>수정하기</button>
        <button 
        style={{background:'red'}}
        onClick={DeleteUSer}>삭제하기</button>
    </>
}