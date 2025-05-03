function Profile()
{
  const userJson =  localStorage.getItem("user");
  const {username,userType} = JSON.parse(userJson);
 

  
  
return(
        <div>
            {/* <h1>Profile</h1> */}
            
            <div style={{ backgroundColor: 'lightblue', width: '250px', padding: '10px' }}>
           <strong>Username:</strong> {username}
      </div>
      <div style={{ backgroundColor: 'lightblue', width:'250px', padding: '20px' }}>
            <strong>User Type:</strong> {userType}
      </div>
        </div>
    )
}
export default Profile;