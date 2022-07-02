
let listUL:any = document.querySelector('ul');
let listInput:any = document.querySelector('input');
let listButton:any = document.querySelector('button');

        listButton.addEventListener('click', () => {
           const myItem = listInput.value;
           listInput.value = ''; 

        const listLi:any = document.createElement('li');
        const listSpan:any = document.createElement('span');
        const listBtn:any = document.createElement('button');

    listLi.appendChild(listSpan); //listLi = item to be added
    listSpan.textContent = myItem;

    listLi.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    listUL.appendChild(listLi);

    listBtn.addEventListener('click', () =>{
        listUL.removeChild(listLi);
    });

    listInput.focus();
        });