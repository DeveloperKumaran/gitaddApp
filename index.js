
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
listItems[0].appendChild(newDivText);

