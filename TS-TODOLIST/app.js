var listUL = document.querySelector('ul');
var listInput = document.querySelector('input');
var listButton = document.querySelector('button');
listButton.addEventListener('click', function () {
    var myItem = listInput.value;
    listInput.value = '';
    var listLi = document.createElement('li');
    var listSpan = document.createElement('span');
    var listBtn = document.createElement('button');
    listLi.appendChild(listSpan); //listLi = item to be added
    listSpan.textContent = myItem;
    listLi.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    listUL.appendChild(listLi);
    listBtn.addEventListener('click', function () {
        listUL.removeChild(listLi);
    });
    listInput.focus();
});
