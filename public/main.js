import {
    fetchData, setCurrentUser, setCurrentNote,getCurrentUser, getCurrentNote
} from "./fetch.js";

const register=document.getElementById("registration");
if(register) register.addEventListener('submit',registerUser)

function registerUser(e){

    e.preventDefault();

    let firstName=document.getElementById('fname').value;
    let lastName=document.getElementById('lname').value;
    let userName=document.getElementById('uname').value;
    let password=document.getElementById('psw').value;
    let repeatPassword=document.getElementById('psw-repeat').value;

    const registerdUser = new Register(firstName,lastName,userName,password,repeatPassword);
    console.log(registerdUser);
    console.log("hello register");
    fetchData("/users/register", registerdUser, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
    document.getElementById("registration").reset();
}
class Register{
    constructor(firstName,lastName,userName,password,repeatPassword)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.userName=userName;
        this.password=password;
        this.repeatPassword=repeatPassword;
    }
   
    getFirstName() {
        return this.firstName;
      }
    getLastName() {
        return this.lastName;
    }
    getUserName(){
        return this.userName;
    }
    getPassword(){
        return this.password;
    }
    getRepeatPassword(){
        return this.repeatPassword;
    }
    setFirstName(firstName) {
        this.firstName=firstName;
      }
    setLastName(lastName) {
        this.lastName=lastName;
    }
    setUserName(userName){
        this.userName=userName;
    }
    setPassword(password){
        this.password=password;
    }
    setRepeatPassword(repeatPassword){
        this.repeatPassword=repeatPassword;
    }
}

let login=document.getElementById("login");
if(login) login.addEventListener('submit',loginUser);

function loginUser(e){
    
    e.preventDefault();
    console.log("hiii");
    let userName=document.getElementById('uname').value;
    let password=document.getElementById('psw').value;

    
    const loggedInUserDetails = new User(userName,password);
    console.log(loggedInUserDetails);
    fetchData("/users/login", loggedInUserDetails, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    }) 
    document.getElementById("login").reset();
}

class User{
    constructor(userName,password)
    {
        this.userName=userName;
        this.password=password;
    }
    getUserName(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    setUserName(userName){
        this.userName=userName;
    }
    setPassword(password){
        this.password=password;
    }
}

/*
class User{

    constructor(username,password){

        this.userName=username;
        this.password=password;
    }

    getUsername(){
        return this.userName;
    }

    setUsername(name_parameter){
        this.userName=name_parameter;
    }

    getPassword(){
        return this.password;
    }

    setPassword(passcode_parameter){
        this.password=passcode_parameter;
    }
}
*/
// Register Page Details



// Note Page Details


const noteform=document.getElementById("note_form");
if(noteform) noteform.addEventListener('submit',noteSaving);

function noteSaving(e){
    //console.log("zzzz");
    e.preventDefault();
    let note1=document.getElementById('note_id').value;
   //console.log("hii");
    const note = new Note(note1);
    //console.log("hii2");
    console.log(note);
    let user=getCurrentUser();
    note.userID=user.userID;
    fetchData("/notes/create", note , "POST")
    .then((data) => {
      console.log(data);
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
    //document.getElementById("note").reset();   
}
class Note{
    constructor(enteredNotes)
    {
        this.note=enteredNotes;
    }
    getnote(){
        return this.note;
    }
    setnote(enteredNotes){
        this.note=enteredNotes;
    }
}

//User Details using a button click.
const usersDetails=document.getElementById("getDetails");

if(usersDetails) usersDetails.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users/")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let unorderdlist=document.getElementById("userDetails");

        data.forEach((user)=>{
            let li=document.createElement('li');
            let text=document.createTextNode(user.userName);
            li.appendChild(text);
            unorderdlist.appendChild(li);
        })
    })

    .catch((err)=>console.log(`error! ${err}`));
}

//Note Details using a button click.
//const noteDetails=document.getElementById("notes-btn");
//if(noteDetails) noteDetails.addEventListener('button',getNotes);

let user=getCurrentUser();
if(user && noteform) getNotes();


 function getNotes(){
    let user= getCurrentUser();
    console.log("hey",user);
     fetchData("/notes/",user,"post")
     .then((data)=>{
         let unorderdlist=document.getElementById("allNotes");

         data.forEach((note)=>{
            console.log("t2",note);
             let li=document.createElement('li');
             let text=document.createTextNode(note.note);
             //let text=document.createTextNode("t1");
             li.appendChild(text);
             unorderdlist.appendChild(li);

         })


     })
     .catch((err)=>console.log(`Error! ${err}`));
   //  window.location.href="note.html";
 }


