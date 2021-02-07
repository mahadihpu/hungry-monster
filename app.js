
document.getElementById("search-button").addEventListener("click",function(){

const keyword = document.getElementById("search-box").value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
.then(res => res.json())
.then(data => showData(data))

const itemsDisplay = document.getElementById("items-display");
itemsDisplay.innerHTML = null;
const showData = meal => {
    meal.meals.forEach(oneMeal => {
        const itemDisplay = document.createElement("div");
        itemDisplay.className = "card bg-light";
        itemDisplay.style="width: 18rem;";
        console.log(oneMeal);
        const itemInfo = `
        <img onclick="showDetails('${oneMeal.idMeal}')" class="card-img" src="${oneMeal.strMealThumb}">
        <div class="card-body">
        <h3>${oneMeal.strMeal}</h3>
        </div>
        `
        itemDisplay.innerHTML = itemInfo;
        itemsDisplay.appendChild(itemDisplay);
    });
    
}
})
const showDetails = item =>{
   const mainBody =  document.getElementById("main-body");
   mainBody.style.display = "none";
   const displayDetails = document.getElementById("display-details");
   displayDetails.style.display = "block";
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderInformation(data))

    const renderInformation = item =>{
        item.meals.forEach(itemDetail => {
            const itemDisplay = document.createElement("div");
            itemDisplay.className = "card-details bg-light mx-auto";
            itemDisplay.style="width: 18rem;";
            const itemInfo = `
            <img class="card-img-top img-fluid" src="${itemDetail.strMealThumb}">
            <div class="card-detail-body">
            <h3>${itemDetail.strMeal}</h3>
            <ul>
            <li>${itemDetail.strIngredient1}</li>
            <li>${itemDetail.strIngredient2}</li>
            <li>${itemDetail.strIngredient3}</li>
            <li>${itemDetail.strIngredient4}</li>
            <li>${itemDetail.strIngredient5}</li>
            </ul>
            <button class="btn btn-warning" onclick="location.href='index.html';">Go Back</button>
            </div>
            `
            itemDisplay.innerHTML = itemInfo;
            displayDetails.appendChild(itemDisplay);
        });
    }


}
