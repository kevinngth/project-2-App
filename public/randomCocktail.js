var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        let {strDrink,strGlass,strInstructions,strDrinkThumb,strIngredient1,strMeasure1,strIngredient2,strMeasure2,strIngredient3,strMeasure3,strIngredient4,strMeasure4} = JSON.parse(this.responseText).drinks[0];
        let output = '<div className="card mb-3">'+'<img src='+strDrinkThumb+' className="card-img-top"/><div className="card-body"><h5 className="card-title">'+strDrink+'</h5><p className="card-text">'+strInstructions+'</p><p className="card-text"><small className="text-muted">Last</small></p></div></div>';
        document.querySelector('#card').innerHTML = output;
    }
});

xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/random.php");
xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e58b63a2c1mshe6929549bc8fde4p1fe576jsn26b5394fcf54");

xhr.send();