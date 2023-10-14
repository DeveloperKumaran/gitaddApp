
/*listItems[1].style.background='green';
listItems[2].style.display = "hidden";

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length;i++){
    odd[i].style.background = "green";
}
*/



var newDiv = document.getElementById('#header-title');

var newDivText = document.createTextNode('Hello ');

newDiv.appendChild(newDivText);



var listItems = document.getElementById('#items');



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  
  var newItem = document.getElementById('item').value;

  
  var li = document.createElement('li');
  
  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));

  
  var deleteBtn = document.createElement('button');

  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  
  deleteBtn.appendChild(document.createTextNode('X'));

  
  li.appendChild(deleteBtn);

  
  itemList.appendChild(li);
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


var editbtn = document.createElement('button').appendChild(document.createTextNode('EDIT'));

listItems.forEach(list => {
    list.appendChild(editbtn);
});





