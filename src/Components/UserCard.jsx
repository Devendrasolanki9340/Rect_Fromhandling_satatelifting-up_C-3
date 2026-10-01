
// const UserCard = () => {
//   return (
//     <div className="h-4 flex flex-col gap-4 border-gray-400 border rounded bg-white">
//       <div className="w-50 h-60 border rounded overflow-hidden ">
//         <img className="h-full w-full" src="" alt="" />
//       </div>
//       <div>
//         <h1>Name</h1>
//         <p>email</p>
//       </div>
//       <button>Delete</button>
//     </div>
//   )
// }

// export default UserCard


const UserCard = ({user}) => {
  return (
    <div className="w-64 flex flex-col gap-4 p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-60 rounded-lg overflow-hidden bg-gray-100">
        <img
          className="h-full w-full object-cover"
          src={user.image}
          alt=""
        />
      </div>

      <div className="">
        <h1 className="text-base font-semibold text-gray-900">{user.name}</h1>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      <button className="w-full py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
        Delete
      </button>
    </div>
  )
}

export default UserCard