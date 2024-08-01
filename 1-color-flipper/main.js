const main = document.getElementsByTagName('main')[0];
const colorHex = document.getElementById('color-hex');
const colorName = document.getElementById('color-name');

const btn = document.getElementById('btn-new-color');
btn.addEventListener('click',onClick);

function onClick(){
    const newColor = generateNewColorCode();
    console.log(newColor);
    colorHex.innerText = `#${newColor}`;
    main.style.backgroundColor = `#${newColor}`;
    colorName.innerText = getColorNameFromApi(newColor);
}

function generateNewColorCode(){
    let colorRGB = '';
    // R -> 0, G -> 1, B -> 2
    for(let i=0; i<3; i++){
        const decimalPart = Math.floor(Math.random() * 225) + 1;
        const hexPart = decimalPart.toString(16);
        if (hexPart.length == 1) colorRGB += 0;
        colorRGB+=hexPart;
    }
    return colorRGB;
}

async function getColorNameFromApi(newColor){
    const apiURL = `https://www.thecolorapi.com/id?hex=${newColor}`;
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Color not found');
        }
        const data = await response.json();
        console.log(data.name.value);
        return data.name.value;
    } catch (error) {
        console.error(error);
        return 'no name found';
    }
}

/*
function getColorNameFromApi(newColor){
    const apiURL = `https://www.thecolorapi.com/id?hex=${newColor}`;
    return fetch(apiURL)
    .then(response => {
        if(!response.ok){
            throw new Error('Color not found');
        }
        return response.json()
    })
    .then(data => {
        console.log(data.name.value);
        return data.name.value;
    })
    .catch(error => {
        console.error(error);
        return 'no name found';
    });
}*/