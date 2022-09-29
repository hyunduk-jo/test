import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function UserEdit(){

    const {id} = useParams();

    const [name, setName] = useState(null);

    const onNameHandler = e => {
        setName(e.target.value);
    }

    const onSubmitUserInfo = (e) => {
        e.preventDefault()
        axios.put(`http://mark.wrkm.net/v1/users/${id}`,{name}).then(res => console.log(res)) 
    }

    useEffect(()=>{
        axios.get(`http://mark.wrkm.net/v1/users/${id}`).then(res => setName(res.data.data.name))
    },[id])


    return<>
        <form onSubmit={ onSubmitUserInfo }>
            <input type='text' placeholder="name" onChange={ onNameHandler } defaultValue={name}/>
            <input type='submit' value="사용자 수정" />
        </form> 
    </>

}