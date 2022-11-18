// This would be in the database.
const notes=[{
    noteId:1,
    noteContent:"Welcome"
},{
    noteId:2,
    noteContent:"TO Web Programming"
},
{
    noteId:3,
    noteContent:"Project"
},
];

function getNotes(){
    return notes;
}

module.exports={getNotes};