import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
function Profile() {
    const { user } = useContext(UserContext)

  if(!user) return <div>Please login</div>

  return <div>Hello {user.username}</div>
}

export default Profile