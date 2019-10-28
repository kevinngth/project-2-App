// // let data = {name:'Pinot Noir',type:'wine'};
// // console.log(JSON.stringify(data));
// // const xhr = new XMLHttpRequest();   // new HttpRequest instance

// // xhr.addEventListener("load", function(){

// //   console.log("DONE");
// //   console.log( this.responseText );
// // });

// // xhr.open("POST", '/liquor/new');
// // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

// // xhr.send(JSON.stringify(data));

// // const responseHandler2 = function() {
// //     console.log("response text", this.responseText);
// //     console.log("status text", this.statusText);
// //     console.log("status code", this.status);
// // };

// // const ajaxFunction = (data) => {
// //     let xhr = new XMLHttpRequest();
// //     xhr.withCredentials = true;
// //     xhr.addEventListener("load",responseHandler2);
// //     let url = "/liquor/new";
// //     xhr.open("POST", url);
// //     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //     xhr.send(JSON.stringify(data));
// // };

// // const submitClick = (event) => {
// //     let name = document.querySelector('#liquorName');
// //     let type = document.querySelector('#liquorType');
// //     var data = { "name": "Jack Daniels", "type": "Whisky"};
// //     ajaxFunction(data);
// // };
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