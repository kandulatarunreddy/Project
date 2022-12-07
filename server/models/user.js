const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllUsers() {
    const sql = `SELECT * FROM users;`;
    let users = await con.query(sql);
    console.log(users)
  }


// Create  User - Registering
async function register(user) {
    let cUser = await getUser(user);
    //if(cUser.length > 0) throw Error("username already in use");
  
    const sql = `INSERT INTO users(userName,password)
      VALUES ("${user.userName}","${user.password}");
    `
    await con.query(sql);
    return await login(user);
  }

  
  // Read User -- login user
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = await getUser(user); //[{userName: "cathy123", password: "icecream"}]
    
    if(!cUser[0]) throw Error("username not found");
    if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  async function editUser(user){
    let sql=`update users SET userName="${user.userName}" where userID=${user.userID}`;

    await con.query(sql);
    let updatedUser=await getUser(user);

    return updatedUser[0];


}

async function deleteUser(user){
    let sql=`Delete from users where userID=${user.userID}`;

    await con.query(sql);
}

async function getUser(user){
    let sql;

    if(user.userID){
        sql=`select * from users where userID=${user.userID}`;

    }
    else{
        sql=`select * from users where userName="${user.userName}"`;
    }

    return await con.query(sql);
}
    
// just to test the functions

// let cathy={
//     userName:"cat",
//     password:"123"

// };

module.exports={getAllUsers,login,register,editUser,deleteUser};

/*
// This would be in the database.
const users =[
    {
        userId:1,
        userName:"kaitlin",
        password:"!!!"
    },
    {
        userId:2,
        userName:"hoffmann",
        password:"@@@"
    },
    {
        userId:3,
        userName:"tarun",
        password:"###"
    },
];
*/