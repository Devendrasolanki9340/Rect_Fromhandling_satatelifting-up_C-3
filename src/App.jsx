// import Login from "./Components/Login"
import Register from "./Components/Register"
import { useState } from "react"
import UserCard from "./Components/UserCard"

const App = () => {

    const [toggle, setToggle] = useState(true)
     const [users, setUsers] = useState([])  

  return (
    <div className="bg-gray-300 h-screen  ">
        <Register setUsers={setUsers} setToggle={setToggle}/>
        <div className="flex gap-4 ">
        {users.map((elem)=>(<UserCard user ={elem}/> ))}: 
        </div>
    </div>
  )
}

export default App
