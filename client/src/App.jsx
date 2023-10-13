import axios from "axios"
import React,{useEffect, useState} from "react"
import './App.css';

function App() {
  const[users,setUsers] =useState([])

  const[input,setInput] =useState({
    name:"",
    age:"",
    email:""
    
  })
  const[profile,setProfile] = useState()
  useEffect(()=>{
    const getAllUsers = async()=>{
      const allUsers = await axios.get("http://localhost:9000/api/get/user")
        setUsers(allUsers.data)
    }
    getAllUsers()
  },[])
  
  const handleSubmit = async(e)=>{
    const formData = new FormData()
    formData.append("name",input.name)
    formData.append("age",input.age)
    formData.append("email",input.email)
    formData.append("profile",profile)
    e.preventDefault()
    const result = await axios.post("http://localhost:9000/api/user",formData)
     if(result){
     
        alert("User Created Successfully")
        window.location.reload()
     } else{
      alert("Something wrong happened")
     }
  }
  return (
    <div className="App">
      <div className="heading">
        <div className="col-md-12" style={{backgroundColor:"blue"}} >
          <h1 className="text-center text-white">MERN File Uploader</h1>
        </div>
        <div className="content">
        <div className="col-md-6">
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input value={input.name} name = "name" type="text" class="form-control" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input value={input.age} name = "age" type="number" class="form-control"  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}      id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input value={input.email} name = "email" type="email" class="form-control"   onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="profile" class="form-label">Profile</label>
    <input  name = "profile" type="file" class="form-control"  onChange={(e)=>setProfile(e.target.files[0])} id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
  
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>

        <div className="col-md-6">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Profile</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>{
         return(
          <tr>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
          <td><img src={`http://localhost:9000/${user.profile}`} alt="User pic" className="img img-fluid" /></td>
          </tr>
         )
    })}
   
  </tbody>
</table>
        </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
