
console.log('working');

const nameValue = document.getElementById('fullName');
const mailValue = document.getElementById('E-mail');

class User{
  name = ''
  email = ''

  constructor(name,email){
     this.name = name
     this.email = email
  }
}

document.getElementById('Form').addEventListener('submit',(e)=>{
    
  e.preventDefault();
  
const fullname = nameValue.value;
const mail = mailValue.value;
  /*localStorage.setItem('FullName',fullname);
  localStorage.setItem('mail',mail);*/

  let newUser = new User(fullname,mail);

  let userString = JSON.stringify(newUser);

  localStorage.setItem('userdetails',userString);


 
  console.log('submitted');
});

