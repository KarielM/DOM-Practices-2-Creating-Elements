var elementSelect;
var divSelect;
var text;

document.querySelector('button.submit').addEventListener('click', () => {
    divSelect = `div-${document.getElementById('targetDiv').value}`;
    elementSelect = document.getElementById('elements').value;
    let position = document.getElementById('afterBeginBeforeEnd').value;
    text = document.querySelector('.textInput').value;
    // console.log(divSelect, elementSelect, text)
    newInnerHTML = `<${elementSelect} id = "${divSelect} ${text} ${elementSelect}-div">${text}</${elementSelect}`;
    document.getElementById(`${divSelect}`).insertAdjacentHTML(`${position}`,`${newInnerHTML}`);
    document.getElementById('removalSelector').insertAdjacentHTML('beforeend', `$<option id = "${divSelect} ${text} ${elementSelect}"> ${divSelect} ${text} ${elementSelect}</option>`)
    // console.log(divSelect, elementSelect, position, text, newInnerHTML);
})

document.querySelector('button.remove').addEventListener('click', () => {
    // let child = document.getElementById('removalSelector').value;
    let divChild = document.getElementById('removalSelector').value + "-div";
    // console.log(`${document.getElementById('removalSelector').value}-div`);
    document.getElementById(document.getElementById('removalSelector').value).remove();
    document.getElementById(divChild).remove();
    
   
})
// //"DOM Javascript won't let an element commit suicide but it does permit infanticide"
// document.querySelector('button.remove').addEventListener('click', () => {
//     console.log(document.getElementById('removalSelector').value);
//     // console.log(document.getElementById(`${divSelect} ${text} ${elementSelect}`));
//     // console.log(element);
//     // console.log(document.getElementById(`"${element}"`))
//     // let element = document.getElementById(`${divSelect} ${text} ${elementSelect}`);
//     // document.getElementById(`${element}`).remove();

    
//     // document.getElementById("container").remove(document.querySelector(`${divSelect}`));
//     // document.querySelector(`${divSelect}`).remove(`${elementSelect}`);
//     let element = document.getElementById(document.getElementById('removalSelector').value)/*.remove()*/;
//     element.remove();
//     console.log(element);
//     document.getElementById("removalSelector").remove(document.getElementById('removalSelector').value)
// })






















// document.querySelector(".submit").addEventListener("submit", myFunction);

// function myFunction() {
//     let element;
// };


// if (document.getElementById("targetDiv").value === 1) {
//     document.getElementById("Div-1").insertAdjacentHTML(position, text);
// }

// else if (document.getElementById("targetDiv").value === 2) {
//     document.getElementById("Div-2").insertAdjacentHTML(position, text);
// }

// else if (document.getElementById("targetDiv").value === 3) {
//     document.getElementById("Div-3").insertAdjacentHTML(position, text);
// }

// else if (document.getElementById("targetDiv").value === 4) {
//     document.getElementById("Div-4").insertAdjacentHTML(position, text);
// };
