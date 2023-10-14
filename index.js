var listItems = document.querySelectorAll('ul');
listItems[1].style.background='green';
listItems[2].style.display = "hidden";

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length;i++){
    odd[i].style.background = "green";
}









