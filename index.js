
console.log('working');

let nameValue = document.getElementById('fullName');
let mailValue = document.getElementById('E-mail');


let deleteBtn;

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
  
let fullname = nameValue.value;
let mail = mailValue.value;
  /*localStorage.setItem('FullName',fullname);
  localStorage.setItem('mail',mail);*/

  let newUser = new User(fullname,mail);

  let userString = JSON.stringify(newUser);

  localStorage.setItem('userdetails',userString);

  let ulist = document.createElement('ul');


    let list = document.createElement('li');

    ulist

    list.classList = 'detail-list';

  



    list.innerHTML = `name: ${fullname}   email: ${mail}   `;

    deleteBtn = document.createElement('button');

    deleteBtn.classList = 'delete-btn';
    deleteBtn.id = 'del';

    deleteBtn.innerText = 'delete';

    list.appendChild(deleteBtn);




    editBtn = document.createElement('button');

    editBtn.classList = 'edit-btn';
    editBtn.id = 'edit';

    editBtn.innerText = 'Edit';

    list.appendChild(editBtn);

    ulist.appendChild(list)

    document.body.appendChild(ulist);
 
  console.log(list);

  editBtn.addEventListener('click',(e)=>{
    
    document.getElementById('fullName').value = fullname;

    list.remove();
  })

  deleteBtn.addEventListener('click', (e)=>{
    list.remove();

    localStorage.removeItem(this.userString);
  })
});





