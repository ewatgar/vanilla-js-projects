const main = document.getElementsByTagName('main')[0];
const colorHex = document.getElementById('color-hex');

const btn = document.getElementById('btn-new-color');
btn.addEventListener('click',onClick);

function onClick(){
    const newColor = getNewColorCode();
    console.log(newColor);
    colorHex.innerText = newColor;
    main.style.backgroundColor = newColor;
}

function getNewColorCode(){
    let colorRGB = '#';
    // R -> 0, G -> 1, B -> 2
    for(let i=0; i<3; i++){
        const decimalPart = Math.floor(Math.random() * 225) + 1;
        const hexPart = decimalPart.toString(16);
        colorRGB+=hexPart;
    }
    return colorRGB;
}