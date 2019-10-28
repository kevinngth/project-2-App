// recieve the request
var responseHandler = function() {
    let liquorArray = JSON.parse(this.responseText);
    liquorArray.forEach(liquor=>{
        let {id,name,type} = liquor;
        if (document.querySelector(`#list-${type}`)===null) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('tab-pane', 'fade', 'show');
            newDiv.id = `list-${type}`;
            let newLi = document.createElement('li');
            let newA = document.createElement('a');
            newA.classList.add('text-light');
            newA.innerHTML = name;
            newA.href = `/liquor/${id}`;
            newLi.appendChild(newA);
            newDiv.appendChild(newLi);
            document.querySelector('#nav-tabContent').appendChild(newDiv);
        } else {
            let newLi = document.createElement('li');
            let newA = document.createElement('a');
            newA.innerHTML = name;
            newA.classList.add('text-light');
            newA.href = `/liquor/${id}`;
            newLi.appendChild(newA);
            document.querySelector(`#list-${type}`).appendChild(newLi);
        };
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