import {useState} from "react";
import axios from "axios";

function ChangePassword(){
const[username,setUsername]=useState("");
const[oldpassword,setOldPassword]=useState("");
const[newpassword,setNewPassword]=useState("");
const[confirmpassword,setConfirmPassword]=useState("");

const changePassword=()=>{

     if(!username.trim())
    {
        alert("Please UserName");
        return;
    }

    // Validate old password
    if(!oldpassword.trim())
    {
        alert("Please enter your old password");
        return;
    }

    // Validate new password
    if(!newpassword.trim())
    {
        alert("Please enter a new password");
        return;
    }

    // Validate password length
    if(newpassword.length < 6)
    {
        alert("Password must be at least 6 characters long");
        return;
    }

    // Validate confirm password
    if(!confirmpassword.trim())
    {
        alert("Please confirm your new password");
        return;
    }

    if(newpassword!==confirmpassword)
    {
        alert("New passwords do not match");
        return;
    }

    axios.post(
        "http://localhost:5000/api/changepassword",
        {
            oldpassword,
            newpassword,
            confirmpassword
        },
        {
            withCredentials:true
        }
    )
    .then(res=>{
        if(res.data.status)
        {
            alert(res.data.message);
            // Clear form on success
            setUsername("");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }
        else
        {
            alert(res.data.message);
        }
    })
    .catch(err=>{
        alert("Error changing password: " + (err.response?.data?.message || err.message));
    });

}

return(

<div>

<h2>Change Password</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
<input
type="password"
placeholder="Old Password"
value={oldpassword}
onChange={(e)=>setOldPassword(e.target.value)}
/>


<input
type="password"
placeholder="New Password"
value={newpassword}
onChange={(e)=>setNewPassword(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Confirm Password"
value={confirmpassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>

<br/><br/>

 
<br/><br/>

<button onClick={changePassword}>
Change Password
</button>

</div>

);

}

export default ChangePassword;