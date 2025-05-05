function Profile()
{
  const userJson =  localStorage.getItem("user");
  const {username,userType,userImage} = JSON.parse(userJson);
 

  
  
return(
        <div>
            {/* <h1>Profile</h1> */}
            
              <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
            <img src={'data:image/jpeg;base64, '+userImage} height={100} />
            <br/>
           <strong>Username:</strong> {username}
           
      </div>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
            <strong>User Type:</strong> {userType}
      </div>
        </div>
        
    )
}
export default Profile;