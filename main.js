let paintMe = document.querySelector('.paintMe');
let randomColorButton = document.querySelector('.randomColor');
let addColor = document.querySelector('.addColor');



function randomCalor() {
    let randomColor = '1234567890ABCDEFabcdef';
    let randomColorArray = Array.from(randomColor);

    let finlayRandomColor = '';
    let colorLength = 6;
    for (let i = 0; i < colorLength; i++) {
        let randomNumber = Math.floor(Math.random() * randomColorArray.length);
        finlayRandomColor += randomColorArray[randomNumber];
    }
    addColor.value = `#${finlayRandomColor}`;
    paintMe.style.backgroundColor = `#${finlayRandomColor}`;
}

randomColorButton.addEventListener('click', randomCalor);

addColor.addEventListener('keyup', () => {
    paintMe.style.backgroundColor = addColor.value;

})


paintMe.addEventListener('mouseover', () => {
    let one = setInterval(randomCalor, 500)
    paintMe.addEventListener('mouseleave', () => {
        clearInterval(one)
    });


});