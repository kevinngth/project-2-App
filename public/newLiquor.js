const postNewLiquor = event => {
    let name = event.target[0].value;
    let type = event.target[1].value;
    let data = { name: event.target[0].value, type: event.target[1].value};
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/liquor/new');
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(data));
};
// // // add click event listener to submit button
document.querySelector('#newLiquorFormSubmit').addEventListener('submit', postNewLiquor);