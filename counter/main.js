let counter = 0;
const valueElement = document.getElementById('value');

const btnList = document.querySelectorAll('#btn-list button');
btnList.forEach(btn => {
    btn.addEventListener('click', onClick)
});

function onClick(event){
    const buttonId = event.target.id;
    let counterColor = 'black';

    switch(buttonId){
        case 'btn-increase':
            counter++;
            break;
        case 'btn-decrease':
            counter--
            break;
        case 'btn-reset':
            counter = 0;
            break;
    }
    if (counter > 0){
        counterColor = 'green';
    } else if (counter < 0){
        counterColor = 'maroon';
    }
    
    valueElement.innerText = counter;
    valueElement.style.color = counterColor;
}
