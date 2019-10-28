// recieve the request
var responseHandler = function() {
    let liquorArray = JSON.parse(this.responseText);
    liquorArray.forEach(liquor=>{
        let {id,name,type} = liquor;
        let newOption = document.createElement('option');
        newOption.innerText = `${name} | ${type}`;
        newOption.setAttribute('value',id);
        document.querySelector('#liquorSelect').appendChild(newOption);
    });
};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "/liquor/index";
request.open("GET", url);

// send the request
request.send();