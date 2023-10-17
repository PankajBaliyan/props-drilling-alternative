import { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);
  if(!user) return <p>User Not found</p>
  return <p>Welcome : {user.username}</p>
}

export default Profile;
