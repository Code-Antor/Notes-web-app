let content = document.querySelectorAll('.content');
let input = document.querySelectorAll('.input');
let btn = document.querySelector('.btn');
let main = document.querySelector('.main');
let remove = document.querySelector('.delAll');

btn.addEventListener('click',function(){
    let notes = document.createElement('div');
    notes.className = 'content';
    notes.setAttribute('contenteditable','true');
    main.appendChild(notes);

    let pera = document.createElement('p');
    pera.className = 'input';
    notes.appendChild(pera);
    pera.textContent = "This is a placeholder text.";

    let img = document.createElement('img');
    img.className = 'del';
    img.src = 'images/delete.png'    
    notes.appendChild(img);

    img.addEventListener('click',function(){
        this.parentElement.remove();
    })

    remove.addEventListener('click',function(){
        notes.remove();
    })

})


   