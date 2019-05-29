const models=require('./models');
const users=models.users;

//delete a user . Means soft delete only . Make it Inactive . Update its Attribute active : false
const deleteUser = (userID) =>{
  return new Promise((resolve,reject)=>{
    users.updateOne({_id : userID},{$set:{active : false}} ,(err,result)=>{
      if(!err)
        resolve(result)
      else reject(err)
    })
  })
}

//user search by params 
const searchUser =(searchObj) =>{

  return new Promise((resolve,reject)=>{
    users.find(searchObj,(err,result)=>{
      if(!err)
          resolve(result)
        else reject(err)
    })
  });
} 
//get user details by ID
const getUserDetailsByID= (userID) =>{

  return new Promise((resolve,reject)=>
  {
    console.log(userID)
    //var regex = new RegExp(["^", userID, "$"].join(""), "i");
    var regex = new RegExp(userID, "i");
    //users.find({"lastname" : regex},(err,result)=>{
    users.findById(userID,(err,result)=>{
        if(!err)
          resolve(result)
        else reject(err)
    })
  });
}

//get all users 
const getUsers = ()=>
{
     return new Promise((resolve, reject) => {
            console.log(users)
            users.find((err,result)=>{
                if(!err)
                resolve(result)
                else reject(err)
            });
        });
}


//add a new user to users model
const addUser = (data) => {
    return new Promise((resolve, reject)=> {
          let usersInstance = new users(data);
          usersInstance.save((err,result)=>{
                if(!err){
                    resolve(result)}
                 else reject(err)
            });
     });
  
  };


module.exports.getUsers=getUsers;
module.exports.addUser=addUser; 
module.exports.getUserDetailsByID=getUserDetailsByID;
module.exports.searchUser=searchUser;
module.exports.deleteUser=deleteUser;