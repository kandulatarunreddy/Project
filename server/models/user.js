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

function getUsers(){
    return users;
}

module.exports={getUsers};