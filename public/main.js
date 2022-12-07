// Register Page Details
const register=document.getElementById("registration");
if(register) register.addEventListener('submit',registerUser)

function registerUser(e){

    e.preventDefault();

    let firstName=document.getElementById('fname').value;
    let middleName=document.getElementById('mname').value;
    let lastName=document.getElementById('lname').value;
    let dateOfBirth=document.getElementById('dob').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('psw').value;
    let repeatPassword=document.getElementById('psw-repeat').value;

    class User{
        constructor(firstName,middleName,lastName,dateOfBirth,email,password,repeatPassword)
        {
            this.firstName=firstName;
            this.middleName=middleName;
            this.lastName=lastName;
            this.dateOfBirth=dateOfBirth;
            this.email=email;
            this.password=password;
            this.repeatPassword=repeatPassword;
        }
       
        getFirstName() {
            return this.firstName;
          }
        getMiddleName() {
            return this.middleName;
        }
        getLastName() {
            return this.lastName;
        }
        getDateOfBirth() {
            return this.dateOfBirth;
        }
        getEmail(){
            return this.email;
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
        setMiddleName(middleName) {
            this.middleName=middleName;
        }
        setLastName(lastName) {
            this.lastName=lastName;
        }
        setDateOfBirth(dateOfBirth) {
            this.dateOfBirth=dateOfBirth;
        }
        setEmail(email){
            this.email=email;
        }
        setPassword(password){
            this.password=password;
        }
        setRepeatPassword(repeatPassword){
            this.repeatPassword=repeatPassword;
        }
    }

    const registerdUser = new User(firstName,middleName,lastName,dateOfBirth,email,password,repeatPassword);
    console.log(registerdUser);
    document.getElementById("registration").reset();
}

// Login Page Details
const login=document.getElementById("login");
if(login) login.addEventListener('submit',loginUser);

function loginUser(e){

    e.preventDefault();

    let email=document.getElementById('email').value;
    let password=document.getElementById('psw').value;

    class Login{
        constructor(email,password)
        {
            this.email=email;
            this.password=password;
        }
        getEmail(){
            return this.email;
        }
        getPassword(){
            return this.password;
        }
        getRepeatPassword(){
            return this.repeatPassword;
        }
        setEmail(email){
            this.email=email;
        }
        setPassword(password){
            this.password=password;
        }
        setRepeatPassword(repeatPassword){
            this.repeatPassword=repeatPassword;
        }
    }

    const loggedInUserDetails = new Login(email,password);
    console.log(loggedInUserDetails);
    document.getElementById("login").reset();
}

// Note Page Details
const note=document.getElementById("note");
if(note) note.addEventListener('submit',noteSaving);

function noteSaving(e){

    e.preventDefault();

    let date=document.getElementById('date').value;
    let noteId=document.getElementById('noteid').value;
    let enteredNotes=document.getElementById('subject').value;
    class Note{
        constructor(date,noteId,enteredNotes)
        {
            this.date=date;
            this.noteId=noteId;
            this.enteredNotes=enteredNotes;
        }
        getDate(){
            return this.date;
        }
        getNoteId(){
            return this.noteId;
        }
        getEnterdNotes(){
            return this.enteredNotes;
        }
        setDate(date){
            this.date=date;
        }
        getNoteId(noteId){
            this.noteId=noteId;
        }
        setEnterdNotes(enteredNotes){
            this.enteredNotes=enteredNotes;
        }
    }

    const enteredTextDetails = new Note(date,noteId,enteredNotes);
    console.log(enteredTextDetails);
    document.getElementById("note").reset();   
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
const noteDetails=document.getElementById("getNotes");
if(noteDetails) noteDetails.addEventListener('click',getNotes);

 function getNotes(){
     fetch("http://localhost:3000/notes/")
     .then((res)=>res.json())
     .then((data)=>{
         console.log(data);
         let unorderdlist=document.getElementById("noteDetails");

         data.forEach((note)=>{
             let li=document.createElement('li');
             let text=document.createTextNode(note.noteContent);
             li.appendChild(text);
             unorderdlist.appendChild(li);

         })


     })
     .catch((err)=>console.log(`Error! ${err}`));
 }

 class User{
    constructor(userName, password, fullName) {
        this.userName = userName;
        this.password = password;
        this.fullName = fullName;
      }
    
      getUsername() {
        return this.userName;
      }
  }

  class Note{

    constructor(text){
        this.note=text;
    }
}

