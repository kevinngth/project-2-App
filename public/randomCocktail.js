var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        let {strDrink,strGlass,strInstructions,strDrinkThumb,strIngredient1,strMeasure1,strIngredient2,strMeasure2,strIngredient3,strMeasure3,strIngredient4,strMeasure4} = JSON.parse(this.responseText).drinks[0];
        console.log(strDrink,strGlass,strInstructions,strDrinkThumb,strIngredient1,strMeasure1,strIngredient2,strMeasure2,strIngredient3,strMeasure3,strIngredient4,strMeasure4);
        document.querySelector('#cocktailImg').src = strDrinkThumb;
        document.querySelector('#cocktailInstructions').innerHTML = strInstructions;
        document.querySelector('#cocktailTitle').innerHTML = strDrink;
        if (strIngredient1) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `${strIngredient1} ${strMeasure1}`;
            document.querySelector('#cocktailIngredients').appendChild(newItem);
        };
        if (strIngredient2) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `${strIngredient2} ${strMeasure2}`;
            document.querySelector('#cocktailIngredients').appendChild(newItem);
        };
        if (strIngredient3) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `${strIngredient3} ${strMeasure3}`;
            document.querySelector('#cocktailIngredients').appendChild(newItem);
        };
        if (strIngredient4) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `${strIngredient4} ${strMeasure4}`;
            document.querySelector('#cocktailIngredients').appendChild(newItem);
        };
    };
});

xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/random.php");
xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e58b63a2c1mshe6929549bc8fde4p1fe576jsn26b5394fcf54");
xhr.send();