class Ingredients{
    constructor(id,name,image,calories){
        this.id = id;
        this.name = name;
        this.image = image;
        this.calories = calories;
    }
    RenderIng(){
        return `<div id="item ${this.id}">
        <p>ingredient details:</p>
        <img src="${this.image}" alt="${this.name} picture">
        <span>calories: ${this.calories}</span>
        </div>`;
    }
}

const ingredientJson=[
    {
        id: 1,
        name: "Bacon",
        image: "https://www.themealdb.com/images/ingredients/Bacon.png",
        calories: 100
    },
    {
        id: 2,
        name: "egg",
        image: "https://www.themealdb.com/images/ingredients/egg.png",
        calories: 50
    },
    {
        id: 3,
        name: "bagel",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/20090424_Bagels_001.JPG",
        calories: 200
    },
    {
        id:4,
        name:"Pasta",
        image:"https://d2wrwj382xgrci.cloudfront.net/Pictures/1024x536/9/2/2/8922_pasta06.04_750618.jpg",
        calories:80
    },
    {
        id:5,
        name:"Tomato",
        image:"https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
        calories:120
    },
    {
        id:6,
        name:"Cream sauce",
        image:"https://chen-chesed.com/wp-content/uploads/2020/12/שמנת-בישו.jpg",
        calories:80
    }

]
ingArr=ingredientJson.map(a=> a=new Ingredients(a.id,a.name,a.image,a.calories));

function AddNewIng(){
    let ingId=ingArr[ingArr.length-1].id+1;
let ingName=document.getElementById("name").value;
let ingImage=document.getElementById("image").value;
let ingCalories=document.getElementById("calories").value;
newIng= new Ingredients(ingId,ingName,ingImage,parseInt(ingCalories));

ingArr.push(newIng);
alert("added new ingredient");
document.getElementById("info").innerHTML="";

}

class DishRecipe{
constructor(name,Ingredients,cooktime,cookingmethod,image){
this.name=name;
this.Ingredients=Ingredients;
this.cooktime=cooktime;
this.cookingmethod=cookingmethod;
this.image=image;
}

GetTotalCalories(ingredients){
    var totalCalories=0;
    ingredients.forEach(ingredient => {
        totalCalories+=parseInt(ingredient.calories);
    });
}

RenderDishRecipe(){

    let sumDishCalories=this.GetTotalCalories(this.Ingredients);
    str="";
    str=(`<div class="dishRecipe">
    <h2>Dish Recipe Info: </h2>
    <img src="${this.image}" alt="${this.name}"> 
    <h3>${this.name}</h3>
    <h4> CookingMethod:<span>${this.cookingmethod}</span> </h4>
    <h4>Total Cooking Time: <span>${this.time}</span></h4>
    <h4>Calories: <span>${sumDishCalories}</span> </h4><br/>
        <button id="${this.name}" onclick="getIngredients(this.id)" >Show Ingredients</button>
        </div>`);

        return str;

    


}
GetIngredients(ingredients){

for(var f=0;f<ingredients.length;f++){

    return `<div id="item ${ingredients.id}">
    <p>ingredient details:</p>
    <img src="${ingredients.image}" alt="${ingredients.name} picture">
    <span>calories: ${ingredients.calories}</span>
    </div>`;

}


}


}