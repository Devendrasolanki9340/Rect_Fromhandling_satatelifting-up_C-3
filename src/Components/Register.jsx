import { useState } from "react";
const Register = ({ setToggle,setUsers }) => {
  const [fromdata, setFromData] = useState({
    name:"",
    email:"",
    password:"",
    image:"",
  });

  


  const handleChange = (e) => {
    let { name, value } = e.target;
    setFromData({ ...fromdata, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUsers((prev)=>[...prev, fromdata])   
    setFromData({
        name:"",
        email:"",
        password:"",
        image:"",
    }) 
  }

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-3">
      <h1>Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
         required
         value={fromdata.name}
          name="name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded "
          type="text"
          placeholder="Name"
        />
        <input 
          required
          value={fromdata.email}
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded "
          type="text"
          placeholder="Email"
        />

        <input
          required
          value={fromdata.password}
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded "
          type="password"
          placeholder="Password"
        />

          <input 
          required
          value={fromdata.image}
          name="image"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded "
          type="url"
          placeholder="Image"
        />

        <button className="p-2 bg-blue-600 text-white">Register</button>
      </form>

      <p>
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
