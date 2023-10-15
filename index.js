
console.log('working');

const nameValue = document.getElementById('fullName');
const mailValue = document.getElementById('E-mail');



document.getElementById('Form').addEventListener('submit',(e)=>{
    
  e.preventDefault();
  
const fullname = nameValue.value;
const mail = mailValue.value;
  localStorage.setItem('FullName',fullname);
  localStorage.setItem('mail',mail);
 
  console.log('submitted');
});

