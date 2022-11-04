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


